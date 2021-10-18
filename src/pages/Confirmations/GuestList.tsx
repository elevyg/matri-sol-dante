import React from "react";
import { Container, Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridColumns,
  GridValueFormatterParams,
  GridToolbar,
} from "@mui/x-data-grid";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  isLoading: boolean;
}

const Index: React.FC<Props> = ({ data, isLoading }) => (
  <Container maxWidth="xl" sx={{ height: "100vh", maxHeight: "100vh" }}>
    <Box height="90%">
      <DataGrid
        columns={columns}
        rows={data || []}
        loading={isLoading}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  </Container>
);

export default Index;

const columnsConfig: Partial<GridColDef> = {
  resizable: true,
  flex: 1,
  filterable: true,
};

const columns: GridColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
    hide: true,
    ...columnsConfig,
  },
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
