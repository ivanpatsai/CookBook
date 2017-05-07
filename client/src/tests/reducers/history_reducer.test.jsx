import expect from 'expect';
const df = require('deep-freeze-strict');

import {FETCH_HISTORY} from './../../actions/index'
import historyReducer from './../../reducers/history_reducer';

describe('HistoryReducer', () => {
  it('should return recipe with all versions', () =>{
    const action = {
      type: FETCH_HISTORY,
      payload: {
        id: 123,
        versions: [
          {
            recipeText: "Test 1",
            _id: 456,
            created: 132
          },
          {
            recipeText: "Test 2",
            _id: 4564,
            created: 12132
          }
        ]
      }
    };

    const res = historyReducer(df({}), df(action));

    expect(res.versions[0].recipeText).toEqual('Test 1');
  });
});