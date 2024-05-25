import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { UpdatePassComponent } from './update-pass/update-pass.component';
import { ForgetPAssComponent } from './forget-pass/forget-pass.component';


@NgModule({
  declarations: [
    UpdatePassComponent,
    ForgetPAssComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
