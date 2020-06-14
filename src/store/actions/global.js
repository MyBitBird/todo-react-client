import * as actionTypes from "./actionTypes";

export const setLoading = (loading) => {
  return { type: actionTypes.GLOBAL_SET_LOADING, loading: loading };
};