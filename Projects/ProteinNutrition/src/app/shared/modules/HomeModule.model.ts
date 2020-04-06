import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule],
    exports: [HomeComponent]
  })
  export class HomeModule {}