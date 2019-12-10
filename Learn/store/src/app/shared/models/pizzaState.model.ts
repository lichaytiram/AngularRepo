import { Pizza } from './Pizza.model';

export interface PizzaState {
    data: Pizza[],
    loaded: boolean,
    loading: boolean
}