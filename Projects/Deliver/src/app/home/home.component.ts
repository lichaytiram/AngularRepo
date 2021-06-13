import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IProduct } from '../shared/models/IProduct.model';
import { Product } from '../shared/models/Product.model';
import { SortList } from '../shared/models/sortList.enum';

import { IProductsState } from '../store';

import { LoadProducts } from '../store/actions/product.action';
import { getAllProducts } from '../store/selectors/product.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public products: IProduct[];
  public chosenProduct: IProduct;

  // sort list
  public sortList: string[] = Object.values(SortList);
  public sortListSelected: string = SortList.SORTBY;

  public currentElementClick: HTMLElement;


  // page
  public currentPagePX: number = 0;

  constructor(private store: Store<IProductsState>) { }

  ngOnInit(): void {

    this.store.dispatch(LoadProducts());
    this.store.pipe(select(getAllProducts)).subscribe(
      products => this.products = products
    );

  }

  public sortProducts(): void {
    const sortList = this.sortListSelected;
    const list: IProduct[] = this.products;

    if (sortList === 'name')
      list.sort((x, y) => x.name.localeCompare(y.name));
    else
      list.sort((x, y) => x.price - y.price);


  }

  public editDetails(product: IProduct): void {

    this.editDetailsGlowColor(product);
    const { id, name, price, date, thumbnailUrl, url, description } = product;
    this.chosenProduct = new Product(id, name, price, date, thumbnailUrl, url, description);

  }

  private editDetailsGlowColor(product: IProduct): void {
    // glow html element
    const clearHistoryColor: HTMLElement = this.currentElementClick;
    if (clearHistoryColor)
      clearHistoryColor.style.backgroundColor = "";

    const { id } = product;
    const elementToColor: HTMLElement = document.getElementById(id);
    this.currentElementClick = elementToColor;
    const color: string = getComputedStyle(elementToColor).getPropertyValue("--basic-background-color");
    elementToColor.style.backgroundColor = color;
  }

  public updateDetail(): void {

    const chosenProduct: IProduct = this.chosenProduct;
    console.log(chosenProduct);

  }

  public changePage(page: string): void {
    const selector: string = '.container>.products>.ulWrap>ul';
    const element: HTMLElement = document.querySelector(selector);

    const heightElement: string = getComputedStyle(element).getPropertyValue('--height-inner-element');
    const heightElementMargin: string = getComputedStyle(element).getPropertyValue('--height-inner-element-margin-buttom');
    const amount: number = Number.parseInt(getComputedStyle(element).getPropertyValue('--amount-li-elements'));
    const height: number = Number.parseInt(heightElement.replace(/[^0-9]/g, ''));
    const heightMargin: number = Number.parseInt(heightElementMargin.replace(/[^0-9]/g, ''));

    const currentPosition: number = this.currentPagePX;
    let pageGo: number = (height + heightMargin) * amount + 10;
    // detect next page or prev page
    pageGo *= page === 'nextPage' ? -1 : 1;
    pageGo += currentPosition;
    // update page position
    this.currentPagePX = pageGo;
    element.style.transform = `translateY(${pageGo}px)`;

  }

}
