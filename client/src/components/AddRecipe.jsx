import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';

import {startAddRecipe, clearState} from './../actions/index';
import {createInput} from './../api/createInputAPI';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import DescTopBreakpoint from './responsive_utilities/desctop_breakpoint';


class AddRecipe extends Component {

  //Clear state
  componentWillUnmount() {
    this.props.clearState()
  }

  onSubmit(props) {
    this.props.startAddRecipe(props);
  }

  render() {
    const {handleSubmit} = this.props;
    return (
      <div className="container-fluid">
        <PhoneBreakpoint>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                {createInput('Add New Recipe', 'recipeText')}
                <div className="btn_add text-center">
                  <button type="submit" className="btn btn-success btn-block ">
                    <span className="glyphicon glyphicon-plus"></span> Add
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
                {createInput('Add New Recipe', 'recipeText')}
                <div className="btn_add text-right">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-plus"></span> Add
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

function validate(values) {
  const errors = {};
  if (!values.recipeText) {
    errors.recipeText = 'Please, enter a text of recipe!';
  }
  return errors;
}

AddRecipe = reduxForm({
  form: 'AddRecipe',
  validate
})(AddRecipe);
AddRecipe = connect(null, {startAddRecipe, clearState})(AddRecipe);
export default AddRecipe;