import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EffectsModule } from '@ngrx/effects';

import { ProductEffect } from "../../store/effects/product.effect";

const routes: Routes = [

  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: '**', redirectTo: 'product/home', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    EffectsModule.forFeature([ProductEffect])
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
