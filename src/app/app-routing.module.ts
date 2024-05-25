import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundcComponent } from './components/notfoundc/notfoundc.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { CategotrieDetailsComponent } from './components/categotrie-details/categotrie-details.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { ForgotPAsswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  // { path: '', canActivate:[authGuard],
  // component: BlankLayoutComponent , 
  // children: [
  //   {path: '', redirectTo: 'home', pathMatch: 'full',title:'Home'},
  //   {path: 'home', component: HomeComponent,title:'Home'},
  //   {path: 'details/:id', component: DetailsComponent,title:'Details'},
  //   {path: 'products', component: ProductsComponent,title:'Products'},
  //   {path: 'categories', component: CategoriesComponent,title:'Categories'},
  //   {path: 'categoryDetails/:id', component: CategotrieDetailsComponent, title:'categoryDetails'},
  //   {path: 'brands', component: BrandsComponent,title:'Brands'},
  //   {path: 'settings', loadChildren:()=> import('./settings/settings.module').then((m)=> m.SettingsModule) },
  //   {path: 'forgotPassword', component: ForgotPAsswordComponent,title:'forgot password'},
  //   {path: 'wishList', component: WishListComponent,title:'wishList'},
  //   {path: 'cart', component: CartComponent,title:'Cart'},
  //   {path: 'checkout/:id', component: CheckoutComponent},
  //   {path: 'allorders', component: AllordersComponent}
  // ]},
  { path: '',
  component: BlankLayoutComponent , 
  canActivate:[authGuard],
  children: [
    {path: '', redirectTo: 'home', pathMatch: 'full',title:'Home'},
    {path: 'home', component: HomeComponent,title:'Home'},
    {path: 'details/:id', component: DetailsComponent,title:'Home'},
    {path: 'cart', component: CartComponent,title:'Cart'},
    {path: 'products', component: ProductsComponent,title:'Products'},
    {path: 'categories', component: CategoriesComponent,title:'Categories'},
    {path: 'brands', component: BrandsComponent,title:'Brands'},
    {path: 'checkout/:id', component: CheckoutComponent},
    {path: 'allorders', component: AllordersComponent}
  ]},
  { path: '', component: AuthLayoutComponent , 
  children: [
    {path: 'login', component: LoginComponent,title:'Login'},
    {path: 'register', component: RegisterComponent,title:'Register'},
    {path: 'forgot', component: ForgotPAsswordComponent,title:'forgot password'},
  ]},
  { path: '**', component: NotfoundcComponent,title:'NotFound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
