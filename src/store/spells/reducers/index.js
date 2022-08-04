import {
  SPELLS_FETCH_START,
  SPELLS_FETCH_SUCCESS,
  SPELLS_FETCH_FAILURE,
} from '../actions/constants';

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SPELLS_FETCH_START:
      return {
        isLoading: true,
        isError: false,
        data: []
      };
    case SPELLS_FETCH_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: payload
      };
    case SPELLS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}
