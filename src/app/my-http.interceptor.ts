import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MyHttpInterceptor implements HttpInterceptor {

  

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(localStorage.getItem('token') !== null){
      
      let hearders:any = {token:localStorage.getItem('token')};

      request = request.clone({setHeaders: hearders});
    
    
    
    }
    return next.handle(request);
  }
}
