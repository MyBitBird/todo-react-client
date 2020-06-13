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
    case actionTypes.TASKS_UPDATE_TASK:
      const updatedTasks = [...state.tasks];
      const taskIndex = state.tasks.findIndex((x) => x.id == action.task.id);
      updatedTasks.splice(taskIndex, 1, action.task);
      return { ...state, tasks: [...updatedTasks] };

    default:
      return state;
  }
};

export default reducer;
