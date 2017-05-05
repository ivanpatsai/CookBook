import {TOGGLE_SHOW_HISTORY, RESET_SHOW_HISTORY} from './../actions/index';

export default function (state = false, action) {
  switch (action.type) {
    case TOGGLE_SHOW_HISTORY:
      return !state;
      case RESET_SHOW_HISTORY:
          return false;
    default:
      return state;
  }
};