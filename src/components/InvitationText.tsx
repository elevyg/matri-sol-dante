import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles<Theme>((theme) => ({
  title: { color: "#243140" },
  paragraph: {
    lineHeight: 1.5,
    color: "#243140",
  },
  pd: { fontWeight: "bold", color: theme.palette.grey[500] },
}));

const InvitationText = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.title}>Queridos queridos,</h1>
      <p className={classes.paragraph}>
        Les escribimos porque nos casamos el 8 de enero en Chile Chico, y
        patudamente se nos ocurrió la genial idea de invitarlos al sur del sur.
      </p>
      <p className={classes.paragraph}>
        Va a ser una linda comida y un carrete modesto pero bueno. El clima
        puede que esté impecable o se nos caiga el cielo encima.
      </p>
      <p className={classes.paragraph}>
        Puede que la barcaza no funcione y tengan que darse la vuelta al lago
        por uno de los escenarios naturales más espectaculares de la tierra, de
        6 horas por lo menos. Sabemos que nos casamos lejos y aun así nos
        gustaría tenerlos cerca. Sería un honor mostrarles Chile Chico a nuestra
        manera.
      </p>
      <p className={classes.paragraph}>
        Vamos a intentar hacerlo lo mas fácil posible para ustedes, pueden
        acampar, arrendar cabañas o los ayudamos a buscar lugares que les
        acomoden. Si les complica venir, lo entendemos de corazón. ¡A nosotros
        el viaje nos dejó cansados por una semana, (el Loa sigue cansado)!.
      </p>
      <p className={classes.paragraph}>
        Están invitados porque forman parte de nuestras vidas. Por vivir lejos
        eso no va a cambiar. Esta es solo una de las oportunidades para vernos.
        ¡Estamos muy felices de casarnos!, y disfrutando desde ya planificar
        esta celebración. Los queremos queremos.
      </p>
      <p>Cami y Eyal.</p>
      <p className={classes.pd}>
        PD: Pronto les daremos más información en esta misma página.
      </p>
    </div>
  );
};

export default InvitationText;
