import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { guards } from './store/guards';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'product', children: [
      { path: 'home', component: HomeComponent, canActivate: guards },
      { path: 'favorite', component: FavoriteComponent, canActivate: guards },
      { path: 'account', component: AccountComponent, canActivate: guards },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
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
