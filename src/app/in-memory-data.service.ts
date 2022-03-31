import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Mobile', price:100, imageurl:"https://www.sellcell.com/assets/images/devices/006/iphone-7.jpg" },
      { id: 12, name: 'Watch1',price:50, imageurl:"https://www.businessinsider.in/photo/81550050/Master.jpg"  },
      { id: 13, name: 'Toy',price:10, imageurl:"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2074932.jpg" },
      { id: 14, name: 'Furniture',price:250, imageurl:"data:image/jpeg;base64,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" },
      { id: 15, name: 'Fruits',price:8, imageurl:"https://7man.com/wp-content/uploads/2019/10/mixed-fresh-fruit-baskets-gifts-delivery-kerala.jpg" },
      { id: 16, name: 'Shampoo',price:2, imageurl:"https://www.sephora.com/productimages/sku/s2496891-main-zoom.jpg?imwidth=315" },
      { id: 17, name: 'Soap',price:2, imageurl:"https://media.istockphoto.com/photos/piece-of-pink-soap-3d-rendering-picture-id614724682?k=20&m=614724682&s=612x612&w=0&h=WQKIU7qnYXaXw0aOdnDLGXKXje-R6LUo1ndFnMKv2Hg=" },
      { id: 18, name: 'Spoon',price:15, imageurl:"m.media-amazon.com/images/I/618F1Xwm49L._AC_SL1500_.jpg" },
      { id: 19, name: 'Tshirt',price:20, imageurl:"https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540" },
      { id: 20, name: 'Pants',price:18, imageurl:"https://cdn.shopify.com/s/files/1/0330/3299/4860/products/dwr_light_pants_pa-21su007_bg_hero_03_800x.jpg?v=1614385065" }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}
