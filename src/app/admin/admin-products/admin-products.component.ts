import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products$: any;
  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();
  }

  ngOnInit(): void {}
}
