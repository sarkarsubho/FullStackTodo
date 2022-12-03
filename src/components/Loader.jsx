import { Grid } from "@chakra-ui/react";
import React from "react";
import "./loader.css";
export const Loader = () => {
  return (
    <Grid placeItems={"center"} width={"100%"} height={"100%"}>
      <div className="loading">
        <span> Loading.... </span>
      </div>
    </Grid>
  );
};
