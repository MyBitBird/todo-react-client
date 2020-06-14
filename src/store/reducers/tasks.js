import * as actionTypes from "../actions/actionTypes";

const initState = {
  tasks: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TASKS_LOAD_TASKS:
      return { ...state, tasks: action.tasks };
    case actionTypes.TASKS_ADD_TASK:
      return { ...state, tasks: state.tasks.concat(action.task) };
    case actionTypes.TASKS_DELETE_TASK:
      return { ...state, tasks: state.tasks.filter(x => x._id !== action.id) };
    case actionTypes.TASKS_UPDATE_TASK:
      return { ...state, tasks: (state.tasks.filter(x => x._id !== action.task._id)).concat(action.task) };

    default:
      return state;
  }
};

export default reducer;
