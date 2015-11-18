// This is the entry point for the whole app
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Channel from './components/Channel';

const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');

// Copy across static files like index.html, etc
require('file?name=dist/[name].[ext]!./index.html');
// Import styles generic across the entire app
require('./index.scss');

// Create the global 'store' by running `configureStore()`
const store = configureStore();


// Render the Provider (complete with store) and the routes to the DOM
ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Channel />
    </Provider>
    <DebugPanel top right bottom>
      <DevTools store={ store } monitor={ LogMonitor } />
    </DebugPanel>
  </div>,
  document.getElementById('app')
);
