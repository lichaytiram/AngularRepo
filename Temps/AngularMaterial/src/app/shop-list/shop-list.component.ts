import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopService } from '../shared/services/shop.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  shopList$!: Observable<string[]>

  constructor(private service: ShopService) { }

  ngOnInit(): void {

    this.shopList$ = this.service.getShops();

  }

  public addToCart(item: string): void {
    this.service.addToCart(item);
  }


}
