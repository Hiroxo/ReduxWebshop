import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartItemsReducer from './reducers/cartItems.js';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";


const store = createStore(
  cartItemsReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
