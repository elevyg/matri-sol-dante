import { Link, List, ListItem, Typography } from "@mui/material";

import React, { ReactElement } from "react";

import Dialog from "../atoms/Dialog";

interface Props extends Partial<React.ComponentProps<typeof Dialog>> {
  onClose: () => void;
}

function JewishDanceDialog(props: Props): ReactElement {
  return (
    <Dialog open={props.open} onClose={props.onClose} {...props}>
      <Typography variant="h4">Bailes tradicionales judíos</Typography>
      <Typography variant="body1" mt={2}>
        Para que se vayan familiarizando y calentando motores para nuestro
        matrimonio, les dejo estos links sobre la parte de bailes judíos que
        tendrá el matrimonio para que los revisen y participen con muchas ganas
        ese día:
      </Typography>
      <Typography variant="body1" mt={2}>
        En el matrimonio, entre la entrada y el plato de fondo habrá una tanda
        de "Horas" (se pronuncia Joras), que son bailes con música judía, donde
        hombres bailan a un lado de la pista y las mujeres a otro: ¿Qué se
        hace?:
      </Typography>
      <Typography variant="h6" mt={2}>
        Tutorial de bailes de fiesta de matrimonio judío
      </Typography>
      <List>
        <ListItem
          sx={{ display: "flex", flex: 1, justifyContent: "space-between" }}
        >
          ¿Que se hace?:{" "}
          <Link href="https://vimeo.com/633882819/22efc4d2d4" target="_blank">
            ver aquí
          </Link>
        </ListItem>
        <ListItem
          sx={{ display: "flex", flex: 1, justifyContent: "space-between" }}
        >
          ¿Cual es la música?:
          <Link
            href="https://www.youtube.com/watch?v=xzpugZfoCR0&ab_channel=TheSoulofJewishMusic"
            target="_blank"
          >
            ver aquí
          </Link>
        </ListItem>
        <ListItem
          sx={{ display: "flex", flex: 1, justifyContent: "space-between" }}
        >
          ¿Cómo se ve en realidad?:{" "}
          <Link href="https://vimeo.com/304370312/a4895c4de2" target="_blank">
            ver aquí
          </Link>
        </ListItem>
      </List>
      <Typography variant="caption">
        Gentileza de la familia Calderon-Eguia
      </Typography>
    </Dialog>
  );
}

export default JewishDanceDialog;
