import { fetchSpells } from '../../../api';
import {
  SPELLS_FETCH_START,
  SPELLS_FETCH_SUCCESS,
  SPELLS_FETCH_FAILURE,
} from './constants';

export const getSpells = () => {
  return dispatch => {
    dispatch({ type: SPELLS_FETCH_START });

    fetchSpells()
      .then(spells => {
        dispatch({ type: SPELLS_FETCH_SUCCESS, payload: spells })
      })
      .catch(() => dispatch({ type: SPELLS_FETCH_FAILURE }))
  }
}