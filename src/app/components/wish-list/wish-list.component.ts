import { Product } from 'src/app/shared/interfaces/product';
import { WishlistService } from './../../shared/services/wishlist.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit{

  constructor(private _WishlistService:WishlistService, 
    private _ToastrService:ToastrService,
    private _CartService:CartService){}

  products:Product[] = [];

  wishlist:string[]= [];


  ngOnInit(): void {

    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
  
        this.products = response.data;
        
        const newData = response.data.map((item:any)=> item._id);

        this.wishlist = newData;
      }
    })

  }
  addFav(prodId:any):void{
    this._WishlistService.addtoWishList(prodId).subscribe({
      next:(response)=>{

        console.log(response);

        this._ToastrService.success(response.message);

        
      }
    })
  }
  removeFav(prodId:any):void{

    this._WishlistService.removeWishList(prodId).subscribe({
      next:(response)=>{
        console.log('TTT',response);

        this._ToastrService.success(response.message);

        this.wishlist = response.data;

        this._WishlistService.wishNumber.next(this.wishlist.length)
        
       let newData = this.products.filter((item)=> this.wishlist.includes(item._id));

        
        this.products = newData;
        
      }
    })

  }
  addCart(id: string): void{

    this._CartService.addToCart(id).subscribe({
      next: (response)=>{

        console.log(response.numOfCartItems);
        this._ToastrService.success(response.message, "FreshCart");

        this._CartService.cartNumber.next(response.numOfCartItems);
      },
      //There is problem
      error:(err)=>{
        console.log(err); 
      }
    })
  }
  
}
