import { IPizza } from './Pizza.model';

export interface IPizzaState {
    data: IPizza[],
    loaded: boolean,
    loading: boolean
}