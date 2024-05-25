import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient, private _AuthService:AuthService) {}

  addToCart(productId:string): Observable<any>{

  return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart`, {"productId": productId})

  }

  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);

  getUSerCart():Observable<any>{
    return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")
  }
  
  removeItem(productId:string): Observable<any>{

  return  this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`)
  }

  updateProductCart(productId:string, newCount:number): Observable<any>{

    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, 
    {
      "count": newCount
    }
    )
  }

  checkOut(cartId:string, userData:object):Observable<any>{

    return  this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress:userData
      }
      )
    }
    //There is a problem check Youssef Route chat   
    userData:any = this._AuthService.usreData.id

    showUserOrders():Observable<any>{
      
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${this.userData}`)

    }

}

 