import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IProductesState } from '../store';
import { getSelectedPizza } from '../store/selectors/pizzas.selectors'
import { Observable } from 'rxjs';
import { IPizza } from '../shared/models/Pizza.model';

@Component({
  selector: 'app-chose',
  templateUrl: './chose.component.html',
  styleUrls: ['./chose.component.css']
})
export class ChoseComponent implements OnInit, OnDestroy {

  public pizza$: Observable<IPizza>;

  constructor(private store: Store<IProductesState>) { }

  ngOnInit() {
    if (sessionStorage.getItem("pizza") == null) {
      this.pizza$ = this.store.pipe(select(getSelectedPizza))
      sessionStorage.setItem("pizza", JSON.stringify(this.pizza$.pipe()));
    }
    else
      this.pizza$ = JSON.parse(sessionStorage.getItem("pizza"));
  }

  ngOnDestroy() {
    sessionStorage.setItem("key", "new");
  }
}
