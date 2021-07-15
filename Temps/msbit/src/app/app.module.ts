import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { ChildComponent } from './child/child.component';
import { FormComponent } from './form/form.component';
import { CustomPipePipe } from './shared/pipes/custom-pipe.pipe';
import { CustomDirectiveDirective } from './shared/directive/custom-directive.directive';
import { TxtInputComponent } from './txt-input/txt-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    ChildComponent,
    FormComponent,
    CustomPipePipe,
    CustomDirectiveDirective,
    TxtInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
