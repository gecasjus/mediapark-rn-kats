import { all, call } from 'redux-saga/effects';

import {onCatsReceive} from './kats/kats.sagas'

export default function* rootSaga(){
	yield all([
		call(onCatsReceive)
		])
}