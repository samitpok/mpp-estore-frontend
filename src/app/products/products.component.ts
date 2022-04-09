import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isProductUploadSuccessful : any;
  isProductUploadFailed : any;

  form : any = {
    name : null,
    price : null,
    quantity : null,
    description : null,
    imageUrl : null
  }

  errorMessage: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  }


  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product.id).subscribe();
  }

  onSubmit(): void {
    const { name, price, quantity,description,imageUrl } = this.form;
    
    this.productService.addProduct(name, price, quantity,description,imageUrl).subscribe({
      next: data => {
        console.log("reg subscription")
        console.log(data);
        console.log("reg subscription")
        this.isProductUploadSuccessful = true;
        this.isProductUploadFailed = false;
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
   
      }
    });
  }
    
}