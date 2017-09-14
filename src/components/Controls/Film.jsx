'use strict';

import React from 'react';

export default class Film extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            coverUrl: props.coverUrl,
            title: props.title,
            year: props.year,
            genre: props.genre
        };

    }

    render(){
        var state = this.state;
        return(
            <div className="grid-cell">
                <div className="film-img">
                    <img src={state.coverUrl} />
                </div>
                <div className="film-caption capitalized">
                    <div className="film-caption-title float-left bold">{state.title}</div>
                    <div className="film-caption-year float-right">{state.year}</div>
                </div>
                <div className="film-genre">{state.genre}</div>
            </div>
        );
    }

}