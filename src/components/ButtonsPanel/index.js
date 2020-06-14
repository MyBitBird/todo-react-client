import React from "react";
import { IconButton } from "@material-ui/core";
import classes from "./style.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import ArrowIcon from "@material-ui/icons/ArrowForward";

import Theme from "../theme";
const ButtonsPanel = (props) => {
  return (
    <div className={classes.container}>
      {!props.selectedId ? (
        <IconButton
          style={Theme.palette.white}
          size="small"
          onClick={props.onOpenDialog}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
      ) : (
        <>
          <IconButton
            style={Theme.palette.white}
            size="small"
            onClick={props.onDeleteTask}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
          &nbsp;
          <IconButton
            style={Theme.palette.white}
            size="small"
            onClick={props.onMoveTask}
          >
            <ArrowIcon fontSize="inherit" />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default ButtonsPanel;
