import React, { useState } from "react";
import {  Paper,  Typography,  FormControl,  DialogContent,  DialogActions,  Button,  TextField,} from "@material-ui/core";
import classes from "./style.module.css";
import { useSelector } from "react-redux";
import Task from "../task";
import ButtonsPanel from "../buttonsPanel";
import Dialog from "../dialog";
import { addTask, updateTaskType, deleteTask } from "../../store/actions/tasks";
import { useDispatch } from "react-redux";
import SearchBox from "../searchBox";

const TaskPanel = ({ panel }) => {

  const tasks = useSelector(state => state.tasks.tasks);
  const panelTasks = tasks.filter((x) => x.type === panel.type);
  const [filteredTasks, setFilteredTasks] = useState(null);

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleOpenDialog = () => setDialogOpen(true);

  const handleTaskClick = (id) => {
    setSelectedTaskId(selectedTaskId === id ? null : id);
  };

  const dispatch = useDispatch();
  const handleAddTask = async () => {
    dispatch(await addTask({ title: title, desc: desc, type: panel.type }));
    setTitle('');
    setDesc('');
    setDialogOpen(false);
  };

  const handleMoveTask = async () => {
    dispatch(
      await updateTaskType(panelTasks.filter((x) => x._id === selectedTaskId)[0])
    );
    setSelectedTaskId(null);
  };

  const handleDeleteTask = async () => {
    dispatch(await deleteTask(selectedTaskId));
    setSelectedTaskId(null);
  };

  const handleSearchFinished = (result) => {
    setFilteredTasks(result);
  };
  
  const tasksToShow = filteredTasks ? filteredTasks : panelTasks; 
  
  return (
    <>
      <Paper
        elevation={3}
        className={classes.container}
        style={{ backgroundColor: panel.color }}
      >
        <Typography variant="h6" component="h6" className={classes.header}>
          {`#${panel.title}`}

          <ButtonsPanel
            onOpenDialog={handleOpenDialog}
            selectedId={selectedTaskId}
            onMoveTask={handleMoveTask}
            onDeleteTask={handleDeleteTask}
          />
        </Typography>
        <SearchBox data={[...panelTasks]} onSearchFinished={handleSearchFinished} />
        {tasksToShow.map((task, key) => (
          <Task
            task={task}
            key={key}
            selected={selectedTaskId === task._id}
            onSelected={handleTaskClick}
          />
        ))}
      </Paper>

      <Dialog open={isDialogOpen}>
        <DialogContent>
          <FormControl>
            <TextField
              value={title}
              autoFocus
              margin="dense"
              id="title"
              label="Task Title"
              fullWidth
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              value={desc}
              margin="dense"
              id="desc"
              label="Task Description"
              rows={4}
              fullWidth
              multiline
              variant="outlined"
              onChange={(e) => setDesc(e.target.value)}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleAddTask()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskPanel;
