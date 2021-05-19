import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { User } from 'src/app/model/user';
import { RegistrationService } from 'src/app/service/registration.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = new User();
  msg='';
  message:string="welcome"+this.user.firstName;
  flag:number=0;
  
  constructor(private _service : RegistrationService, private _route:Router, private cartService:CartService) { }

  ngOnInit(): void {
    
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => 
      {
        this.flag=1;
        this.cartService.onLoginSuccess(data.firstName+" "+data.lastName , this.flag)
        this._route.navigate(['rest-1/r1'])
      },
      error =>{
         console.log("exceptions occured");
        this. msg="bad credentials";
      }
    )
   
  }
}
