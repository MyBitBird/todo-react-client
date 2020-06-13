import React, { useState } from "react";
import * as actionTypes from "../actions/actionTypes";

const initState = {
  tasks: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TASKS_LOAD_DEVICES:
      return { ...state, tasks: action.tasks };
    default:
      return state;
  }
};

export default reducer;
