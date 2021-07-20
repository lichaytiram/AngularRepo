import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { UserProfileComponent } from 'src/app/user-profile/user-profile.component';
import { ContactInfoComponent } from 'src/app/contact-info/contact-info.component';
import { FormContactComponent } from 'src/app/form-contact/form-contact.component';

const routes: Routes = [{ path: 'home', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    FormContactComponent,
    UserProfileComponent,
    ContactInfoComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
