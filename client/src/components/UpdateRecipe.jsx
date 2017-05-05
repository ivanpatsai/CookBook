import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {startUpdateRecipe, startFetchRecipe, clearState} from './../actions/index';
import {createInput} from './../api/createInputAPI';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import DescTopBreakpoint from './responsive_utilities/desctop_breakpoint';


class UpdateRecipe extends Component {
  //Load recipe data
  componentWillMount() {
    this.props.clearState();
    this.props.startFetchRecipe(this.props.match.params.id);
  }
  //Initialize form after recipe data is received
  componentWillReceiveProps(nextProps) {
    if (!this.props.single && nextProps.single){
      this.handleInitialize(nextProps.single);
    }
  }

  handleInitialize(single) {
    const initData = {
      recipeText: single.recipe.recipeText,
    };
    this.props.initialize(initData);
  }

  onSubmit(props) {
    this.props.startUpdateRecipe(props, this.props.match.params.id);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="container-fluid">
        <PhoneBreakpoint>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {createInput('Edit Recipe', 'recipeText')}
                <div className="btn_add text-center">
                  <button type="submit" className="btn btn-warning btn-block ">
                    <span className="glyphicon glyphicon-ok"></span> Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </PhoneBreakpoint>
        <DescTopBreakpoint>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {createInput('Edit Recipe', 'recipeText')}
                <div className="btn_add text-right">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-ok"></span> Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DescTopBreakpoint>

      </div>
    )
  }
}

function validate(values, props) {
  const errors = {};
  if (!values.recipeText) {
    errors.recipeText = 'Please, enter a text of recipe!';
  }
  if(props.single){
    if(values.recipeText === props.single.recipe.recipeText){
      errors.recipeText = 'Please, change recipe text if you are going to update it!';
    }
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    single: state.recipes.single
  }
}

UpdateRecipe = reduxForm({
  form: 'UpdateRecipe',
  validate
})(UpdateRecipe);
UpdateRecipe = connect(mapStateToProps, {
  startUpdateRecipe,
  startFetchRecipe,
  clearState})(UpdateRecipe);
export default UpdateRecipe;