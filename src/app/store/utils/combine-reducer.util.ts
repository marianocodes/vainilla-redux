/**
 * Funcion encargada de ejecturar el reducer encargado de la accion lanzada y
 * retornar el nuevo valor
 */
export function combineReducers(reducers): (state, action?) => Record<string, any> {
  const reducerKeys = Object.keys(reducers);

  return (state = {}, action?) => {
    const nextState = {};

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    }

    return nextState;
  };
}
