import { Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles<Theme>((theme) => ({
  color: { color: "#243140" },
}));

const InvitationText = () => {
  const classes = useStyles();
  return (
    <div className={classes.color}>
      <Typography variant="h3" mt={4}>
        Queridos queridos,
      </Typography>
      <Typography variant="body1" mt={2}>
        Les escribimos porque nos casamos el 8 de enero en Chile Chico, y
        patudamente se nos ocurrió la genial idea de invitarlos al sur del sur.
      </Typography>
      <Typography variant="body1" mt={2}>
        Va a ser una linda comida y un carrete modesto pero bueno. El clima
        puede que esté impecable o se nos caiga el cielo encima.
      </Typography>
      <Typography variant="body1" mt={2}>
        Puede que la barcaza no funcione y tengan que darse la vuelta al lago
        por uno de los escenarios naturales más espectaculares de la tierra, de
        6 horas por lo menos. Sabemos que nos casamos lejos y aun así nos
        gustaría tenerlos cerca. Sería un honor mostrarles Chile Chico a nuestra
        manera.
      </Typography>
      <Typography variant="body1" mt={2}>
        Vamos a intentar hacerlo lo mas fácil posible para ustedes, pueden
        acampar, arrendar cabañas o los ayudamos a buscar lugares que les
        acomoden. Si les complica venir, lo entendemos de corazón. ¡A nosotros
        el viaje nos dejó cansados por una semana, (el Loa sigue cansado)!.
      </Typography>
      <Typography variant="body1" mt={2}>
        Están invitados porque forman parte de nuestras vidas. Por vivir lejos
        eso no va a cambiar. Esta es solo una de las oportunidades para vernos.
      </Typography>
      <Typography variant="body1" mt={2}>
        ¡Estamos muy felices de casarnos!, y disfrutando desde ya planificar
        esta celebración. Los queremos queremos.
      </Typography>
      <Typography variant="h6" mt={2}>
        Cami y Eyal.
      </Typography>
    </div>
  );
};

export default InvitationText;
