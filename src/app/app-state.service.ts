import { Injectable } from '@angular/core';
import { Store } from './store/store.service';
import {
  AddProduct,
  RemoveProduct,
  FilterCart,
  GetList,
  GetListSuccess,
  GetListFail
} from './store/actions/cart.actions';

import { EMPTY, Subscription } from 'rxjs';
import { ApiService } from './api.service';
import { catchError, tap, map } from 'rxjs/operators';
import { State } from './store/reducers';

@Injectable({
  providedIn: 'root',
})
export class AppState {

  public cart$ = this.store.state.pipe(map((state) => state.cart));
  public list$ = this.cart$.pipe(map((state) => state.list));
  public items$ = this.cart$.pipe(map((state) => state.items));

  constructor(
    public store: Store<State>,
    public api: ApiService
  ) { }

  public addProduct(product: string): void {
    this.store.dispatch(new AddProduct(product));
  }

  public removeProduct(position: number): void {
    this.store.dispatch(new RemoveProduct(position));
  }

  public filterList(product: string): void {
    this.store.dispatch(new FilterCart(product));
  }

  public getProducts(): Subscription {
    this.store.dispatch(new GetList());

    const request$ =
      this.api.getItems().pipe(
        tap((result) => this.store.dispatch(new GetListSuccess(result))),
        catchError(() => {
          this.store.dispatch(new GetListFail('Error'));
          return EMPTY;
        })
      );

    return request$.subscribe();
  }

}
