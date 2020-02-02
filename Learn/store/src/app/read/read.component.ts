import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { IProductesState } from '../store';
import * as fromStore from "../store/selectors/pizzas.selectors";
import { IPizza } from "../shared/models/Pizza.model";
// import { Router } from '@angular/router';
import { DeletePizza } from '../store/actions/pizzas.action'

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  public pizzas$: Observable<IPizza[]>;

  constructor(private store: Store<IProductesState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.pipe(select(fromStore.getAllPizzas));
    this.store.pipe(select(fromStore.getAllPizzas)).subscribe(res => console.log(res));
  }

  delete(id: number): void {
    this.store.dispatch(DeletePizza({ pizzaId: id }));
  }



  // inner(id: number) {
  //   this.route.navigate([`/product/${id}`]);
  // }
}
