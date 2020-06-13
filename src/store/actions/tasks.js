import api from "../../services/api";
import * as actionTypes from "./actionTypes";

const set = (tasks) => {
  return { type: actionTypes.TASKS_LOAD_TASKS, tasks: tasks };
};

const add = (task) => {
  console.log('come to add redux');
  
  return { type: actionTypes.TASKS_ADD_TASK, task: task };
};

export const getTasks = async () => {
  const { data } = await api.get("tasks");
  return (dispatch) => {
    dispatch(set(data));
  };
};

export const addTask = async (task) =>
{
  const { data } = await api.post('tasks' , task);
  console.log('added' , data);
  return (dispatch) => {
    dispatch(add(data));
  };

  

}
