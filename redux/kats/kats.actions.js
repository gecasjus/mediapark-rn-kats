import katsActionTypes from './kats.types';

export const filterCats = payload => ({
	type:katsActionTypes.FILTER_CATS,
	payload
})

export const requestCats = () => ({
	type:katsActionTypes.REQUEST_CATS
})

export const receiveCats = (payload) => ({
	type:katsActionTypes.RECEIVE_CATS,
	payload
})