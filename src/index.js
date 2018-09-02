import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import './index.css';

import reducers from 'reducers';
import App from 'components/App';
import Dashboard from 'components/Dashboard';
import Student from 'components/Student';

const store = createStore(
  reducers, {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Dashboard} />
        <Route path="/:id" exact component={Student} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
