import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Mobile' },
      { id: 12, name: 'Watch' },
      { id: 13, name: 'Toy' },
      { id: 14, name: 'Furniture' },
      { id: 15, name: 'Fruits' },
      { id: 16, name: 'Shampoo' },
      { id: 17, name: 'Soap' },
      { id: 18, name: 'Spoon' },
      { id: 19, name: 'Tshirt' },
      { id: 20, name: 'Pants' }
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
