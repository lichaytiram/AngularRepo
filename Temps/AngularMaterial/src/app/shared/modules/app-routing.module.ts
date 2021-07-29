import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from 'src/app/info/info.component';
import { HomeComponent } from '../../home/home.component';

const routes: Routes = [
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'product', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) },
  { path: 'info', pathMatch: 'full', component: InfoComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
