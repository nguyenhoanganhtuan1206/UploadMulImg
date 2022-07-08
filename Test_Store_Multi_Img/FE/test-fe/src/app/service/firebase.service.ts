import { Injectable } from '@angular/core';
import {FileUpload} from "../models/FileUpload";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/storage";
import {finalize} from "rxjs/operators";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {ProductServiceService} from "./product-service.service";
import {ImageProductServiceService} from "./image-product-service.service";
import {ImageProduct} from "../models/ImageProduct";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  /* To store url img */
  urlImgs: any;
  imgProductObj: ImageProduct = null;
  imgProductList: any[] = [];

  constructor(private storage: AngularFireStorage , private db: AngularFireDatabase ,private imgProductService: ImageProductServiceService
              , private productService: ProductServiceService) {
  }

  /* Push img to storage */
  pushImgToStorage(fileUpload: FileUpload , product?: Product) {
    /* Tạo folder treen firebase */
    const filePath = `images/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;

          this.imgProductObj = new ImageProduct(fileUpload.url, product);
          this.imgProductObj.id = null;
          this.imgProductService.createImgProduct(this.imgProductObj).subscribe(()=> {
            console.log('created')
          })
        });
      })
    ).subscribe();
  }
}
