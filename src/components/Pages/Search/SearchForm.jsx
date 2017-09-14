'use strict';

import React from 'react';
import Button from '../../Controls/Button'
import OptionsGroup from '../../Controls/OptionsGroup'

export default class SearchForm extends React.Component {

    render(){
        return(
    <div>
        <form className="search-form">
            <input type="text" name="search" placeholder="Search..." />
            <button type="submit">[search icon]</button>
          </form>

          <div className="header-search-form-toolbar">
            <div>
                <span className="float-left capitalized label">Search by</span>
            </div>
            <OptionsGroup groupName="SearchOptions" checkedValue="Title" className="float-left capitalized search-options-group" 
                groupType={OptionsGroup.GroupTypes.button}
                options={[ {value: "Title", label:"Title"},
                           {value: "Director", label:"Director"} ]}
            />

            <Button onClick={()=> alert("Search")} caption="Search" className="-salmon float-right" />
          </div>
    </div>
        );
    }

}