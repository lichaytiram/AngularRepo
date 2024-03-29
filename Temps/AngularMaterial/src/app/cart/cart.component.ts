import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShopService } from '../shared/services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts$!: Observable<string[]>

  constructor(private service: ShopService) { }

  ngOnInit(): void {
    this.carts$ = this.service.getCarts();
  }


}
