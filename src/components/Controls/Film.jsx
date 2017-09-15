'use strict';

import React from 'react';
import Image from './Image'; 

export default class Film extends React.Component {

    render(){
        return(
            <div className="grid-cell">
                <Image src={this.props.coverUrl} />
                <div className="film-caption capitalized">
                    <div className="film-caption-title float-left bold">{this.props.title}</div>
                    <div className="film-caption-year float-right">{this.props.year}</div>
                </div>
                <div className="film-genre">{this.props.genre}</div>
            </div>
        );
    }

}