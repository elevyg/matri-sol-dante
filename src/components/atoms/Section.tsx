/* eslint-disable react/require-default-props */
import { Container, Grid } from "@mui/material";
import React from "react";

interface Props {
  GridProps?: React.ComponentProps<typeof Grid>;
  ContainerProps?: React.ComponentProps<typeof Container>;
  children: React.ReactNode;
}

const Section = (props: Props) => (
  <Container
    sx={{ marginTop: 4, ...props?.ContainerProps?.sx }}
    {...props.ContainerProps}
  >
    <Grid container {...props.GridProps}>
      {props.children}
    </Grid>
  </Container>
);

type TitleProps = React.ComponentProps<typeof Grid>;

const Title = (props: TitleProps) => (
  <Grid
    item
    xs={12}
    md={6}
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    {props.children}
  </Grid>
);

type ContentProps = React.ComponentProps<typeof Grid>;

const Content = (props: ContentProps) => (
  <Grid
    item
    xs={12}
    md={6}
    justifyContent="center"
    alignItems="center"
    {...props}
  >
    {props.children}
  </Grid>
);

Section.Title = Title;
Section.Content = Content;

export default Section;
