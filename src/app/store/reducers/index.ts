import { reducer as cart, State as CarState } from './cart.reducer';

export interface State {
  cart: CarState;
}

export const reducers = {
  cart
};
