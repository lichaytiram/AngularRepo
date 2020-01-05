import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ReadComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    EffectsModule.forRoot(effects),

    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
