import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import thunk from 'redux-thunk';

import RecipesReducer from './recipes_reducer';
import HistoryReducer from './history_reducer';
import ShowHistoryReducer from './show_history_reducer';


export function configure(initialState = {}) {
  const reducer = combineReducers({
    showHistory: ShowHistoryReducer,
    history: HistoryReducer,
    recipes: RecipesReducer,
    form: FormReducer
  });
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk)
  ));

  return store
}
