import React from "react";
import { Container, Typography, Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumns,
  GridToolbarContainer,
  GridToolbarExport,
  GridValueFormatterParams,
} from "@mui/x-data-grid";
import { useQuery } from "react-query";

import { readRSVP } from "../../actions/rsvp";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const Index: React.FC = () => {
  const { data, isLoading } = useQuery("guests", readRSVP);

  return (
    <Container maxWidth="xl" sx={{ height: "100vh", maxHeight: "100vh" }}>
      <Typography variant="h3">Lista de invitados</Typography>
      <Box height="90%">
        <DataGrid
          columns={columns}
          rows={data || []}
          loading={isLoading}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </Box>
    </Container>
  );
};

export default Index;

const columnsConfig: Partial<GridColDef> = {
  resizable: true,
  flex: 1,
  filterable: true,
};

const columns: GridColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name-lastName",
    headerName: "Nombre y Apellido",
    width: 150,
    ...columnsConfig,
  },
  {
    field: "group-type",
    headerName: "Tipo de grupo",
    width: 150,
    ...columnsConfig,
  },
  {
    field: "group-size",
    headerName: "Tamaño grupo",
    type: "number",
    width: 110,
    ...columnsConfig,
  },
  {
    field: "rsvp",
    headerName: "RSVP",
    type: "string",
    width: 110,
    ...columnsConfig,
  },
  {
    field: "has-hotel",
    headerName: "Tiene hotel",
    type: "boolean",
    width: 110,
    ...columnsConfig,
  },
  {
    field: "hotel-name",
    headerName: "Nombre hotel",
    type: "string",
    width: 110,
    ...columnsConfig,
  },
  {
    field: "has-tickets",
    headerName: "Tiene pasajes",
    type: "boolean",
    width: 110,
    ...columnsConfig,
  },
  {
    field: "arriving-date",
    headerName: "Fecha llegada",
    type: "date",
    width: 110,
    ...columnsConfig,
    valueFormatter: (params: GridValueFormatterParams) => {
      const p = params.value as { seconds: number; nanoseconds: number };
      const date = new Date(p.seconds * 1000 + p.nanoseconds / 1000000);

      return date.toLocaleDateString("es-ES");
    },
  },
  {
    field: "leaving-date",
    headerName: "Fecha regreso",
    type: "date",
    width: 110,
    ...columnsConfig,
    valueFormatter: (params: GridValueFormatterParams) => {
      const p = params.value as { seconds: number; nanoseconds: number };
      const date = new Date(p.seconds * 1000 + p.nanoseconds / 1000000);

      return date.toLocaleDateString("es-ES");
    },
  },
];
