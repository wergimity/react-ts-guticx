import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';
import { App } from './app/app'
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
