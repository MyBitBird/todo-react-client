import api from "../../services/api";
import * as actionTypes from "./actionTypes";

const setTasks = (tasks) => {
  return { type: actionTypes.TASKS_LOAD_DEVICES, tasks: tasks };
};

export const getTasks = async () => {
  const { data } = await api.get("tasks");
  return (dispatch) => {
    dispatch(setTasks(data));
  };
};
