'use strict';

import React from 'react';
import Film from '../Controls/Film'

export default class SearchResultPage extends React.Component {
  render() {
    return (
      <div className="grid-container">

        <Film coverUrl="" title="Kill Bill" year="2004" genre="Action&Adventure" />
        <Film coverUrl="" title="Kill Bill" year="2004" genre="Action&Adventure" />
        <Film coverUrl="" title="Kill Bill" year="2004" genre="Action&Adventure" />
        <Film coverUrl="" title="Kill Bill" year="2004" genre="Action&Adventure" />
        <Film coverUrl="" title="Four rooms" year="1995" genre="Comedies" />

      </div>
    );
  }
}