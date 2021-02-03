import { call, takeLatest, put } from 'redux-saga/effects';

import {receiveCats} from './kats.actions'
import katsActionTypes from './kats.types';
import { fetchCats } from '../../api-calls/api.calls'
import { getNames } from '../../api-calls/api-name'

export function* getCats(action) {
	try {
		const data = yield call(fetchCats)
		const names = yield call(getNames)
		const obj = names.map((item, i) => Object.assign({}, item, data[i]));
		yield put(receiveCats(obj))
	} catch (error) {
		console.log(error)
	}
}


export function* onCatsReceive() {
	yield takeLatest(katsActionTypes.REQUEST_CATS, getCats)
}