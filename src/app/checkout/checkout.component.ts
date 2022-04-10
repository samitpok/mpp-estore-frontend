import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../service/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  constructor(private orderService : CheckoutService) { }

  isOrderloadSuccessful : any;
  isOrderUploadFailed : any;
  errorMessage: any;

  form : any = {
    name : null,
    shippingEmail : null,
    shippingAddress : null,
    buyerEmail : null,
    buyerAddress : null,
    orderAmount : null
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { name, shippingEmail, shippingAddress,buyerEmail,buyerAddress,orderAmount } = this.form;
    
    this.orderService.addOrder(name, shippingEmail, shippingAddress,buyerEmail,buyerAddress,orderAmount).subscribe({
      next: data => {
        console.log("reg subscription")
        console.log(data);
        console.log("reg subscription")
        this.isOrderloadSuccessful = true;
        this.isOrderUploadFailed = false;
      },
      error: err => {
        console.log(err);
        this.errorMessage = err.error.message;
   
      }
    });
  }
}
