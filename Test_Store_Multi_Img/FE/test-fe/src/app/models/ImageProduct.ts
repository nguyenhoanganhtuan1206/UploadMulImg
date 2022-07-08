import {Product} from "./Product";

export class ImageProduct {
  id: number;
  link: string;
  product?: any;

  constructor(link: string , product?: any) {
    this.link = link;
    this.product = product;
  }
}
