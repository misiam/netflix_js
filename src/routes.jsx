'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import NotFoundPage from './components/Pages/NotFoundPage';
import NoFilmsFound from './components/Pages/NoFilmsFound';
import SearchPage from './components/Pages/Search/SearchPage';
import FilmInfoPage from './components/Pages/Film/FilmInfoPage';

const routes = (
  <Route path="/" component={Layout}>
    {/* <IndexRoute component={IndexPage}/> */}
    <IndexRoute component={NoFilmsFound}/> 
    <Route path="nofilmsfound" component={NoFilmsFound}/>
    <Route path="search/:query" component={SearchPage}/>
    <Route path="film/:query" component={FilmInfoPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
