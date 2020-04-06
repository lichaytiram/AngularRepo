import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { InfoComponent } from '../../info/info.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'info', component: InfoComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
