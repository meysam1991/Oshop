import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(public http: HttpClient) {}

  create(product: any) {
    this.http.post('https://localhost:5001/Product', product);
  }
}
