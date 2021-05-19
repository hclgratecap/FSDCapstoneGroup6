import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(public http:HttpClient) { }

  //passing the details of data transfer object to checkout controller in backend
  public checkoutFormPost(purchase:Purchase):Observable<any>{
    console.log("data is",purchase);
    return this.http.post<any>("http://localhost:8081/checkout",purchase)}     
}
