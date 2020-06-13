import React from "react";
import {useTheme,useMediaQuery} from "@material-ui/core";
import {Dialog} from "@material-ui/core";

const MyDialog = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog open={props.open} fullScreen={fullScreen}>
        {props.children}
    </Dialog>
  );
};

export default MyDialog;
