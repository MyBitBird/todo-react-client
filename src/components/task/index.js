import React from "react";
import { Typography,  Card,  CardContent,  CardActionArea} from "@material-ui/core";
import classes from "./style.module.css";

const Task = ({task}) => {
  return (
    <Card className={classes.task}>
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
