import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITutorial } from '../shared/models/Itutorial.model';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../shared/models/appState.models';
import { RemoveTutorial } from '../store/actions/tutorial.action';

import { getMyData } from '../store/reducers/index';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public tutorials$: Observable<ITutorial[]>;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.tutorials$ = this.store.pipe(select('tutorial'));
  }

  public delete(index: number): void {

    this.store.dispatch(RemoveTutorial({ numberId: index }));
    
  }

}
