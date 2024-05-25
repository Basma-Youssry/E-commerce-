import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor(private _HttpClient:HttpClient) { }


  addAllProducts():Observable<any>{

  return  this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products');

  }

  getProductsDetails(id:string):Observable<any>{

    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);

  }
  getCategories():Observable<any>{
    return  this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories');
  }
  getCategoryDetails(id:string):Observable<any>{
    return  this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
  }

  getbrands():Observable<any>{
    return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands');
  }

  getSpecificBrand(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }
}
