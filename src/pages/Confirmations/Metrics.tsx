import React, { useMemo } from "react";
import { CircularProgress, Divider, Typography, Box } from "@mui/material";

import { Rsvp } from "../../models/Forms";

const coming = (d) => d.rsvp === "yes";

interface Props {
  data: Rsvp[];
  isLoading: boolean;
}
const Metrics = ({ data, isLoading }: Props) => {
  const total = useMemo(() => data?.length, [data]);
  const yes = useMemo(() => data?.filter(coming).length, [data]);

  const totalPeople = useMemo(() => {
    if (!isLoading) {
      const sum = [];
      data?.filter(coming).forEach((d) => sum.push(d["group-size"]));
      return sum?.reduce((p, n) => p + n);
    }
    return null;
  }, [data, isLoading]);

  if (data)
    return (
      <div>
        <Typography variant="h3">Confirmaciones / Total </Typography>
        <Typography
          variant="h4"
          color="secondary"
        >{`${yes} / ${total} `}</Typography>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h3">Total de invitados </Typography>
        <Typography
          variant="h4"
          color="secondary"
        >{`${totalPeople} `}</Typography>
      </div>
    );
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress size="5rem" />
    </Box>
  );
};

export default Metrics;
