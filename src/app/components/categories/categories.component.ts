import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { Component, OnInit } from '@angular/core';
import { Category} from 'src/app/shared/interfaces/product';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  constructor(private _EcomdataService: EcomdataService){}

  categoryData:Category[] = [];

  ngOnInit(): void {
    this._EcomdataService.getCategories().subscribe({
      next:(response)=>{
        
       this.categoryData = response.data
        console.log(this.categoryData);
        
      }
    })
  }
}
