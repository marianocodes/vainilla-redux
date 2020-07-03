import { Action } from '../utils/actions.model';

export enum CartActionTypes {
  AddProduct = '[Cart] AddProduct Product',
  RemoveProduct = '[Cart] Remove Product',
  FilterCart = '[Cart] Filter Product',
  GetList = '[Cart] Product List',
  GetListSuccess = '[Cart] Product List Success',
  GetListFail = '[Cart] Product List Fail'
}

export class AddProduct implements Action {
  readonly type = CartActionTypes.AddProduct;
  constructor(public payload: string) {}
}

export class RemoveProduct implements Action {
  readonly type = CartActionTypes.RemoveProduct;
  constructor(public payload: number) {}
}

export class FilterCart implements Action {
  readonly type = CartActionTypes.FilterCart;
  constructor(public payload: string) {}
}

export class GetList implements Action {
  readonly type = CartActionTypes.GetList;
  constructor() { }
}

export class GetListSuccess implements Action {
  readonly type = CartActionTypes.GetListSuccess;
  constructor(public payload: string[]) { }
}

export class GetListFail implements Action {
  readonly type = CartActionTypes.GetListFail;
  constructor(public payload: string) { }
}

export type CartActions = AddProduct | RemoveProduct | FilterCart | GetList | GetListSuccess | GetListFail;
