import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient, private _Router:Router){}

  usreData:any = '';

  decodeToken(){

    if(localStorage.getItem('token') !== null){

      let locaToken:any = localStorage.getItem('token');

      let decode = jwtDecode(locaToken);

      this.usreData = decode;

      console.log(this.usreData); 
    }

  }
  sendRegister(userData:object):Observable<any>{
    // console.log(this.usreData);
    
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, userData )

  }

  sendLogin(userData:object):Observable<any>{

    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, userData )
  
  }
  //Week4 V.9 (Login)
  signOut(){
    localStorage.removeItem('token');

    this._Router.navigate(['/login']);
  }
}
