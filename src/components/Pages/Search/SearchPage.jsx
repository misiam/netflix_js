'use strict';

import React from 'react';
// import { Link } from 'react-router';
import HeaderSearch from './HeaderSearch'
import SearchResultPage from '../SearchResultPage'

export default class SearchPage extends React.Component {
  render() {
    return (
        <div>
            <HeaderSearch />
            <div className="app-content">
                <SearchResultPage />
            </div>
        </div>
    );
  }
}