import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer from './models/reducers/Reducer'


const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
