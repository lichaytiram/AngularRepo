import { catchError, map, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from 'src/app/shared/services/product.service';

import * as productActions from '../actions/product.action';
import { IProduct } from 'src/app/shared/models/IProduct.model';


@Injectable({
  providedIn: 'root'
})
export class ProductEffect {

  constructor(private actions$: Actions, private productService: ProductService) { }

  public loadProducts$ = createEffect(() => this.actions$.pipe(ofType(productActions.LoadProducts),
    switchMap(() => this.productService.getAllProducts().pipe(
      map(productsObject => {

        let products: IProduct[] = [];
        productsObject.forEach(api => {
          if (api.fedex)
            products.push(api.fedex);
          else if (api.ups)
            products.push(...api.ups);
          else
            products.push(api);
        });

        return productActions.LoadProductsSuccess({ products })
      })
      ,
      catchError(error => of(productActions.LoadProductsFail(error)))
    ))
  ));

}
