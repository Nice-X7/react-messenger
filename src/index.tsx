import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import './styles/navbar.scss'
import { App } from './components/App';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);