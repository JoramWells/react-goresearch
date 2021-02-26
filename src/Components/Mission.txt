import snap from "../snap.svg";

import React, { useEffect } from "react";
import { Grid, Typography, Link, Paper } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { listMission } from "../actions/header0Actions";

function Mission() {
  const MissionList = useSelector((state) => state.mission);
  const { mission, loading, error } = MissionList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMission());
    return () => {};
  }, []);
  console.log(mission);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Grid container spacing={2}>
          {mission.map((item) => (
        <Grid key={item._id} item xs={4} style={{textAlign:"center"}}>
        <Paper style={{padding:"10px"}}>
        <img src={item.image} style={{width:"200px", height:"200px", margin:"auto", display:"block"}} />

          <Typography variant="h6" style={{color:"#4d4d4d"}}>
          <b>{item.title}</b>

          </Typography>
          <Typography variant="body1" color="textSecondary" >
          {item.body}
          </Typography>
          <a href="#" > <b>learn more</b> </a>
        </Paper>
      </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
export default Mission;
