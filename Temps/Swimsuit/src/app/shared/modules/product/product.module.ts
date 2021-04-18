import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from 'src/app/favorite/favorite.component';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'favorite', component: FavoriteComponent },
]

@NgModule({
  declarations: [HomeComponent, FavoriteComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
