import React from 'react';
import { IndexRoute, Route, Redirect, Router } from 'react-router';

//queries
import ViewerQuery from '../queries/ViewerQuery';
import CategoryListQuery from '../queries/CategoryListQuery.js';

//root component (wrapper)
import rootApp from '../components/rootApp.js';

//site components
import AppComponent from '../components/App/AppComponent';

//admin components
import AdminComponent from '../components/Admin/App/AppComponent.js';
import CategoryComponent from '../components/Admin/Category/CategoryComponent.js';
import Mebel from '../components/Admin/Mebel/Mebel.js'
//admin containers
import AdminContainer from '../components/Admin/App/AppContainer.js';
import CategoryContainer from '../components/Admin/Category/CategoryContainer.js';

export default (
    <Route path='/' component={rootApp}>
      <IndexRoute component={AppComponent} />
      <Route path='admin' component={AdminContainer} queries={ViewerQuery} />
      <Route component={AdminComponent} >
        <Route path='mebel'  component={Mebel} queries={ViewerQuery} />
        <Route path='category' component={CategoryContainer} queries={ViewerQuery} />
      </Route>
      <Redirect from='*' to='/' />
    </Route>
);
