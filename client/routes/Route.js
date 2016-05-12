import React from 'react';
import { IndexRoute, Route, Redirect, Router } from 'react-router';

//queries
import ViewerQuery from './ViewerQuery';

//root component (wrapper)
import rootApp from '../components/rootApp.js';

//site components
import AppComponent from '../components/App/AppComponent';

//admin components
import AdminComponent from '../components/Admin/App/AppComponent.js';
import CategoryComponent from '../components/Admin/Category/CategoryComponent.js';
import MebelComponent from '../components/Admin/Mebel/MebelComponent.js';

//admin containers
import AdminContainer from '../components/Admin/App/AppContainer.js';
import CategoryContainer from '../components/Admin/Category/CategoryContainer.js';

export default (
    <Route path='/' component={rootApp}>
      <IndexRoute component={AppComponent} />
      <Route path='admin' component={AdminContainer} queries={ViewerQuery} />
      <Route component={AdminComponent} >
        <Route path='mebel'  component={MebelComponent} />
        <Route path='category' component={CategoryContainer} queries={ViewerQuery} />
      </Route>
      <Redirect from='*' to='/' />
    </Route>
);
