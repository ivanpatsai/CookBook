import './style/app.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';

import App from './components/App';
import RecipesList from './components/RecipesList';
import AddRecipe from './components/AddRecipe';
import UpdateRecipe from './components/UpdateRecipe';
import ShowRecipe from './components/ShowRecipe';


const store = require('./reducers/index').configure();


ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App>
        <Switch>
          <Route exact path="/" component={RecipesList}/>
          <Route path="/new" component={AddRecipe} />
          <Route path="/:id/edit" component={UpdateRecipe} />
          <Route path="/:id" component={ShowRecipe} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);