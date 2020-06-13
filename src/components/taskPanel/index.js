import React from "react";
import { Paper,Typography } from "@material-ui/core";
import classes from "./style.module.css";
import { useSelector } from "react-redux";
import Task from "../task";

const TaskPanel = ({ panel }) => {
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((x) => x.type === panel.type)
  );

  return (
    <Paper elevation={3} className={classes.container}>
      <Typography variant="h6" component="h6" className={classes.header}>
        {`#${panel.title}`}
      </Typography>
      {tasks.map((task, key) => (
        <Task task={task} key={key} />
      ))}
    </Paper>
  );
};

export default TaskPanel;
