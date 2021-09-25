import React from "react";
import { Container, Grid, Paper, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InvitationText from "./components/InvitationText";

import image from "./assets/images/save-the-date.jpeg";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container maxWidth="lg" className={classes.container} disableGutters>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          alignContent="center"
          height="100%"
        >
          <Grid
            item
            md={5}
            xs={12}
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            <Paper elevation={12} className={classes.imageContainer}>
              <img src={image} alt="save the date" className={classes.image} />
            </Paper>
          </Grid>
          <Grid item md={5} xs={12}>
            <InvitationText />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

const useStyles = makeStyles<Theme>((theme) => ({
  background: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfbe2",
    padding: theme.spacing(3),
    maxWidth: "100vw",
    [theme.breakpoints.up("md")]: {
      maxHeight: "100vh",
      padding: 0,
      height: "100vh",
    },
  },
  container: {
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfbe2",
  },
  imageContainer: {
    width: "fit-content",
    height: "fit-content",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    objectFit: "contain",
    [theme.breakpoints.up("md")]: {
      maxHeight: "90vh",
    },
  },
}));
