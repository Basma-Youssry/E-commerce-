import { SearchPipe } from './../../search.pipe';
import { TermtextPipe } from './../../termtext.pipe';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private _EcomdataService:EcomdataService, 
    private _CartService: CartService, 
    private _ToastrService:ToastrService,
    private _WishlistService: WishlistService){}

  products:Product[] = [];

  categories:any[] = [];

  searchTerm:string = "";

  wishlist:string[]= [];

    categorySliderOption: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: [],
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: false
    }

    mainSlider: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      navSpeed: 700,
      navText: [],
      autoplay: true,
      items: 1,
      nav: false
    }

  ngOnInit(): void {
    
    this._EcomdataService.addAllProducts().subscribe({
      
      next: (response) =>{

        this.products = response.data;
        console.log(this.products);
        
      }
    })

    //Get Categories
    this._EcomdataService.getCategories().subscribe({
      next:(response)=>{
        this.categories = response.data;    
        console.log(this.categories);
            
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

  //Post(add) products to cart
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

