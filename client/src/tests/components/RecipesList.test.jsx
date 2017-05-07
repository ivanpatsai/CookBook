import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
const $ = require('jquery');

import {configure} from './../../reducers/index';
import ConnectedRecipesList, {RecipesList} from './../../components/RecipesList';
import ConnectedRecipe, {Recipe} from './../../components/Recipe';

describe('RecipesList', () => {
  it('should exist', () => {
    expect(RecipesList).toExist();
  });
//
//   it('should render one Recipe component for each recipe item', () => {
//     const recipes = {
//       all: [
//       {
//         id: 132,
//         recipe: {
//           recipeText: "Some tasty food",
//           _id: 456,
//           created: 5877
//         }
//       },
//       {
//         id: 178,
//         recipe: {
//           recipeText: "Some tasty food 2",
//           _id: 854,
//           created: 4632
//         },
//       }
//     ]
//     };
//     const store = configure({recipes});
//     const provider = TestUtils.renderIntoDocument(
//       <Provider store={store}>
//         <ConnectedRecipesList/>
//       </Provider>);
//     const recipesList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedRecipesList)[0];
//     const recipeComponents = TestUtils.scryRenderedComponentsWithType(recipesList, ConnectedRecipe);
//
//     expect(recipeComponents.length).toBe(recipes.length);
//   })
});