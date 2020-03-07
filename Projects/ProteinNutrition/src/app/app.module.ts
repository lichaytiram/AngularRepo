import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateSerializer, StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { reducer, CustomSerializer } from './storeRouter';

import { reducers } from './store';

import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { InfoComponent } from './info/info.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FavoriteComponent,
    InfoComponent,
    AccountComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

    StoreModule.forRoot(reducer, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),

    StoreModule.forFeature('products', reducers),

    // Only a tool for developers will delete on products
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

  ],
  providers: [{provide:RouterStateSerializer,useClass:CustomSerializer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
