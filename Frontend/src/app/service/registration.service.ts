import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import {HttpClient} from '@angular/common/http'
 

@ Injectable({
  providedIn: 'root'
})
export class RegistrationService
 {
  

  constructor( private _http : HttpClient) {}
   //logging in the user after verifying the credentials from the database
  public loginUserFromRemote(user:User):Observable<any> {
     return this._http.post<any>("http://localhost:8081/login",user)
  } 
   //registering the user data in the database
  public registerUserFromRemote(user :User):Observable<any> {
     return this._http.post<any>("http://localhost:8081/registeruser",user);
  }

   handleError(error : Response){ }
}
