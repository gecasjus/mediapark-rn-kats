 import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Routes} from './routes/routes'
import 'react-native-get-random-values'

import ErrorConnection from './components/error-connection/error-connection.component.jsx'
import useConnection from './hooks/useConnection'
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {

	let network = useConnection();
	if (network === false) {
		return <ErrorConnection />
	}
  
  return (
     <Provider store={store}>
     	<PersistGate persistor={persistor}>
        	<Routes />
        </PersistGate>
      </Provider>
  );
}
