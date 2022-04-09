import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService,private cartService:CartService ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;//.slice(1, 5);
        console.log(this.products);
      }
        );
  }
  addtocart(product: any){
    this.cartService.addtoCart(product);
  }
}
