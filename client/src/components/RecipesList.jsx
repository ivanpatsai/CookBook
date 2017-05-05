import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from  'react-router-dom'

import {filterRecipes} from '../api/recipeSortAPI';
import Recipe from './Recipe';
import {startFetchRecipes, startFetchRecipe} from './../actions/index';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import DescTopBreakpoint from './responsive_utilities/desctop_breakpoint';


export class RecipesList extends Component {

  componentWillMount() {
    this.props.startFetchRecipes();
  }

  render() {
    const {recipes} = this.props;
    if (!recipes) {
      return <div className="loader"></div>;
    }
    const filteredRecipes = filterRecipes(recipes.all);

    function renderRecipes() {
      return filteredRecipes.map((item) => {
        return (
          <Recipe key={item.id} {...item} />
        )
      })
    }

    return (
      <div className="container-fluid">
        <DescTopBreakpoint>
          <div className="jumbotron">
            <h1>Welcome to the CookBook!</h1>
            <p>Let's cook something tasty!</p>
          </div>
        </DescTopBreakpoint>
        <PhoneBreakpoint>
          <h2 className="page-header text-center">What would you like to cook?</h2>
          <div className="btn_add text-center">
            <Link to="/new" className="btn btn-success btn-block nopadding">
              <span className="glyphicon glyphicon-plus"></span> Add New Recipe
            </Link>
          </div>
        </PhoneBreakpoint>
        <div className="row row-thmbl">
          {renderRecipes()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    recipes: state.recipes,
  }
}

export default connect(mapStateToProps, {
  startFetchRecipes,
  startFetchRecipe,
})(RecipesList);