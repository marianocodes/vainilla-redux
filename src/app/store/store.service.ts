import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { scan, shareReplay } from 'rxjs/operators';
import { Action } from './utils/actions.model';
import { combineReducers } from './utils/combine-reducer.util';
import { reducers } from './reducers';

const initAction = { type: '@@ INIT' };

@Injectable({
  providedIn: 'root',
})
export class Store<T> {
  // Donde guardamos el estado
  private store: BehaviorSubject<T>;
  // Quien lanza las acciones
  private dispatcher: BehaviorSubject<Action>;
  // Referencia de herramientas
  // private tools;

  public reducerMap;
  public state: Observable<T>;
  public actions: Observable<Action>;

  constructor() {
    this.dispatcher = new BehaviorSubject(initAction);
    this.store = new BehaviorSubject({} as T);
    this.state = this.store.asObservable();
    this.actions = this.dispatcher.asObservable();

    this.init();
  }

  public init(): void {
    // const win = window as any;
    // (this.tools = win.__REDUX_DEVTOOLS_EXTENSION__.connect());

    const rootReducer = this.reduceAction();

    this.dispatcher
      .pipe(
        // scan es un operador que funciona como la funcion reducer en un array
        scan(rootReducer, {}),
        // nos permite acceder al ultimo valor
        shareReplay(1),
      )
      .subscribe(data => this.store.next(data));
  }

  public dispatch(action: Action): void {
    this.dispatcher.next(action);
  }

  public getState(): Record<string, any> {
    return this.store.getValue();
  }

  private reduceAction(): (state, action) => (Record<string, any>) {
    return (state, action) => {
      const next = combineReducers(reducers)(state, action);
      // this.tools.send(action.type, next);
      return next;
    };
  }
}
