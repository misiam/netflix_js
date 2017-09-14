'use strict';

import React from 'react';

export default class Button extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            caption: props.caption,
            //color: props.color,
            className: props.className,
            onClick: props.onClick,
        };

    }
    render(){
        let classes = "button center capitalized " + this.state.className;
        return(
            <div className={classes} onClick={this.state.onClick}>{this.state.caption}</div>

        );
    }
}