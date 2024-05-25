import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared/interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { Subscription, windowToggle } from 'rxjs';
// import { Subscription } from 'rxjs';
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit{

  constructor(private _EcomdataService:EcomdataService){}

  brands:Brand[] = [];

  brandsDetails:any = '';

  subscibeId!:Subscription;
  ngOnInit(): void {
    this._EcomdataService.getbrands().subscribe({
      next:(response)=>{
        this.brands = response.data;

        console.log(this.brands);
        
      }
    })
  }

  specificBrand(id:string):void {
    this.subscibeId = this._EcomdataService.getSpecificBrand(id).subscribe({
      next:(response)=>{
        this.brandsDetails = response.data;
        console.log(this.brandsDetails);
        
      }
    }) 
  }
  close(element:any):void{
    
    console.log(element);
    
    

    // this.subscibeId.unsubscribe();    

    // console.log('Basma');
    
    
    
  }

}
