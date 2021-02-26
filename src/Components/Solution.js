import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography, Paper, ButtonBase, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { listSolution } from "../actions/header0Actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function Solution() {
  const classes = useStyles();
  const SolutionList = useSelector((state) => state.solution);
  const { solution, loading, error } = SolutionList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listSolution());
    return () => {};
  }, []);
  console.log(solution);

  return (
    <>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Grid container spacing={2}>
            {solution.map((item) => (
              <Grid key={item._id} item xs={6}>
                <Paper className={classes.paper} elevation={3}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase className={classes.image}>
                        <img
                          className={classes.img}
                          alt="complex"
                          src={item.image}
                          style={{ width: "70px", height: "70px" }}
                        />
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="h6"
                            style={{ color: "#4d4d4d" }}
                          >
                            <b>{item.title}</b>
                          </Typography>
                          <Typography
                            variant="body1"
                            color="textSecondary"
                            gutterBottom
                          >
                            {item.body} <br />
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
}

export default Solution;
