import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { Order } from 'src/app/model/order';
import { Purchase } from 'src/app/model/purchase';
import { CheckoutService } from 'src/app/service/checkout.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit {

  order=new Order();
  address=new Address();
  customer=new Customer();
  purchase!:Purchase;
  total_price:any;
  total_quantity:any;


  constructor( public service:CheckoutService,public route:Router) 
  { }
  
  ngDoCheck(){
    this.total_price=localStorage.getItem('total_price');
    this.total_quantity=localStorage.getItem('total_quantity');
   }

  ngOnInit(): void {
  }

  register(data:any){  
    this.order.totalPrice=this.total_price;
    this.order.totalQuantity=this.total_quantity;
    this.purchase = new Purchase(this.customer,this.address,this.order);
   
    this.service.checkoutFormPost(this.purchase).subscribe(data =>{
      alert("YOUR ORDER IS GOT PLACED");
      localStorage.clear();
      this.route.navigate(['']);
    },
    error => {
      alert("SOMETHING WENT WRONG");
    }) 
  }
  
}
