import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categotrie-details',
  templateUrl: './categotrie-details.component.html',
  styleUrls: ['./categotrie-details.component.css']
})
export class CategotrieDetailsComponent implements OnInit{

constructor(private _ActivatedRoute:ActivatedRoute, private _EcomdataService:EcomdataService){}

categoryDetails:Category = {} as Category

categoryId:any = '';

ngOnInit(): void {
  
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
      this.categoryId = params.get('id');
    }
  })

  this._EcomdataService.getCategoryDetails(this.categoryId).subscribe({
    
    next: (response)=>{

      this.categoryDetails = response.data;
      console.log(this.categoryDetails);
      
    }
  })
}

}


