import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useQuery } from "react-query";
import { readRSVP } from "../../actions/rsvp";

import GuestList from "./GuestList";
import Metrics from "./Metrics";

const Index = () => {
  const [value, setValue] = useState("1");
  const { data, isLoading } = useQuery("guests", readRSVP);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Métricas" value="1" />
            <Tab label="Lista de invitados" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Metrics data={data} isLoading={isLoading} />
        </TabPanel>
        <TabPanel value="2">
          <GuestList data={data} isLoading={isLoading} />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Index;
