import expect from 'expect';
const df = require('deep-freeze-strict');

import {TOGGLE_SHOW_HISTORY, RESET_SHOW_HISTORY} from './../../actions/index'
import showHistoryReducer from './../../reducers/show_history_reducer';

describe('ShowHistoryReducer', () => {
  it('should toggle showHistory', () =>{
    const action = {
      type: TOGGLE_SHOW_HISTORY
    };

    const res = showHistoryReducer(df(false), df(action));

    expect(res).toEqual(true);
  });

  it('should reset showHistory', () =>{
    const action = {
      type: RESET_SHOW_HISTORY
    };

    const res = showHistoryReducer(df(true), df(action));

    expect(res).toEqual(false);
  })
});