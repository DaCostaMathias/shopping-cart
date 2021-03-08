import React from 'react'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware,compose } from "redux"
import ProductsListStore from './ProductsContainer'
import { createLogger } from 'redux-logger'
import reducer, { saveState } from '../reducers'
import CartContainer from './CartContainer'
import {loadState} from '../localstorage/localStorage'

//create middleware with thunk to give better dev info
const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//get previous data stored in localstorage or undefined if empty
const persistedState = loadState();

//create store for redux inclueding previous states and middleware for debbuging
const store = createStore(reducer,persistedState ,composeEnhancers(
  applyMiddleware(...middleware)
))

//create a store listener to update the localstorage
//To improve performance adding some timer or library like Lodash to throttle the call
store.subscribe(()=>{
  saveState(store.getState());
});

function App() {
 
  return (
    <Provider store={store}>
      <div>
        <h2>Shopping Cart </h2>
        <hr/>
        <ProductsListStore />
        <hr/>
        <CartContainer />
      </div>
    </Provider>
  );
}

export default App;