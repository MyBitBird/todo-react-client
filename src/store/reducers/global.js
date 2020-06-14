import * as actionTypes from "../actions/actionTypes";

const initState = {
    isLoading: false,
  };

  const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GLOBAL_SET_LOADING:
          return { ...state, isLoading: action.loading };
        default:
          return state;
      }
  }
   
  export default reducer;