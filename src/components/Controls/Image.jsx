'use strict';

import React from 'react';

export default class Image extends React.Component {
    render(){
        var className = this.props.className ? this.props.className : '';
        return(
            <div className={"film-img "+className}>
                <img src={this.props.src} />
            </div>
        );
    }
}