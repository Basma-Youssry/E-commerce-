import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { MyHttpInterceptor } from './my-http.interceptor';




import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NotfoundcComponent } from './components/notfoundc/notfoundc.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';


import { ForgotPAsswordComponent } from './components/forgot-password/forgot-password.component';
import { LoadingInterceptor } from './loading.interceptor';
import { SearchPipe } from './search.pipe';
import { TermtextPipe } from './termtext.pipe';
import { HomeComponent } from './components/home/home.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { NgSwitch } from '@angular/common';
// import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    BlankLayoutComponent,
    FooterComponent,
    NavBlankComponent,
    HomeComponent,
    ProductsComponent,
    CategoriesComponent,
    BrandsComponent,
    DetailsComponent,
    WishListComponent,
    CartComponent,
    CheckoutComponent,
    AllordersComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundcComponent,
    NavAuthComponent,
    AuthLayoutComponent,
    TermtextPipe,
    SearchPipe,
    ForgotPAsswordComponent,
  ],
  imports: [    
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(), 
    NgxSpinnerModule,
  ],
  // providers: [],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true},{
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
