import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ReadComponent } from './read/read.component';
import { ChoseComponent } from './chose/chose.component';

const routes: Routes = [
  {
    path: 'product', children: [
      { path: 'add', component: AddComponent },
      { path: 'show', component: ReadComponent },
      { path: ':pizzaId', component: ChoseComponent },
    ]
  },
  { path: '**', redirectTo: 'read', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
