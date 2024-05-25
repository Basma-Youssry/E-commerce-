import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePassComponent } from './update-pass/update-pass.component';
import { ForgetPAssComponent } from './forget-pass/forget-pass.component';

const routes: Routes = [
  {path:'', redirectTo: 'update', pathMatch: 'full'},
  {path:'update', component: UpdatePassComponent},
  {path:'forget', component: ForgetPAssComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
