import React from "react";
import { Theme, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Title />
      <Box display="flex" justifyContent="center" alignItems="stretch">
        <img
          src="https://i.postimg.cc/HLSJDYcp/cami-eyal-apidame.jpg"
          alt="main"
          height="50%"
          width="100%"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <SubTitle />
    </Box>
  );
};

export default Hero;

const Title = () => {
  const classes = useStyles();
  return (
    <Box marginBottom={4}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={3}
      >
        <h1 className={classes.mainTitleLeft}>SAVE</h1>
        <Box
          border="thick"
          borderBottom={1}
          borderTop={1}
          display="flex"
          justifyContent="center"
        >
          <h1 className={classes.middleTitle}>THE</h1>
        </Box>
        <h1 className={classes.mainTitleRight}>WEEK</h1>
      </Box>
      <Box>
        <Typography
          fontFamily="sans-serif"
          fontWeight={100}
          letterSpacing={3}
          fontSize={20}
          textAlign="center"
        >
          SOL & DANTE
        </Typography>
      </Box>
    </Box>
  );
};

const SubTitle = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginTop={4}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Box
          className={classes.centered}
          border="thick"
          borderRight={1}
          padding={4}
        >
          <Typography fontWeight={700} fontSize={30} lineHeight={0}>
            4
          </Typography>
        </Box>
        <Box padding={4}>
          <Typography fontWeight={700} fontSize={30} lineHeight={0}>
            FEBRERO
          </Typography>
        </Box>
        <Box
          className={classes.centered}
          border="thick"
          borderLeft={1}
          padding={4}
        >
          <Typography fontWeight={700} fontSize={30} lineHeight={0}>
            2023
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          fontFamily="sans-serif"
          fontWeight={100}
          letterSpacing={3}
          fontSize={15}
          textAlign="center"
        >
          CHILE CHICO, AYSÉN
        </Typography>
        <Typography
          fontFamily="sans-serif"
          fontWeight={100}
          letterSpacing={3}
          fontSize={15}
          textAlign="center"
        >
          - PATAGONIA -
        </Typography>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  mainTitleLeft: {
    fontSize: "3em",
    fontWeight: 400,
    lineHeight: 0,
    marginRight: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "4em",
    },
  },
  mainTitleRight: {
    fontSize: "3em",
    fontWeight: 400,
    marginLeft: "1rem",
    lineHeight: 0,
    [theme.breakpoints.up("md")]: {
      fontSize: "4em",
    },
  },
  middleTitle: {
    fontSize: "1.3em",
    fontWeight: 400,
    lineHeight: 0,
    [theme.breakpoints.up("md")]: {
      fontSize: "2em",
    },
  },
}));
