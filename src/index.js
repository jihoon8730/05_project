import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);
