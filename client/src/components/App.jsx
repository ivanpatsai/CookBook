import React from 'react';

import Navigation from './Navigation';

const App = (props) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Navigation/>
          {props.children}
        </div>
      </div>
    </div>
  )
};

export default App;