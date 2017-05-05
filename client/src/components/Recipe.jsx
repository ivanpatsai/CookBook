import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {toggleShowHistory} from './../actions/index';
import {renderDate} from './../api/renderDate';
import PhoneBreakpoint from './responsive_utilities/phone_breakpoint';
import DescTopBreakpoint from './responsive_utilities/desctop_breakpoint';


export class Recipe extends Component {

  render() {
    const {recipe: {recipeText, created}, id} = this.props;
    const renderText = () => {
      if (recipeText.length > 450) {
        return recipeText.substring(0, 450) + '...'
      } else {
        return recipeText
      }
    };
    return (
      <div className="col-md-6 col-xs-12">
        <PhoneBreakpoint>
          <Link to={`/${id}`}>
            <div className="thumbnail">
              {renderText()}
              <div className="thumb-footer">
                <div className="row">
                  <div className="text-left text-muted col-xs-12">
                    {`Created: ${renderDate(created)}`}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </PhoneBreakpoint>
        <DescTopBreakpoint>
          <div className="thumbnail">
            {renderText()}
            <div className="thumb-footer">
              <div className="row">
                <div className="text-left text-muted col-md-6">
                  {`Created: ${renderDate(created)}`}
                </div>
                <div className="text-right col-md-6">
                  <Link className="btn btn-default" to={`/${id}`}>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </DescTopBreakpoint>
      </div>
    )
  }
}

export default connect(null, {toggleShowHistory})(Recipe)