import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import About from './About';
import reducers from './reducers';
import {Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Track from './Track';

//Создаем стор, запиливаем в него редьюсер и применяемдевтулз к обертке асинхронных экшенов
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory, store);

console.log(store.getState());

// Подписка на изменение стора (колбек)
store.subscribe(()=>{
  console.log(store.getState());

});
ReactDOM.render(
  //Provider - прокидываем стор в приложение и компоненты
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/tracks/:id" component={Track}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
