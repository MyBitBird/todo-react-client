import React from "react";
import { Paper,Typography } from "@material-ui/core";
import classes from './style.module.css'

const Task = ({task}) => {
  return (
    <Paper elevation={3} className={classes.task}>
      <Typography variant="h6" component="h6"  className={classes.taskHeader}  >
        {`#${task.title}`}
      </Typography>
    </Paper>
  );
};

export default Task;
