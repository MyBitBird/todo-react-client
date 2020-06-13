import React from "react";
import {  Typography,  Card,  CardContent,  CardActionArea,} from "@material-ui/core";
import classes from "./style.module.css";

const Task = ({ task, selected , onSelected }) => {
  return (
    <Card
      className={classes.task}
      style={selected ? { backgroundColor: '#fff176' } : null}
      onClick = {() => onSelected(task._id)}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {task.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {task.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Task;
