import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import Router from './Router';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  // <Provider store={store}>
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  // </Provider>
);
