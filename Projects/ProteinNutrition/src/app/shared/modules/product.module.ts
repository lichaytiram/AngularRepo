import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { InfoComponent } from '../../info/info.component';
import { ProductRoutingModule } from './module.module';

@NgModule({
  declarations: [RouterModule],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  exports: [RouterModule]
})
export class ProductModule { }
