import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {AppRegistry} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './src/store/reducers/rootReducer';
import thunk from 'redux-thunk';

import {
  getFirebase,
  reactReduxFirebase,
  ReactReduxFirebaseProvider,
} from 'react-redux-firebase';
import {
  getFirestore,
  reduxFirestore,
  createFirestoreInstance,
} from 'redux-firestore';
import fbConfig from './src/config/fbconfig';
import firebase from 'firebase';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase, fbConfig),
  ),
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true,
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AppContainer = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppContainer);
