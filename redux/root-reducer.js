import { combineReducers } from 'redux';
import katsReducer from './kats/kats.reducer'

import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['kats']
}

const rootReducer = combineReducers({
	kats: katsReducer
})

export default persistReducer(persistConfig, rootReducer);