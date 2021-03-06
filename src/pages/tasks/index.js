import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import TaskPanel from "../../components/taskPanel";
import classes from "./style.module.css";
import { useDispatch } from "react-redux";
import { getTasks } from "../../store/actions/tasks";

const taskPanels = [
  { title: "ToDo", type: 1, color: "#80d8ff" },
  { title: "Doing", type: 2, color: "#ffa726" },
  { title: "Done", type: 3, color: "#64ffda" },
];
const Tasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(await getTasks());
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={2} className={classes.container}>
      {taskPanels.map((panel, key) => (
        <Grid key={key} item md={4} xs={12}>
          <TaskPanel panel={panel} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tasks;
