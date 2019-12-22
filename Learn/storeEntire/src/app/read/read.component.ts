import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITutorial } from '../shared/models/Itutorial.model';
import { Store } from '@ngrx/store';
import { appState } from '../shared/models/appState.models';
import { RemoveTutorial } from '../store/actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public tutorials$: Observable<ITutorial[]>;

  constructor(private store: Store<appState>) { }

  ngOnInit() {
    this.tutorials$ = this.store.select('tutorial');
  }

  public delete(index: number): void {

    this.store.dispatch(new RemoveTutorial(index));

  }

}
