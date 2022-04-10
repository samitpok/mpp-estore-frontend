import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../common/order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiOrderUrl = '';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient : HttpClient) {}

  //get Order method
  public getOrders() : Observable<Order[]>{
    return  this.httpClient.get<Order[]>(`${this.apiOrderUrl}/order/all`);
  }

  //add Order method
  public addOrder(name: string, shippingEmail : string, shippingAddress : string,
                  buyerEmail:string, buyerAddress:string,orderAmount : number): Observable<any> {

    return this.httpClient.post(this.apiOrderUrl + 'save', {
      "name": name,
      "shippingEmail":shippingEmail,
      "shippingAddress":shippingAddress,
      "buyerEmail":buyerEmail,
      "buyerAddress":buyerAddress,
      "orderAmount":orderAmount,
    }, this.httpOptions);
  }

  public updateOrder(order : Order) : Observable<Order>{
    return this.httpClient.put<Order> (`${this.apiOrderUrl}/order/update`,order);
  }

  public deleteOrder(orderId : number) : Observable<void>{
    return this.httpClient.delete<void> (`${this.apiOrderUrl}/order/delete/${orderId}`);
  }


}
