import snap from "../snap.svg";

import React, { useEffect } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { listHeaders } from "../actions/header0Actions";

function Header0() {
  const HeaderList = useSelector((state) => state.header0);
  const { header0, loading, error } = HeaderList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listHeaders());
    return () => {};
  }, []);
  console.log(header0);
  return (
    <Grid
      container
      spacing={2}
      style={{ textAlign: "center", marginTop: "3rem" }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Grid item xs={12}>
          {header0.map((item) => (
            <Container maxWidth="md">
              <img src={snap} style={{ width: "100px", height: "100px" }} />
              <Typography variant="h5" style={{ color: "#333333" }}>
                <b>{item.title}</b>
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                
              >
                {item.body}

              </Typography>
            </Container>
          ))}
        </Grid>
      )}
    </Grid>
  );
}
export default Header0;
