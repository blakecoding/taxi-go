/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import Route from './routes/Route';
import store from './core/store';

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default App;
