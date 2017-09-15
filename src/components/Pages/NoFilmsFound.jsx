'use strict';

import React from 'react';
import HeaderSearch from './Search/HeaderSearch'

export default class NoFilmsFound extends React.Component {
  render() {
    return (
      <div> 
        <HeaderSearch />
        <div className=" app-content">
          <div className="not-found no-films-found">
            No films found
          </div>
        </div>
      </div>
    );
  }
}
