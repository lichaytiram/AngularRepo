import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';

import { ShopListComponent } from 'src/app/shop-list/shop-list.component';
import { PurchaseComponent } from 'src/app/purchase/purchase.component';
import { CartComponent } from 'src/app/cart/cart.component';

const routes: Routes = [
  { path: 'list', component: ShopListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'purchase', component: PurchaseComponent },
];

@NgModule({
  declarations: [ShopListComponent, CartComponent, PurchaseComponent],
  imports: [
    CommonModule,
    ShareModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ShopModule { }
