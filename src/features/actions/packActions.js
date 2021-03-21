import { actionTypes } from "./actionTypes";
import { fetchPacks } from "../services/fetchPacks";

export const packsIsLoading = bool => {
  return {
    type: actionTypes.PACKS_FETCH_DATA_SUCCESS,
    isLoading: bool
  };
};

export const packsFetchDataSuccess = packs => {
  return {
    type: actionTypes.PACKS_FETCH_DATA_SUCCESS,
    packs
  };
};

export const packsFetchData = url => {
  return async dispatch => {
    dispatch(packsIsLoading(true));
    const packs = await fetchPacks(url);
    dispatch(packsFetchDataSuccess(packs));
    dispatch(packsIsLoading(false));
  };
};
