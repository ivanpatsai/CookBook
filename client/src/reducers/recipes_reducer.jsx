import {FETCH_RECIPES, FETCH_RECIPE, CLEAR_STATE} from './../actions/index';
const INITIAL_STATE = {all: [], single: null};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        all: action.payload
      };
    case FETCH_RECIPE:
      return {
        ...state,
        single: action.payload
      };
    case CLEAR_STATE:
      return {
        ...state,
        single: action.payload,
        all: []
      };
    default:
      return state
  }
}