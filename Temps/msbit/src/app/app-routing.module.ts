import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';

const routes: Routes = [
  {
    path: 'home', children: [
      { path: 'inner', component: HomeComponent },
      { path: ':id', component: PersonComponent }
    ]
  },
  { path: '**', redirectTo: 'home/inner', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
