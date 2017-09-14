'use strict';

import React from 'react';
import NetflixLink from '../../Controls/NetflixLink'
import SearchForm from './SearchForm'
import HeaderToolbar from '../HeaderToolbar'
import OptionsGroup from '../../Controls/OptionsGroup'

export default class HeaderSearch extends React.Component {

    render(){
        return(
        <header className="header-bg-img header-search">
         
          <div className="header-search-form">
            <NetflixLink />
            <div>
              <h2 className="capitalized">Find your movie</h2>
            </div>
            <SearchForm />
          </div>
          <HeaderToolbar>
            <span className="float-left label">7 movies found</span>
            <div className="float-right"> 
              <span className="label">Sort by</span>
              <OptionsGroup groupName="OrderOptions" checkedValue="rating" className="order-options-group" groupType={OptionsGroup.GroupTypes.label}
                  options={[ {value: "release date", label:"release date"},
                              {value: "rating", label:"rating"} ]}
              />
            </div>
          </HeaderToolbar>
        </header>
        );
    }
}