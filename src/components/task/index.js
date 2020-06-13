import React from "react";
import {  Paper,  Typography,  Card,  CardContent,CardActionArea} from "@material-ui/core";
import classes from "./style.module.css";
import { useSelector } from 'react-redux'


const Task = ({ task }) => {

  const tasks = useSelector(state => state.tasks.tasks.filter( x => x.type === task.type));
  
  return (
    <Paper elevation={3} className={classes.container}>
      <Typography variant="h6" component="h6" className={classes.header}>
        {`#${task.title}`}
      </Typography>
      {tasks.map((task, key) => (
        <Card key={key} className={classes.task}>
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
      ))}
    </Paper>
  );
};

export default Task;
