import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowProductComponent} from "./show-product/show-product.component";
import {CreateProductComponent} from "./create-product/create-product.component";


const routes: Routes = [
  {path: "" , component: CreateProductComponent} ,
  {path: "list" , component: ShowProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
