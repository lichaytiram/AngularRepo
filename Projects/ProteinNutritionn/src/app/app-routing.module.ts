import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {
    path: 'product', children: [
      { path: 'home', component: HomeComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'info', component: InfoComponent }
    ]
  },
  { path: '**', redirectTo: 'product/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }