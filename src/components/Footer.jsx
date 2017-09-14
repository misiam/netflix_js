'use strict';

import React from 'react';
import NetflixLink from './Controls/NetflixLink'

export default class Header extends React.Component {
    render(){
        return(
        <footer>
          <NetflixLink />
        </footer>
        );
    }
}