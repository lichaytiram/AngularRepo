import { NgModule } from '@angular/core';
import { AppRoutingModule } from './shared/modules/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer, reducer } from './storeRouter';
import { reducers, effects } from './store';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),

    EffectsModule.forRoot(effects),

    StoreModule.forRoot(reducer, {
      runtimeChecks: {
        // strictStateImmutability: false,
        // strictActionImmutability: false,
        // strictStateSerializability: false,
        // strictActionSerializability: false,
      },
    }),

    StoreModule.forFeature('products', reducers),

    // Only a tool for developers will delete on products
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
