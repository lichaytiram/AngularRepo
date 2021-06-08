import { RouterReducerState, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface IRouterStateUrl {
    url: string,
    params: Params,
    queryParams: Params
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

        let state: ActivatedRouteSnapshot = routerState.root;

        while (state.firstChild)
            state = state.firstChild;

        const { url } = routerState;
        const { params } = state
        const { queryParams } = routerState.root;

        return { url, params, queryParams };
    }
}