import expect from 'expect';
const df = require('deep-freeze-strict');

import {FETCH_RECIPES, FETCH_RECIPE, CLEAR_STATE} from './../../actions/index'
import recipeReducer from './../../reducers/recipes_reducer';

describe('RecipesReducer', () => {
  it('should return array of recipes', () => {
    const action = {
      type: FETCH_RECIPES,
      payload: [
        {
          id: 1234,
          recipe: {
            recipeText: "Test 1",
            _id: 1234,
            created: 1234
          }
        },
        {
          id: 23345,
          recipe: {
            recipeText: "Test 2",
            _id: 2345,
            created: 2345
          }
        }
      ]
    };
    const res = recipeReducer(df({}), df(action));

    expect(res.all.length).toEqual(2);
    expect(res.all[0].recipe.recipeText).toEqual('Test 1');
  });
  it('should return recipe', () => {
    const action = {
      type: FETCH_RECIPE,
      payload: {
        id: 1234,
        recipe: {
          recipeText: "Test 1",
          _id: 1234,
          created: 1234
        }
      }
    };

    const res = recipeReducer(df({}), df(action));

    expect(res.single.recipe.recipeText).toEqual('Test 1');
  });
  it('should clear recipes state', () => {
    const action = {
      type: CLEAR_STATE,
      payload: null
    };

    const res = recipeReducer(df({}), df(action));

    expect(res.single).toEqual(null);
    expect(res.all).toEqual([]);
  });
});