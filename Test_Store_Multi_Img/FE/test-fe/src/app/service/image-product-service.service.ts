import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ImageProduct} from "../models/ImageProduct";

const API_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class ImageProductServiceService {

  /* Create images product */
  createImgProduct(imgProduct?: any): Observable<any> {
    return this.httpClient.post(`${API_URL}/create-images` ,imgProduct);
  }

  constructor(private httpClient: HttpClient) { }
}
