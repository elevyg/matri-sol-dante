import React from "react";
import { Container, Grid, Paper, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InvitationText from "./components/InvitationText";

import image from "./assets/images/save-the-date.jpeg";

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid
        container
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item md={5} xs={12}>
          <Paper elevation={12}>
            <img src={image} alt="save the date" className={classes.image} />
          </Paper>
        </Grid>
        <Grid item md={5} xs={12}>
          <InvitationText />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: "flex",
    flex: 1,
    width: "100vw",
    alignItems: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
  image: { maxHeight: "80vh", width: "100%", objectFit: "contain" },
}));
