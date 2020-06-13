import React from "react";
import { IconButton } from "@material-ui/core";
import classes from "./style.module.css";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

import Theme from "../theme";
const ButtonsPanel = ({ selectedId, onOpenDialog }) => {
  return (
    <div className={classes.container}>
      {!selectedId ? (
        <IconButton
          aria-label="add"
          style={Theme.palette.white}
          size="small"
          onClick={onOpenDialog}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
      ) : (
        <>
          <IconButton
            aria-label="edit"
            style={Theme.palette.white}
            size="small"
          >
            <EditIcon fontSize="inherit" />
          </IconButton>
          &nbsp;
          <IconButton
            aria-label="delete"
            style={Theme.palette.white}
            size="small"
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default ButtonsPanel;
