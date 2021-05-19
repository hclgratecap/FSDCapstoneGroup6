import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { RegistrationService } from 'src/app/service/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user= new User();
  msg='';

  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this._service .registerUserFromRemote(this.user).subscribe(data =>{
    console.log("response recieved");
    alert('successfully registered');
    this._router.navigate(['login']);
  },
    error => {
    console.log("exception occured");
    this.msg=error.error;
   })
  }
}
