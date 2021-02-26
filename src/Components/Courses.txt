import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import Container  from "@material-ui/core/Container";

import Footer from "./Footer";
import Mission from "./Mission";
import Solution from "./Solution";

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

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function Courses() {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Card elevation={0}>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "60px",
            backgroundColor: "#007acc",
            height: "450px",
            padding: "50px",
            color: "white",
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h4">
              <b>
                All Course Work <br /> Available
              </b>
            </Typography>
            <Typography variant="h6">
              <ul>
                <li>Assignments</li>
                <li>Courseworks</li>
                <li>Business proposals</li>
              </ul>
            </Typography>
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="primary" size="large">
                {" "}
                <b style={{ color: "white", fontSize: "1rem" }}>
                  Sign up free
                </b>{" "}
              </Button>
            </ThemeProvider>
          </Grid>
          <Grid item xs={6}>
            <img
              src="https://www.seobility.net/images/homepage/start_screen.png"
              alt="goresearch logo"
            />
          </Grid>
        </Grid>
      </Card>
      <Grid style={{ margin: "50px" }}>
        <Typography
          variant="h4"
          style={{ color: "#4d4d4d", textAlign: "center" }}
        >
          Project proposals, Assignments, Coursework
        </Typography>
        <Typography
          style={{ textAlign: "center" }}
          variant="h6"
          color="textSecondary"
        >
          Complete all your paper work with GoResearch
        </Typography>
        <Container maxWidth="xs">
          <hr />
        </Container>
      </Grid>

      <Container>
        <Mission />
      </Container>
      <Container
        maxWidth="lg"
        style={{
          padding: "50px",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >

        <Grid style={{marginBottom:"50px"}} >
        <Typography
          variant="h4"
          style={{ color: "#4d4d4d", textAlign: "center" }}
        >
          Affordable, Reliable and Fast
        </Typography>
        <Typography
          style={{ textAlign: "center" }}
          variant="h6"
          color="textSecondary"
        >
          job opportunities
        </Typography>
        <Container maxWidth="xs">
          <hr />
        </Container>
        </Grid>

        <Solution />
      </Container>
      <Container>
<Grid style={{marginBottom:"50px"}} >
<Typography
          variant="h4"
          style={{ color: "#4d4d4d", textAlign: "center" }}
        >
          Available Courses
        </Typography>
        <Typography
          style={{ textAlign: "center" }}
          variant="h6"
          color="textSecondary"
        >
         We offer solution for
        </Typography>
        <Container maxWidth="xs">
          <hr />
        </Container>
</Grid>

        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Typography variant="body1">
              <ul>
                <li>Agricultural Economy</li>
                <li>Applied Biology</li>
                <li>Analytical Chemistry</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              <ul>
                <li>Pure $ Applied Sciences</li>
                <li>Economics and Statistics</li>
                <li>Public Health</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              <ul>
                <li>Computer Science</li>
                <li>Electrical Engineering</li>
                <li>Mechanical Engineering</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>
              <ul>
                <li>Pure $ Applied Sciences</li>
                <li>Economics and Statistics</li>
                <li>Public Health</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
