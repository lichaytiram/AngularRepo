import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { CartComponent } from 'src/app/cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
]

@NgModule({
  declarations: [HomeComponent, CartComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
