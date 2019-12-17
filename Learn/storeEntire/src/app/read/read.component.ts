import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from '../shared/models/tutorials.model';
import { Store } from '@ngrx/store';
import { appState } from '../shared/models/appState.models';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  public tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<appState>) { }

  ngOnInit() {
    this.tutorials = this.store.select('tutorial');
  }

}
