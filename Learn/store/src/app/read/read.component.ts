import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { IProductesState } from '../store';
import * as fromStore from "../store/selectors/pizzas.selectors";
import { IPizza } from "../shared/models/Pizza.model";
import { DeletePizza, LoadPizzas } from '../store/actions/pizzas.action'
import { Router } from '@angular/router';

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {

  public pizzas$: Observable<IPizza[]>;

  constructor(private store: Store<IProductesState>, private route: Router) { }

  ngOnInit() {
    this.pizzas$ = this.store.pipe(select(fromStore.getAllPizzas));
  }

  delete(pizzaId: number): void {
    this.store.dispatch(DeletePizza({ pizzaId: pizzaId }));
  }

  getAllPizzas(): void {
    this.store.dispatch(LoadPizzas());
  }

  chose(pizzaId: number) {
    this.route.navigate([`/product/${pizzaId}`]);
  }

}
