import { CommonModule } from '@angular/common';
// import { ProductsComponent } from './../products/products.component';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { NavBlankComponent } from '../nav-blank/nav-blank.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private _CartService:CartService){}

  cartDetails:any = {}

  ngOnInit(): void {
    
    this._CartService.getUSerCart().subscribe({

      next:(response)=>{

        this.cartDetails = response.data;

        console.log(this.cartDetails);

      },
      error:(err)=>{
        console.log(err);     
      }

    })
  }

  cartcount:any;
  
  removeCartItem(id:string):void{

    this._CartService.removeItem(id).subscribe({

      next:(response)=>{
        this.cartDetails = response.data;

        // this._NavBlankComponent.cartCount = response.numOfCartItems

        this._CartService.cartNumber.next(response.numOfCartItems);
        this.cartcount = response.numOfCartItems
        console.log(this.cartcount);
      },
      error:(err)=>{
        console.log(err);   
      }

    })
  }

  changeCount(id:string, count:number){
    if(count > 0){
      this._CartService.updateProductCart(id, count).subscribe({

        next:(response)=>{
          this.cartDetails = response.data;
          console.log(this.cartDetails);
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
    
  }


}
