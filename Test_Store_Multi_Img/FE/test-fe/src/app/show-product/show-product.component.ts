import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from "../service/product-service.service";
import {Product} from "../models/Product";

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=> {
      this.products = data;
    })
  }

}
