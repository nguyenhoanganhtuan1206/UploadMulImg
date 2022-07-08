import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";

const API_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  /* Create product */
  createProduct(product: any): Observable<any> {
    return this.httpClient.post<any>(`${API_URL}/create-product`,product);
  }

  /* Get product by id */
  getProductById(productId: number): Observable<Product> {
    return this.httpClient.get<any>(`${API_URL}/product/${productId}`);
  }

  /* Get all */
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${API_URL}/products`);
  }

  constructor(private httpClient: HttpClient) { }
}
