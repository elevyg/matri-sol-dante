import React from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Collapse,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import { useForm, useController, useWatch } from "react-hook-form";
import DatePicker from "@mui/lab/DatePicker";
import { useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

import { TitleWithIcon } from "../atoms";
import Section from "../atoms/Section";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { addRSVP } from "../../actions/rsvp";
import { RsvpValidation } from "../../utils/rsvpValidation";

const RSVP = () => {
  const { width, height } = useWindowSize();
  const { mutate, isLoading, isSuccess, isError } = useMutation(addRSVP);
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(RsvpValidation),
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  const rsvp = useController({ name: "rsvp", control, defaultValue: "" });

  const nameLastName = useController({
    name: "name-lastName",
    control,
    defaultValue: "",
  });
  const groupType = useController({
    name: "group-type",
    control,
    defaultValue: "",
  });
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
    name: "has-tickets",
    control,
    defaultValue: false,
  });
  const hasHotel = useController({
    name: "has-hotel",
    control,
    defaultValue: false,
  });
  const hotelName = useController({
    name: "hotel-name",
    control,
    defaultValue: "",
  });

  const groupSize = useWatch({ control, name: "group-size", defaultValue: 1 });

  return (
    <Section>
      {rsvp.field.value === "yes" && (
        <Confetti
          width={width}
          height={height * 2}
          numberOfPieces={1000}
          tweenDuration={2000}
          recycle={false}
          initialVelocityY={20}
        />
      )}
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
                value={nameLastName.field.value}
                onChange={nameLastName.field.onChange}
                error={nameLastName.fieldState.invalid}
                helperText={nameLastName.fieldState.error?.message}
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
                <FormControl fullWidth error={groupType.fieldState.invalid}>
                  <InputLabel id="group-type-label">
                    Este es un grupo ...
                  </InputLabel>
                  <Select
                    labelId="group-type-label"
                    id="group-type"
                    label="Este es un grupo ..."
                    value={groupType.field.value}
                    onChange={groupType.field.onChange}
                  >
                    <MenuItem value={undefined}> </MenuItem>
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
                  <FormHelperText>
                    {groupType.fieldState.error?.message}
                  </FormHelperText>
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
                <FormHelperText>
                  {rsvp.fieldState.error?.message}
                </FormHelperText>
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
                      helperText={arrivingDate.fieldState.error?.message}
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
                      helperText={leavingDate.fieldState.error?.message}
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
                      value={true}
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value={false}
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
                      value={true}
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value={false}
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Collapse in={hasHotel.field.value === "true"}>
                <Grid item xs={12}>
                  <TextField
                    label="¿Donde?"
                    id="hotel-name"
                    fullWidth
                    value={hotelName.field.value}
                    onChange={hotelName.field.onChange}
                    error={hotelName.fieldState.invalid}
                    helperText={hotelName.fieldState.error?.message}
                  />
                </Grid>
              </Collapse>
            </Collapse>
            <Grid item xs={12}>
              <Button type="submit" size="large">
                {isLoading ? <CircularProgress size="1rem" /> : "Enviar"}
              </Button>
            </Grid>
          </form>
        </Grid>
        <Collapse in={isSuccess}>
          <Alert severity="success" sx={{ marginY: 2 }}>
            Información guardada exitosamente
          </Alert>
        </Collapse>
        <Collapse in={isError}>
          <Alert severity="error" sx={{ marginY: 2 }}>
            Información guardada exitosamente Hubo un error, intenta de nuevo
          </Alert>
        </Collapse>
      </Section.Content>
    </Section>
  );
};

export default RSVP;
