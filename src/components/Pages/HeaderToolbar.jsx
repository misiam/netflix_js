'use strict';

import React from 'react';

export default class HeaderToolbar extends React.Component{
    render() {
        return (
            <div className="header-toolbar">
                {this.props.children}
            </div>
        );
    }
}