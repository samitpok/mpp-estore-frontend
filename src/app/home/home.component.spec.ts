import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProductSearchComponent } from '../product-search/product-search.component';
import { ProductService } from '../product.service';
import { PRODUCTS } from '../mock-products';

import { HomeComponent } from './home.component';

describe('DashboardComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let productService;
  let getHeroesSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    productService = jasmine.createSpyObj('ProductService', ['getHeroes']);
    getHeroesSpy = productService.getHeroes.and.returnValue(of(PRODUCTS));
    TestBed
        .configureTestingModule({
          declarations: [HomeComponent, ProductSearchComponent],
          imports: [RouterTestingModule.withRoutes([])],
          providers: [{provide: ProductService, useValue: productService}]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Top Products" as headline', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('Top Heroes');
  });

  it('should call ProductService', waitForAsync(() => {
       expect(getHeroesSpy.calls.any()).toBe(true);
     }));

  it('should display 4 links', waitForAsync(() => {
       expect(fixture.nativeElement.querySelectorAll('a').length).toEqual(4);
     }));
});
