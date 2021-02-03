import katsActionTypes from './kats.types';

const INITIAL_STATE = {
  katsList: [],
  isUploading: false
};

const katsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case katsActionTypes.RECEIVE_CATS:
      return {
        ...state,
        katsList: action.payload,
        isUploading: false
      };
      case katsActionTypes.REQUEST_CATS:
      return {
        ...state,
        isUploading: true
      };
    case katsActionTypes.FILTER_CATS:
      return {
      ...state,
      count: action.payload
    }
    default:
      return state;
  }
};

export default katsReducer;
