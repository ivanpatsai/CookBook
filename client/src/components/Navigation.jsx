import React from 'react';
import {Link} from 'react-router-dom'

export default (props) => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/"><span className="glyphicon glyphicon-cutlery" aria-hidden="true"></span> CookBook</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">
                                <span className="glyphicon glyphicon-home"></span> Home
                            </Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right hidden-xs hidden-sm">
                        <li>
                            <Link to="/new">
                                <span className="glyphicon glyphicon-plus"></span> Add New Recipe
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}