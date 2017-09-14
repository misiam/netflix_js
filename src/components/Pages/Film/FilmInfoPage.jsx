'use strict';

import React from 'react';
// import { Link } from 'react-router';
import HeaderFilmInfo from './HeaderFilmInfo'
import SearchResultPage from '../SearchResultPage'

export default class FilmInfoPage extends React.Component {
  render() {
    return (
        <div>
            <HeaderFilmInfo />
            <div className="app-content">
                <SearchResultPage />
            </div>
        </div>
    );
  }
}
