import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared.module';
import { guards } from 'src/app/store/guards';
import { HomeComponent } from 'src/app/home/home.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { InfoComponent } from 'src/app/info/info.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: guards },
    { path: 'account', loadChildren: () => import('../account/account.module').then(m => m.AccountModule) },
    { path: 'register', component: RegisterComponent },
    { path: 'info', component: InfoComponent },
]

@NgModule({
    declarations: [HomeComponent, RegisterComponent, InfoComponent],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class ProductModule { }

