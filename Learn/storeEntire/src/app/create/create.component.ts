import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../shared/models/appState.models';
import { AddTutorial } from '../store/actions/tutorial.action';
import { ITutorial } from '../shared/models/Itutorial.model';
import { Tutorial } from '../shared/models/tutorial.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public tutorial: ITutorial = new Tutorial(null, null);

  constructor(private store: Store<IAppState>) { }

  ngOnInit() { }

  addToStore(): void {

    let newInstance: ITutorial = { name: this.tutorial.name, url: this.tutorial.url }

    this.store.dispatch(AddTutorial({ addTutorial: newInstance }));
  }

}
