import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import * as cartActions from '../actions/cart.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { CartService } from 'src/app/shared/services/cart.service';
import { IClothe } from 'src/app/shared/models/iClothe.model';

@Injectable({
    providedIn: 'root'
})
export class CartEffect {

    constructor(private actions$: Actions, private cartService: CartService) { }

    public loadCarts$ = createEffect(() => this.actions$.pipe(ofType(cartActions.LoadCarts),
        switchMap(() => this.cartService.getAllCarts().pipe(
            map(carts => cartActions.LoadCartsSuccess({ carts })),
            catchError(error => of(cartActions.LoadCartsFail(error)))
        ))
    ));

    public addCart$ = createEffect(() => this.actions$.pipe(ofType(cartActions.AddCart),
        switchMap(action => this.cartService.addCart(action.cart).pipe(
            map(() => {
                const cart: IClothe = action.cart;

                return cartActions.AddCartSuccess({ cart });
            }),
            catchError(error => of(cartActions.AddCartFail(error)))
        ))
    ));

}
