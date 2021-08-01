import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ShopService } from '../../services/shop.service';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
  ],
  exports: [
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [ShopService],
})
export class ShareModule { }
