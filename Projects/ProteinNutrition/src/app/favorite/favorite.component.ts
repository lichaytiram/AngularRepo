import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IProductsState } from '../store';
import { DeleteProtein } from '../store/actions/protein.action';

import { getUser, getAllProteins } from '../store/selectors'
import { Observable } from 'rxjs';
import { IUser } from '../shared/models/iUser.model';
import { IProtein } from '../shared/models/iProtein.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public user$: Observable<IUser>
  public proteins$: Observable<IProtein[]>

  constructor(private store: Store<IProductsState>, private router: Router) { }

  ngOnInit() {

    this.user$ = this.store.pipe(select(getUser));
    this.proteins$ = this.store.pipe(select(getAllProteins));

  }

  public loginPage(): void {
    this.router.navigate(['/product/login']);
  }

  public delete(userId: string, proteinId: string): void {

    this.store.dispatch(DeleteProtein({ userId, proteinId }));

  }

}
