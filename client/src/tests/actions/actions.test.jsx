import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from './../../actions/index';


let createMockStore = configureStore([thunk]);

describe('Actions', () => {
  it('should generate fetch recipes action', () => {
    const action = {
      type: actions.FETCH_RECIPES,
      payload: [{
        id: 'abc123',
        recipe: {
          recipeText: 'Test text',
          created: new Date()
        }
      }]
    };
    const res = actions.fetchRecipes(action.payload);

    expect(res).toEqual(action);
  });

  it('should generate fetch recipe action', () => {
    const action = {
      type: actions.FETCH_RECIPE,
      payload: {
        id: 'abc123',
        recipe: {
          recipeText: 'Test text',
          created: new Date()
        }
      }
    };
    const res = actions.fetchRecipe(action.payload);

    expect(res).toEqual(action);
  });

  it('should generate add recipe action', () => {
    const action = {
      type: actions.ADD_RECIPE,
    };
    const res = actions.addRecipe();

    expect(res).toEqual(action);
  });

  it('should generate update recipe action', () => {
    const action = {
      type: actions.UPDATE_RECIPE,
    };
    const res = actions.updateRecipe();

    expect(res).toEqual(action);
  });

  it('should generate clear state action', () => {
    const action = {
      type: actions.CLEAR_STATE,
      payload: null
    };
    const res = actions.clearState();

    expect(res).toEqual(action);
  });

  it('should generate toggle show history action', () => {
    const action = {
      type: actions.TOGGLE_SHOW_HISTORY,
    };
    const res = actions.toggleShowHistory();

    expect(res).toEqual(action);
  });

  it('should generate reset show history action', () => {
    const action = {
      type: actions.RESET_SHOW_HISTORY,
    };
    const res = actions.resetShowHistory();

    expect(res).toEqual(action);
  });

  it('should generate fetch history action', () => {
    const action = {
      type: actions.FETCH_HISTORY,
      payload: {
        id: 'abc123',
        versions: [{
          recipeText: 'Test text',
          created: 152
        }]
      }
    };
    const res = actions.fetchHistory(action.payload);

    expect(res).toEqual(action);
  });

  // it('should create recipe and dispatch ADD_RECIPE', (done) => {
  //     const store = createMockStore({});
  //     const recipeText = 'My recipe';
  //
  //     return store.dispatch(actions.startAddRecipe(recipeText)).then(() => {
  //       const actionsS = store.getActions();
  //       expect(actionsS.length).toBe(1);
  //       // expect(actionsS).toInclude({
  //       //   type: actions.ADD_RECIPE
  //       // });
  //       done();
  //     }).catch(done);
  //   });

});