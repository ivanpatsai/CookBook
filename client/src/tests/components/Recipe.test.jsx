import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
const $ = require('jquery');

import Recipe from './../../components/Recipe';

describe('Recipe', () => {
  it('should exist', () => {
    expect(Recipe).toExist();
  })
});