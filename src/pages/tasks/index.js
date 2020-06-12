import React from "react";
import { Grid } from "@material-ui/core";
import Task from "../../components/task";
import classes from './style.module.css'

const tasks = [
  { title: "ToDo", type: 1 },
  { title: "Doing", type: 2 },
  { title: "Done", type: 3 },
];
const Tasks = () => {
  return (
    <Grid container spacing={2} className={classes.container}>
      {tasks.map((task, key) => (
        <Grid key={key} item md={4} xs={12}>
          <Task task={task} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tasks;
