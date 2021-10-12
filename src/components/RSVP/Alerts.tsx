import React from "react";
import { Alert, Collapse } from "@mui/material";

interface Props {
  success: boolean;
  error: boolean;
}

const Alerts = ({ success, error }: Props) => (
  <div>
    <Collapse in={success}>
      <Alert severity="success" sx={{ marginY: 2 }}>
        Información guardada exitosamente
      </Alert>
    </Collapse>
    <Collapse in={error}>
      <Alert severity="error" sx={{ marginY: 2 }}>
        Código incorrecto, intenta de nuevo
      </Alert>
    </Collapse>
  </div>
);

export default Alerts;
