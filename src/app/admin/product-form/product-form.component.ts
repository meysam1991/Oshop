import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories$: any;
  product: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories$ = categoryService.getAll();
    let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    alert(id);
    if (id) this.productService.get(id).subscribe((p) => (this.product = p));
  }
  save(product: any) {
    console.log(product);
    this.productService.create(product);
    //this.router.navigate(['/admin/products']);
  }
  ngOnInit(): void {}
}
