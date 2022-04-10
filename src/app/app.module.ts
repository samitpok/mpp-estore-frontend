import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductsComponent,
    ProductDetailComponent,
    MessagesComponent,
    ProductSearchComponent,
    HeaderComponent,
    CartComponent,
    CheckoutComponent
  ],
  providers: [authInterceptorProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
