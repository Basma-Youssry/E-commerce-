import { CheckoutComponent } from './../checkout/checkout.component';
import { ForgetPAssComponent } from './../../settings/forget-pass/forget-pass.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBlankComponent } from '../nav-blank/nav-blank.component';
import { HomeComponent } from '../home/home.component';
import { DetailsComponent } from '../details/details.component';
import { ProductsComponent } from '../products/products.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CategotrieDetailsComponent } from '../categotrie-details/categotrie-details.component';
import { BrandsComponent } from '../brands/brands.component';
import { SettingsModule } from 'src/app/settings/settings.module';
import { WishListComponent } from '../wish-list/wish-list.component';
import { CartComponent } from '../cart/cart.component';
import { AllordersComponent } from '../allorders/allorders.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  templateUrl: './blank-layout.component.html',
  styleUrls: ['./blank-layout.component.css']
})
export class BlankLayoutComponent {

}
