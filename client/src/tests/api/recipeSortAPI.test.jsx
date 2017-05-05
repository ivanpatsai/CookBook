import expect from 'expect';

import {filterHistory, filterRecipes} from './../../api/recipeSortAPI';

describe('SortAPI', () => {
  it('should exist', () => {
    expect(filterHistory).toExist();
    expect(filterRecipes).toExist();
  });
  describe('filterRecipes', () => {
    it('should filter recipes by date', () => {
      const arr = [
        {
          recipe: {
            created: new Date(1)
          }
        },
        {
          recipe: {
            created: new Date(2)
          }
        },
        {
          recipe: {
            created: new Date(3)
          }
        }
      ];

      const result = filterRecipes(arr);

      expect(result).toEqual(arr.reverse());
    })
  });
  describe('filterHistory', () => {
    it('should filter recipe history array by date', () => {
      const arr = [
        {
          created: new Date(1)
        },
        {

          created: new Date(2)
        },
        {

          created: new Date(3)
        }
      ];

      const result = filterHistory(arr);

      expect(result).toEqual(arr.reverse());
    })
  })
});