import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ReadComponent } from './read/read.component';
import { ChoseComponent } from './chose/chose.component';
import { guards } from './store/guard/index'
import { PizzaService } from './shared/services/index';

const routes: Routes = [
  {
    path: 'product', children: [
      { path: 'add', component: AddComponent },
      { path: 'show', component: ReadComponent },
      { path: ':pizzaId', component: ChoseComponent, canActivate: guards },
    ]
  },
  { path: '', redirectTo: 'product/show', pathMatch: 'full' },
  { path: '**', redirectTo: 'product/show', pathMatch: 'full' },
]

@NgModule({
  providers: [...guards, PizzaService],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
