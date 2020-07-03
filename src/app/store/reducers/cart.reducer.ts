import { CartActions, CartActionTypes } from '../actions/cart.actions';

export interface State {
  list: string[];
  items: string[];
}

export const initialState: State = {
  list: [],
  items: []
};

export function reducer(state = initialState, action: CartActions): State {
  switch (action.type) {

    case CartActionTypes.AddProduct: {
      return { ...state, list: [ ...state.list, action.payload ] };
    }

    case CartActionTypes.RemoveProduct: {
      return { ...state, list: [ ...state.list.slice(0, action.payload), ...state.list.slice(action.payload + 1) ] };
    }

    case CartActionTypes.FilterCart: {
      return { ...state, list: [ ...state.list.filter((value) => value !== action.payload) ] };
    }

    case CartActionTypes.GetListSuccess: {
      return { ...state, items: [ ...action.payload ] };
    }

    default:
      return state;
  }
}
