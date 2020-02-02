import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { reducer, CustomSerializer } from './storeRouter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, effects } from './store';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { ReadComponent } from './read/read.component';

const root: Routes = [
  {
    path: 'product', children: [
      { path: 'add', component: AddComponent },
      { path: 'show', component: ReadComponent },
      { path: ':pizzaId', component: ReadComponent },
    ]
  },
  { path: '**', redirectTo: 'read', pathMatch: 'full' }
]

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

    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),

    EffectsModule.forRoot(effects),
    RouterModule.forRoot(root),

    StoreModule.forRoot(reducer, {
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
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
