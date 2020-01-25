import { RouterReducerState, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IRouterStateUrl {
    url: string,
    queryParams: Params,
    params: Params
}

export interface IState {
    routerReducer: RouterReducerState<IRouterStateUrl>
}

export const reducer: ActionReducerMap<IState> = {
    routerReducer: routerReducer
}

export const getRouterState = createFeatureSelector<RouterReducerState<IRouterStateUrl>>("routerReducer");

export class CustomSerializer implements RouterStateSerializer<IRouterStateUrl> {

    serialize(routerState: RouterStateSnapshot): IRouterStateUrl {

        const { url } = routerState;
        const { queryParams } = routerState.root;

        // go up after cheking that work properly     
        let state: ActivatedRouteSnapshot = routerState.root;

        while (state.firstChild)
            state = state.firstChild;

        const { params } = state

        console.log("inside CustomSerializer");

        return { url, queryParams, params };
    }
}