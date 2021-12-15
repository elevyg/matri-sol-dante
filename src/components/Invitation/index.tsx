import React, { useState } from "react";
import {
  ButtonBase,
  Container,
  Grid,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import InvitationText from "./InvitationText";
import Dialog from "../atoms/Dialog";

function Invitation() {
  const classes = useStyles();
  const [readMore, setReadMore] = useState(false);
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up("md"));
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
              <img
                src="https://lacamiyeyalsecasan.s3.us-west-2.amazonaws.com/save-the-date.jpeg"
                alt="save the date"
                className={classes.image}
              />
            </Paper>
          </Grid>

          {isDesktop ? (
            <Grid item md={5} xs={12}>
              <InvitationText />
            </Grid>
          ) : (
            <Grid item md={5} xs={12} display="flex" justifyContent="center">
              <ButtonBase onClick={() => setReadMore(true)}>
                <Typography
                  className={classes.readMoreButton}
                  fontSize="2rem"
                  color="gray"
                  mt={1}
                >
                  Lee nuestra invitacion
                </Typography>
              </ButtonBase>
              <Dialog open={readMore} onClose={() => setReadMore(false)}>
                <InvitationText />
              </Dialog>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Invitation;

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
  dialog: { backgroundColor: "#fdfbe2" },
  readMoreButton: {
    textDecoration: "underline",
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
  },
}));
