import React, { useState } from "react";
import {  Paper,  Typography,  FormControl,  DialogContent,  DialogActions,  Button,  TextField,} from "@material-ui/core";
import classes from "./style.module.css";
import { useSelector } from "react-redux";
import Task from "../task";
import ButtonsPanel from "../buttonsPanel";
import Dialog from "../dialog";
import {addTask}  from '../../store/actions/tasks'
import { useDispatch } from "react-redux";


const TaskPanel = ({ panel }) => {
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((x) => x.type === panel.type)
  );

  const dispatch = useDispatch();

  const [isDialogOpen, setDialogOpen] = useState(false);
  const handleOpenDialog = () => setDialogOpen(true);
  const [title , setTitle] = useState('');
  const [desc , setDesc] = useState('');


  const handleAddTask = async () => {
    dispatch(await addTask({title: title , desc: desc , type: panel.type}));
    setDialogOpen(false);
  };

  return (
    <>
      <Paper
        elevation={3}
        className={classes.container}
        style={{ backgroundColor: panel.color }}
      >
        <Typography variant="h6" component="h6" className={classes.header}>
          {`#${panel.title}`}
          <ButtonsPanel onOpenDialog={handleOpenDialog} />
        </Typography>
        {tasks.map((task, key) => (
          <Task task={task} key={key} />
        ))}
      </Paper>

      <Dialog open={isDialogOpen}>
          <DialogContent>
            <FormControl>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Task Title"
                fullWidth
                onChange={e => setTitle(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="desc"
                label="Task Description"
                rows={4}
                fullWidth
                multiline
                onChange={e => setDesc(e.target.value)}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)} color="primary">
              Cancel
            </Button>
            <Button color="primary" onClick={()=>handleAddTask()}>
              Save
            </Button>
          </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskPanel;
