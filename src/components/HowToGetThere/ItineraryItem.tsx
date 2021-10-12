import { SvgIcon, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface Props {
  children: React.ReactNode;
  eta: string;
  duration: string;
  // eslint-disable-next-line react/require-default-props
  iconProps?: Partial<React.ComponentProps<typeof SvgIcon>>;
}

const ItineraryItem = ({ children, eta, duration, iconProps }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SvgIcon {...iconProps} sx={{ fontSize: 50, ...iconProps?.sx }}>
        {children}
      </SvgIcon>
      <div className={classes.etaContainer}>
        <Typography fontSize="0.8rem">{eta}</Typography>
      </div>
      <Typography mt={1}>{duration}</Typography>
    </div>
  );
};

export default ItineraryItem;

const useStyles = makeStyles<Theme>((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  etaContainer: {
    backgroundColor: theme.palette.grey[300],
    borderRadius: 50,
    width: theme.spacing(5),
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "1.rem",
    marginTop: theme.spacing(1),
  },
}));
