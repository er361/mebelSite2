import React from 'react';
import Relay from 'react-relay';
import ReactDOM from 'react-dom';
import { browserHistory, applyRouterMiddleware, Router } from 'react-router';
import useRelay from 'react-router-relay';

import '../node_modules/react-mdl/extra/material.js';
import '../semantic/dist/semantic.min.css';
import '../semantic/dist/semantic.min.js';

import Route from './routes/Route';

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

ReactDOM.render(
<Router
  history={browserHistory}
  render={applyRouterMiddleware(useRelay)}
  environment={Relay.Store}
  routes={Route} />,
  rootNode
);
