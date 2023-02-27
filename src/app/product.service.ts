import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public http: HttpClient) {}

  create(product: any) {
    this.http.post('https://localhost:5001/Product', JSON.stringify(product));
  }
  getAll() {
    return this.http.get('https://localhost:5001/Product/GetAll');
  }
  get(productId: number) {
    return this.http.get(
      'https://localhost:5001/Product/GetById?id=' + productId
    );
  }
}
