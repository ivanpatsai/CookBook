import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import DescTopBreakpoint from './responsive_utilities/desctop_breakpoint';


import {
  startFetchRecipe,
  toggleShowHistory,
  startFetchHistory,
  resetShowHistory
} from './../actions/index';
import {filterHistory} from '../api/recipeSortAPI';
import {renderDate} from '../api/renderDate';


class ShowRecipe extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.startFetchRecipe(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetShowHistory();
  }

  handleClick() {
    this.props.toggleShowHistory();
    this.props.startFetchHistory(this.props.single.id);
  }

  render() {
    const {showHistory, history} = this.props;
    if (!this.props.single) {
      return <div className="loader"></div>
    }
    function renderHistory() {
      if (!history.versions) {
        return <div>Loading...</div>
      } else if (history.versions.length === 0) {
        return <div>No history</div>
      } else {
        return filterHistory(history.versions).map((item) => {
          return (
            <li
              key={item._id}
              className="list-group-item"
            >
              <div className="text-muted">Created: {renderDate(item.created)}</div>
              {item.recipeText}
            </li>
          )
        })
      }
    }

    return (
      <div className="container-fluid">
        <PhoneBreakpoint>
          <div className="panel panel-default">
            <div className="panel-body">{this.props.single.recipe.recipeText}</div>
            <Link to={`/${this.props.single.id}/edit`} className="btn btn-warning btn-block">
              <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
            </Link>
            <div className="panel panel-default panel-history">
              <div
                className="panel-heading"
                onClick={this.handleClick}
              >{showHistory ? <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span> :
                <span className="glyphicon glyphicon-triangle-right" aria-hidden="true"> </span>}Show History
              </div>
              {showHistory && <ul className="list-group">
                {renderHistory()}
              </ul>}
            </div>
          </div>
        </PhoneBreakpoint>
        <DescTopBreakpoint>
          <div className="panel panel-default">
            <div className="text-right">
              <Link to={`/${this.props.single.id}/edit`} className="btn btn-default">
                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
              </Link>
            </div>
            <div className="panel-body">{this.props.single.recipe.recipeText}</div>
            <div className="panel panel-default panel-history">
              <div
                className="panel-heading"
                onClick={this.handleClick}
              >{showHistory ? <span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span> :
                <span className="glyphicon glyphicon-triangle-right" aria-hidden="true"> </span>}Show History
              </div>
              {showHistory && <ul className="list-group">
                {renderHistory()}
              </ul>}
            </div>
          </div>
        </DescTopBreakpoint>
      </div>
    );
  };
}
function mapStateToProps(state) {
  return {
    single: state.recipes.single,
    history: state.history,
    showHistory: state.showHistory
  };
}

export default connect(mapStateToProps, {
  startFetchRecipe,
  toggleShowHistory,
  startFetchHistory,
  resetShowHistory
})(ShowRecipe);
