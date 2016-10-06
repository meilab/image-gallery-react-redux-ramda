import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducers'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import Gallery from './components/Gallery'
import sagas from './Sagas/'
import Actions from './actions/Creators'

let middleWare = []

const sagaMiddleware = createSagaMiddleware()

middleWare.push(sagaMiddleware)
middleWare.push(logger())

const store = createStore(
  reducer, 
  applyMiddleware(...middleWare)
)

sagaMiddleware.run(sagas)

store.dispatch(Actions.startup())

ReactDOM.render(
  <Provider store = {store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
);
