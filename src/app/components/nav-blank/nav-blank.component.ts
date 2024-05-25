import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit{

  cartCount:number = 0;
  wishCount:number = 0;

  constructor(private _AuthService:AuthService, 
              private _CartService: CartService, 
              private _WishlistService:WishlistService){}

    //Week4 V.9 (Login)
  signOutUser():void{
    this._AuthService.signOut();
  }

  ngOnInit(): void{

    this._CartService.getUSerCart().subscribe({

      next:(response)=>{

        this.cartCount= response.numOfCartItems;
        // console.log(response.numOfCartItems);
        
      }
    })
     this._CartService.cartNumber.subscribe({
      next:(data)=>{
        this.cartCount = data;
      }
     })

     this._WishlistService.getWishList().subscribe({
      next:(respose)=>{
        this.wishCount = respose.count;
      }
     })
    //  this._CartService.removeItem(id:string).subscribe({
    //   next: (response)=>{
    //     console.log(response);
        
    //   }
    //  })
    //  this._WishlistService.getWishList().subscribe({
    //   next:(response)=>{

    //     this.wishCount = response.count;
        
    //   }
    //  })
     this._WishlistService.wishNumber.subscribe({
      next:(data)=>{
        this.wishCount = data;
      }
     })
  }
}
