import { Grid, SvgIcon, Typography } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const TitleWithIcon = ({ children, title }: Props) => (
  <Grid container>
    <Grid item xs={12} justifyContent="center" display="flex">
      <SvgIcon sx={{ fontSize: 40 }}>{children}</SvgIcon>
    </Grid>
    <Grid item xs={12} justifyContent="center" display="flex">
      <Typography variant="h4">{title}</Typography>
    </Grid>
  </Grid>
);
export default TitleWithIcon;
