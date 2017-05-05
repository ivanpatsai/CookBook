import {FETCH_HISTORY} from './../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_HISTORY:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
}