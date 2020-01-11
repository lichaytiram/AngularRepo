import { IPizza } from './Pizza.model';

export interface IPizzaState {
    entities: { [id: number]: IPizza }
    loaded: boolean,
    loading: boolean
}