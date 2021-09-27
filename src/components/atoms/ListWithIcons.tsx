import { Grid, SvgIcon, Typography } from "@mui/material";
import React from "react";

interface Props extends React.ComponentProps<typeof Grid> {
  children: React.ReactNode;
}

export const ListWithIcons = (props: Props) => (
  <Grid container {...props}>
    {props.children}
  </Grid>
);

interface ItemProps extends React.ComponentProps<typeof Grid> {
  children: React.ReactNode;
}
const Item = (props: ItemProps) => (
  <Grid item display="flex" xs={12} alignItems="center" mt={2} {...props}>
    {props.children}
  </Grid>
);

interface IconProps extends React.ComponentProps<typeof SvgIcon> {
  children: React.ReactNode;
}

const Icon = (props: IconProps) => (
  <SvgIcon sx={{ fontSize: 50, marginRight: 2 }} {...props}>
    {props.children}
  </SvgIcon>
);

interface TextProps extends React.ComponentProps<typeof Typography> {
  children: React.ReactNode;
}

const Text = (props: TextProps) => (
  <Typography variant="body1" {...props}>
    {props.children}
  </Typography>
);

ListWithIcons.Item = Item;
ListWithIcons.Icon = Icon;
ListWithIcons.Text = Text;
