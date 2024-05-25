import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

constructor(private _ActivatedRoute:ActivatedRoute, private _EcomdataService:EcomdataService, private _CartService:CartService){}

productDetails:Product = {} as Product

ngOnInit(): void {
  
  this._ActivatedRoute.paramMap.subscribe({

    next:(params) =>{

      let productId:any = params.get('id');

      console.log(productId);
      
      this._EcomdataService.getProductsDetails(productId).subscribe({

        next: (response)=>{

          this.productDetails = response.data;
          console.log(this.productDetails);
          
        }

      }) 
    }
    
  })

  
}

productSlider: OwlOptions = {
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
//Post(add) products to cart
addCart(id: string): void{
  this._CartService.addToCart(id).subscribe({
    next: (response)=>{
      console.log(response);
    },
    error:(err)=>{
      console.log(err); 
    }
  })
}
}


