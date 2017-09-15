'use strict';

import React from 'react';

export default class Button extends React.Component {

    render(){
        let classes = "button center capitalized " + this.props.className;
        return(
            <div className={classes} onClick={this.props.onClick}>{this.props.caption}</div>
        );
    }
}