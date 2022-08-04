import {
  HOUSES_FETCH_START,
  HOUSES_FETCH_SUCCESS,
  HOUSES_FETCH_FAILURE
} from '../actions/constants';

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HOUSES_FETCH_START:
      return {
        isLoading: true,
        isError: false,
        data: []
      };
    case HOUSES_FETCH_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: payload
      };
    case HOUSES_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
