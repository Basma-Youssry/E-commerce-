import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit{
  constructor(private _CartService:CartService){}



ngOnInit(): void {
    
    this._CartService.showUserOrders().subscribe({
      next:(response)=>{
        console.log(response);  
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
}
  
}
