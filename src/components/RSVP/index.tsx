import React from "react";
import {
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, useController } from "react-hook-form";
import DatePicker from "@mui/lab/DatePicker";

import { TitleWithIcon } from "../atoms";
import Section from "../atoms/Section";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";

interface Props {}

const RSVP = (props: Props) => {
  const { register, handleSubmit, watch, control } = useForm();
  const onSubmit = (data) => console.log(data);

  const rsvp = useController({ name: "rsvp", control, defaultValue: "" });
  const arrivingDate = useController({
    name: "arriving-date",
    control,
    defaultValue: "",
  });
  const leavingDate = useController({
    name: "leaving-date",
    control,
    defaultValue: "",
  });
  const hasTickets = useController({
    name: "has-tickes",
    control,
    defaultValue: "no",
  });
  const hasHotel = useController({
    name: "has-hotel",
    control,
    defaultValue: "no",
  });

  const groupSize = watch("group-size", 1);

  return (
    <Section>
      <Section.Title>
        <TitleWithIcon title="RSVP">
          <Calendar />
        </TitleWithIcon>
      </Section.Title>
      <Section.Content>
        <Grid container px={2}>
          <Typography fontWeight={700} variant="body1">
            Estamos calculando cuanto vino y cerveza vamos a tomar, es por eso
            que necesitamos que contestes las siguientes preguntas:{" "}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Grid item xs={12} my={2}>
              <TextField
                label="Nombre y apellido"
                id="name-lastName"
                variant="standard"
                fullWidth
                {...register("name-lastName")}
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <FormLabel component="legend" sx={{ marginBottom: 4 }}>
                {`¿Cuantas personas incluye esta respuesta? ${groupSize} ${
                  groupSize > 1 ? "personas" : "persona"
                } `}
              </FormLabel>
              <Slider
                id="group-size"
                min={1}
                max={10}
                step={1}
                valueLabelDisplay="auto"
                {...register("group-size")}
              />
            </Grid>
            <Collapse in={groupSize > 1}>
              <Grid item xs={12} my={2}>
                <FormControl fullWidth>
                  <InputLabel id="group-type-label">
                    Este es un grupo ...
                  </InputLabel>
                  <Select
                    labelId="group-type-label"
                    id="group-type"
                    label="Este es un grupo ..."
                    {...register("group-type")}
                  >
                    <MenuItem value="family">familiar</MenuItem>
                    <MenuItem value="friends">de amig@s</MenuItem>
                    <MenuItem value="couple">de pareja</MenuItem>
                    <MenuItem value="trisome">de trio</MenuItem>
                    <MenuItem value="coworkers">
                      de compañeros de trabajo pero no amigos
                    </MenuItem>
                    <MenuItem value="coworkers">
                      de compañeros de trabajo y amigos
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Collapse>
            <Grid item xs={12} my={2}>
              <FormControl component="fieldset" error={rsvp.fieldState.invalid}>
                <FormLabel component="legend">¿Vienes al matrimonio?</FormLabel>
                <RadioGroup
                  row
                  id="rsvp"
                  value={rsvp.field.value}
                  onChange={rsvp.field.onChange}
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value="maybe"
                    control={<Radio />}
                    label="Aun no lo sé"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Collapse in={rsvp.field.value === "yes"}>
              <Grid item xs={12} my={2}>
                <DatePicker
                  label="Llegada"
                  value={arrivingDate.field.value}
                  onChange={arrivingDate.field.onChange}
                  renderInput={(params) => (
                    <TextField
                      sx={{ marginBottom: 4, width: "100%" }}
                      {...params}
                      error={arrivingDate.fieldState.invalid}
                    />
                  )}
                />
                <DatePicker
                  label="Regreso"
                  value={leavingDate.field.value}
                  onChange={leavingDate.field.onChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      error={leavingDate.fieldState.invalid}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} mt={2}>
                <FormControl
                  component="fieldset"
                  error={hasTickets.fieldState.invalid}
                >
                  <FormLabel component="legend">
                    ¿Ya compraste pasajes?
                  </FormLabel>
                  <RadioGroup
                    row
                    id="has-tickets"
                    value={hasTickets.field.value}
                    onChange={hasTickets.field.onChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} mt={2}>
                <FormControl
                  component="fieldset"
                  error={hasHotel.fieldState.invalid}
                >
                  <FormLabel component="legend">
                    ¿Ya tienes alojamiento?
                  </FormLabel>
                  <RadioGroup
                    row
                    id="has-hotel"
                    value={hasHotel.field.value}
                    onChange={hasHotel.field.onChange}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Collapse in={hasHotel.field.value === "yes"}>
                <Grid item xs={12}>
                  <TextField
                    label="¿Donde?"
                    id="hotel-name"
                    fullWidth
                    {...register("hotel-name")}
                  />
                </Grid>
              </Collapse>
            </Collapse>
            <Grid item xs={12}>
              <Button type="submit" size="large">
                Enviar
              </Button>
            </Grid>
          </form>
        </Grid>
      </Section.Content>
    </Section>
  );
};

export default RSVP;
