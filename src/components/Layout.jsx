'use strict';

import React from 'react';
// import { Link } from 'react-router';
import HeaderSearch from './Pages/Search/HeaderSearch'
import Footer from './Footer'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
