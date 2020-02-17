import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FavoriteComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
    }),

    StoreModule.forFeature('products', reducers),

    // Only a tool for developers will delete on products
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
