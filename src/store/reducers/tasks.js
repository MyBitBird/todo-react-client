import React, { useState } from "react";
import * as actionTypes from "../actions/actionTypes";

const initState = {
  tasks: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TASKS_LOAD_TASKS:
      return { ...state, tasks: action.tasks };
    case actionTypes.TASKS_ADD_TASK:
        console.log('come to add' , state.tasks);
        
        return {...state , tasks: state.tasks.concat(action.task)}
    
    default:
      return state;
  }
};

export default reducer;
