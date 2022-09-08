/* eslint-disable react/require-default-props */
import React, { useMemo } from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import classnames from "classnames";

interface Props {
  mdRotation?: "left" | "right" | "none";
  alt: string;
  src: string;
  className?: string;
}

const Image = ({ mdRotation = "none", alt, src, className }: Props) => {
  const transform = useMemo(() => {
    switch (mdRotation) {
      case "right":
        return "rotate(2.5deg)";
      case "left":
        return "rotate(-2.5deg)";
      default:
        return undefined;
    }
  }, [mdRotation]);
  const classes = useStyles({ transform });

  return (
    <div className={classnames(classes.imageContainer, className)}>
      <img src={src} alt={alt} className={classes.image} />
    </div>
  );
};

export default Image;

const useStyles = makeStyles<Theme, { transform: string }>((theme) => ({
  imageContainer: {
    display: "flex",
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      width: "50vw",
      transform: (props) => props.transform,
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(4),
    },
  },
}));
