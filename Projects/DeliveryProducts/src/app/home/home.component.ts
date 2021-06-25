import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { SubSink } from 'subsink';
import { IProduct } from '../shared/models/IProduct.model';
import { Product } from '../shared/models/Product.model';
import { SortList } from '../shared/models/sortList.enum';

import { IProductsState } from '../store';

import { LoadProducts, AddProduct, DeleteProduct, UpdateProduct, SavedProductOff } from '../store/actions/product.action';
import { getAllProducts, getProductsFilter, getProductSaved } from '../store/selectors/product.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  // Product objects
  public products: IProduct[];
  public chosenProduct: IProduct;
  public product: IProduct;

  // Toggles
  public addProductToggle: boolean = true;

  // Observables
  public getProductSaved$: Observable<boolean> = this.store.select(getProductSaved);

  // Should generate by server
  private productId: number = 21;

  // Sort list
  public sortList: string[] = Object.values(SortList);
  public sortListSelected: string = SortList.SORTBY;

  public currentElementClick: HTMLElement;

  // Page
  public currentPagePX: number = 0;
  public currentPage: number = 1;
  public lastPage: number;

  // Unsubscribe observable
  private subSink: SubSink = new SubSink();

  constructor(private store: Store<IProductsState>) { }

  ngOnInit(): void {

    this.boxControl();
    this.store.dispatch(LoadProducts());
    this.subSink.add(this.store.pipe(select(getAllProducts)).subscribe(
      products => {

        this.products = products;
        this.initializeLastPage();

      }
    ));

    this.product = new Product(undefined, undefined, undefined, undefined, undefined, undefined);
  }

  ngOnDestroy(): void {

    this.subSink.unsubscribe();

  }

  // Crud functions

  public addProductSwitch(): void {
    this.addProductToggle = !this.addProductToggle;
  }

  public addProduct(ngForm: NgForm): void {

    if (ngForm.invalid)
      return;

    // Should generate by server
    const productId: string = String(this.productId++);

    const currentDate: Date = new Date();
    const currentDateNumber: number = currentDate.getTime();

    const { id, date, ...restProduct } = this.product;
    const product: IProduct = { id: productId, date: currentDateNumber, ...restProduct };

    this.store.dispatch(AddProduct({ product }));

  }

  public deleteProduct(id: string): void {

    this.chosenProduct = undefined;
    this.store.dispatch(DeleteProduct({ id }));

  }

  public updateProduct(): void {

    const product: IProduct = this.chosenProduct;
    this.store.dispatch(UpdateProduct({ product }))
  }


  public saveSuccessOff(): void {
    this.store.dispatch(SavedProductOff());
  }

  public sortProducts(): void {
    const sortList = this.sortListSelected;
    const list: IProduct[] = this.products;

    if (sortList === 'name')
      list.sort((x, y) => x.name.localeCompare(y.name));
    else if (sortList === 'price')
      list.sort((x, y) => x.price - y.price);
    else
      list.sort((x, y) => x.date - y.date);

  }

  public editDetail(product: IProduct): void {

    this.editDetailGlowColor(product);
    const { id, name, price, date, thumbnailUrl, url, description } = product;
    this.chosenProduct = new Product(id, name, price, date, thumbnailUrl, url, description);

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

    let pageJump: number = (height + heightMargin) * amount + heightMargin;

    let currentPage: number = this.currentPage;
    const lastPage: number = this.lastPage;

    // Detect next page or prev page
    if (page === 'nextPage') {
      pageJump *= -1;
      currentPage++;
    } else
      currentPage--;

    const updatePageValid: boolean = (currentPage > 0 && currentPage <= lastPage) ? true : false;

    // Update page position
    if (updatePageValid) {
      pageJump += currentPosition;
      this.currentPagePX = pageJump;
      this.currentPage = currentPage;
      element.style.transform = `translateY(${pageJump}px)`;
    }

  }

  // Private functions

  private boxControl(): void {

    const searchBox = document.getElementById('boxControl');
    const typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
      debounceTime(1000),
      distinctUntilChanged()
    );

    this.subSink.add(typeahead.subscribe((data) => {

      this.sortListSelected = SortList.SORTBY;
      this.subSink.add(this.store.pipe(select(getProductsFilter(data))).subscribe(
        productFilter => {

          this.products = productFilter;
          this.initializeLastPage();

        }
      ));

    }));

  }

  // Glow html element
  private editDetailGlowColor(product: IProduct): void {

    const clearHistoryColor: HTMLElement = this.currentElementClick;
    if (clearHistoryColor)
      clearHistoryColor.style.backgroundColor = "";

    const { id } = product;
    const elementToColor: HTMLElement = document.getElementById(id);
    this.currentElementClick = elementToColor;
    const color: string = getComputedStyle(elementToColor).getPropertyValue("--basic-background-color");
    elementToColor.style.backgroundColor = color;

  }

  private initializeLastPage(): void {

    const selector: string = '.container>.products';
    const element: HTMLElement = document.querySelector(selector);
    const amountLiElements: string = getComputedStyle(element).getPropertyValue('--amount-li-elements');
    const productsAmount: number = this.products.length;
    this.lastPage = Math.ceil(productsAmount / Number.parseInt(amountLiElements));

  }

}
