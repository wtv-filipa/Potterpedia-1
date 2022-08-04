import { fetchHouses } from '../../../api';
import {
  HOUSES_FETCH_START,
  HOUSES_FETCH_SUCCESS,
  HOUSES_FETCH_FAILURE
} from './constants';

export const getHouses = () => {
  return dispatch => {
    dispatch({ type: HOUSES_FETCH_START });

    fetchHouses()
      .then(houses => {
        dispatch({ type: HOUSES_FETCH_SUCCESS, payload: houses })
      })
      .catch(() => dispatch({ type: HOUSES_FETCH_FAILURE }))
  }
}