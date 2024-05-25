import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private _HttpClient:HttpClient) {}

  baseUrl:string = 'https://ecommerce.routemisr.com/api/v1/auth/';


  forgotPass(userEmail:object):Observable<any>{

   return this._HttpClient.post(this.baseUrl + 'forgotPasswords' ,userEmail);

  }

  resetCodee(resetCode:object):Observable<any>{

    return this._HttpClient.post(this.baseUrl + 'verifyResetCode' ,resetCode);

  }

  resetPass(resetPassForm:object):Observable<any>{

    return this._HttpClient.put(this.baseUrl + 'resetPassword', resetPassForm);

  }
}
