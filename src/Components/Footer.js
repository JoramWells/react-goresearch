import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://goresearch.co.ke/">
        Goresearch.co.ke
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "50vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
        <Grid container style={{backgroundColor:"#007acc", color:"white", padding:"50px"}}>
          <Grid xs={3}>
            <Typography >
              <b>GET IN TOUCH WITH US</b>
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Typography>
              <b>OUR COMPANY</b>
            </Typography>
          </Grid>
          <Grid xs={3} >
            <Typography>
              <b>CONTENT WRITING</b>
            </Typography>
            <Typography>
            <ul>
              <li>Proposals</li>
              <li>Course Work</li>
            </ul>
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Typography>
              <b>SUBSCRIBE</b>
            </Typography>
          </Grid>
        </Grid>
      <footer className={classes.footer} style={{backgroundColor:"#005c99"}}>
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Copyright />

            </Grid>
            <Grid item xs={6}>
              <ul style={{display:"flex", listStyle:"none"}}>
                <li>Contact   </li>  |  
                <li>Terms $ conditions    </li> |  
                <li>Privacy</li>
              </ul>
            </Grid>


          </Grid>

        </Container>
      </footer>
    </div>
  );
}
