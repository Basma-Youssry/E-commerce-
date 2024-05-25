import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfoundc',
  templateUrl: './notfoundc.component.html',
  styleUrls: ['./notfoundc.component.css']
})
export class NotfoundcComponent {

  constructor(private _Router: Router){}


  navigateBack(){
    this._Router.navigate(['/home']);
  }
}
