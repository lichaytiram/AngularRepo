import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ISwimsuit } from '../shared/models/ISwimsuit.model';
import { loadFavorite } from '../store';
import { IProductsState } from '../store/reducers';
import { getFavoriteSwimsuits } from '../store/selectors';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public favorites$: Observable<ISwimsuit[]> = this.store.pipe(select(getFavoriteSwimsuits))

  constructor(private store: Store<IProductsState>) { }

  ngOnInit(): void {

    this.store.dispatch(loadFavorite());

  }

}
