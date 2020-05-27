import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from '../c1/c1.component';
import { C2Component } from '../c2/c2.component';
import { CNewComponent } from '../c-new/c-new.component';


const routes: Routes = [
  { path: 'c', loadChildren: () => import('./m/m.module').then(m => m.MModule) },
  { path: 'cNew', component: CNewComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
