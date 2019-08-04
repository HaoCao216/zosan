import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { withAuthentication } from './components/Session';


import Full from './Full'
import rootReducer from './reducers/index'
import rootSaga from './sagas/index'
import './App.scss'
const sagaMiddleware = createSagaMiddleware()
const enhancers = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(rootReducer, enhancers)
sagaMiddleware.run(rootSaga)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <Full />
      </Provider>
    )
  }
}
export default withAuthentication(App);
