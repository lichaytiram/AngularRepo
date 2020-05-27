import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from 'src/app/c1/c1.component';
import { C2Component } from 'src/app/c2/c2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'c1', component: C1Component },
  { path: 'c2', component: C2Component }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MModule { }
