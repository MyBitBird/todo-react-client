import React from "react";
import { LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

const Loading = () => {
  const isLoading = useSelector((state) => state.global.isLoading);
  return (
    <div style={{ minHeight: 10 }}>
      {isLoading ? <LinearProgress color="secondary" /> : null}
    </div>
  );
};

export default Loading;
