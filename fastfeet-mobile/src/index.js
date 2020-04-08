import 'react-native-gesture-handler';
import * as React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
// import { StyleSheet, View, Text } from 'react-native';
import './config/ReactotronConfig';
import { store, persistor } from './store';
import App from './App';

export default function Index() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
          <App />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
