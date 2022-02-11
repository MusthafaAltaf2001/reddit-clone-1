import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {applyMiddleware, createStore, compose} from 'redux';
import CombinedReducers from './Reducers/CombinedReducers';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';


const store = createStore(CombinedReducers, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
