import React from "react";
import { TextField } from "@material-ui/core";

const SearchBox = ({ data, onSearchFinished }) => {
  const handleChange = (event) => {
    const keyword = event.target.value.trim().toLowerCase();
    if (keyword === "") return onSearchFinished(null);
    onSearchFinished(
      data.filter(
        (x) =>
          x.title.toLowerCase().includes(keyword) ||
          x.desc.toLowerCase().includes(keyword)
      )
    );
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        size="small"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
