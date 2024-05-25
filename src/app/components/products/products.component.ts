import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  constructor(private _EcomdataService:EcomdataService, private _WishlistService:WishlistService,
              private _ToastrService:ToastrService, private _CartService:CartService
  ){}

  products:Product[] = [];
  searchTerm:string = "";
  wishlist:string[]= [];


  ngOnInit(): void {
    this._EcomdataService.addAllProducts().subscribe({
      
      next: (response) =>{

        this.products = response.data;
        console.log(this.products);
        
      }
    })
    this._WishlistService.getWishList().subscribe({
      next:(response)=>{
        console.log('get',response.data);

      const newData = response.data.map((item:any)=> item._id);

      this.wishlist = newData;
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
addFav(prodId:any):void{
  this._WishlistService.addtoWishList(prodId).subscribe({
    next:(response)=>{


      this._ToastrService.success(response.message);

      this.wishlist = response.data;

      this._WishlistService.wishNumber.next(this.wishlist.length)
    }
  })
}

removeFav(prodId:any):void{

  this._WishlistService.removeWishList(prodId).subscribe({
    next:(response)=>{
      console.log(response);

      this._ToastrService.success(response.message);

      this.wishlist = response.data;
      
    }
  })

}
}


