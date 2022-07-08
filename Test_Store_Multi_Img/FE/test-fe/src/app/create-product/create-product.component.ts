import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../service/firebase.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {FileUpload} from "../models/FileUpload";
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../models/Product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  /* To store data from form */
  productCreate: Product;

  /* Form create */
  formCreate: FormGroup;

  /* To store url img */
  urls = new Array<any>();
  selectedFiles: any;

  currentImageUpload: FileUpload;
  currentImagesUpload: File[] = [];

  constructor(private firebaseService: FirebaseService , private fb: FormBuilder , private productService: ProductServiceService) { }

  ngOnInit(): void {
    /* form create */
    this.formCreate = this.fb.group({
      name: ['']
    })
  }

  createProduct() {
    /* Get properties in form */
    this.productCreate = this.formCreate.value;

    this.productService.createProduct(this.productCreate).subscribe(data => {
      /* Tránh lỗi vòng lặp */
      this.currentImagesUpload = [];
      /* Lấy và đẩy từng file vào 1 mảng */
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.currentImagesUpload.push(this.selectedFiles.item(i));
      }

      /* push từng file */
      for (let i = 0; i < this.currentImagesUpload.length; i++) {
        this.currentImageUpload = new FileUpload(this.currentImagesUpload[i]);

        /* Lưu trên firebase */
        this.firebaseService.pushImgToStorage(this.currentImageUpload, data);
      }
    });
  }

  preview(event: any) {
    /* To get info files selected */
    this.selectedFiles = event.target.files;

    /* To show images */
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  /* Getter properties form */
  get name() {
    return this.formCreate.get('name');
  }
}
