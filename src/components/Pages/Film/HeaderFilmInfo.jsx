'use strict';

import React from 'react';
import NetflixLink from '../../Controls/NetflixLink'
import HeaderToolbar from '../HeaderToolbar'
import Button from '../../Controls/Button'
import Image from '../../Controls/Image'
import FilmInfoCaption from './FilmInfoCaption';

export default class HeaderSearch extends React.Component {

    render(){
        return(
        <header className="header-bg-img header-film">
          <div className="header-film-info">
              <Button className="float-right button-goto-search bold capitalized -white" caption="Search" />
              <NetflixLink />
              
              <div className="columnsContainer">
                <Image 
                  src="https://github.com/erikras/redux-form/raw/master/docs/reduxFormDiagram.png" 
                  className="leftColumn" 
                  /> 
                <div className="rightColumn">
                  <FilmInfoCaption />
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