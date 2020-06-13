import React from "react";
import { Paper,Typography } from "@material-ui/core";
import classes from "./style.module.css";
import { useSelector } from "react-redux";
import Task from "../task";
import ButtonsPanel from '../ButtonsPanel'

const TaskPanel = ({ panel }) => {
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((x) => x.type === panel.type)
  );

  return (
    <Paper elevation={3} className={classes.container} style={{backgroundColor: panel.color}}>
      <Typography variant="h6" component="h6" className={classes.header}>
        {`#${panel.title}`}
        <ButtonsPanel />
      </Typography>
      {tasks.map((task, key) => (
        <Task task={task} key={key} />
      ))}
    </Paper>
  );
};

export default TaskPanel;
