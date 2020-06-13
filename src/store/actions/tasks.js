import api from "../../services/api";
import * as actionTypes from "./actionTypes";

const set = (tasks) => {
  return { type: actionTypes.TASKS_LOAD_TASKS, tasks: tasks };
};

const add = (task) => {
  return { type: actionTypes.TASKS_ADD_TASK, task: task };
};

const update = (task) => {
  return { type: actionTypes.TASKS_UPDATE_TASK, task: task };
};

const del = (id) => {
  return { type: actionTypes.TASKS_DELETE_TASK, id: id };
}

export const getTasks = async () => {
  const { data } = await api.get("tasks");
  return (dispatch) => {
    dispatch(set(data));
  };
};

export const addTask = async (task) => {
  const { data } = await api.post("tasks", task);
  return (dispatch) => {
    dispatch(add(data));
  };
};

export const updateTaskType = async (task) => {
  task.type += 1;
  await api.patch(`tasks/${task.id}`, { type: task.type });
  return (dispatch) => {
    dispatch(update(task));
  };
};

export const deleteTask  = async id =>
{
  await api.delete(`tasks/${id}`);
  return (dispatch) => {
    dispatch(del(id));
  };
}
