'use strict';

import React from 'react';
import NetflixLink from '../../Controls/NetflixLink'
import HeaderToolbar from '../HeaderToolbar'
import Button from '../../Controls/Button'

export default class HeaderSearch extends React.Component {

    render(){
        return(
        <header className="header-bg-img header-film">
          <div className="header-film-info">
              <Button className="float-right button-goto-search bold capitalized -white" caption="Search" />
              
              <NetflixLink />
              
              <div className="columnsContainer">
                <div className="film-img leftColumn" />
                
                <div className="rightColumn">
                  <div className="film-info-caption-container">
                    <div className="film-info-caption">
                      <div className="-salmon film-info-caption-title">Pulp Fiction</div>
                      <div className="film-info-caption-rating float-right">4.1</div>
                    </div>
                    <div className="-lightgray">Oscar-winning Movies</div>
                  </div>
                  <div className="-white film-info-attributes">
                    <div className="float-left">1994</div>
                    <div className="float-right">154min</div>
                  </div>
                  <div className="-lightgray film-info-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                  <div className="film-info-people -darkgray">
                    <div>Director: Quentin Tarantino</div>
                    <div>Cast: </div>
                  </div>
                </div>
              

              </div>
          </div>
          <HeaderToolbar>
            <span className="float-left label">Films by</span>
            <span className="float-left label">Quentin Tarantino</span>
          </HeaderToolbar>
        </header>
        );
    }
}