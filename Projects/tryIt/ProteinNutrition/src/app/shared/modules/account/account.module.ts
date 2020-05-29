import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared.module';
import { guards } from 'src/app/store/guards';
import { FavoriteComponent } from 'src/app/favorite/favorite.component';
import { AccountComponent } from 'src/app/account/account.component';
import { LoginComponent } from 'src/app/login/login.component';

const routes: Routes = [
    { path: '', component: AccountComponent, canActivate: guards },
    { path: 'favorite', component: FavoriteComponent, canActivate: guards },
    { path: 'login', component: LoginComponent },
]

@NgModule({
    declarations: [FavoriteComponent, AccountComponent, LoginComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ]
})
export class AccountModule { }
