import React from "react";
import {
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
} from "@mui/material";
import DatePicker from "@mui/lab/DatePicker";
import { useController, useFormContext } from "react-hook-form";

interface Props {
  loading: boolean;
}

const Form = ({ loading }: Props) => {
  const { control, formState } = useFormContext();
  const rsvp = useController({ name: "rsvp", control, defaultValue: "" });

  const nameLastName = useController({
    name: "name-lastName",
    control,
    defaultValue: "",
  });
  const groupSize = useController({
    name: "group-size",
    control,
    defaultValue: 1,
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
  const code = useController({
    name: "code",
    control,
    defaultValue: "",
  });

  return (
    <div>
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
        <FormLabel component="legend" sx={{ marginBottom: 3 }}>
          ¿Cuantas personas incluye esta respuesta? <br />
          <strong>
            {" "}
            {`${groupSize.field.value} ${
              groupSize.field.value > 1 ? "personas" : "persona"
            } `}
          </strong>
        </FormLabel>
        <Slider
          id="group-size"
          min={1}
          max={10}
          step={1}
          valueLabelDisplay="auto"
          value={groupSize.field.value}
          onChange={groupSize.field.onChange}
        />
      </Grid>
      <Grid item xs={12} my={2}>
        <FormControl fullWidth error={groupType.fieldState.invalid}>
          <InputLabel id="group-type-label">Este es un grupo ...</InputLabel>
          <Select
            labelId="group-type-label"
            id="group-type"
            label="Este es un grupo ..."
            value={groupType.field.value}
            onChange={groupType.field.onChange}
          >
            <MenuItem value={undefined}> </MenuItem>
            <MenuItem value="chile-chico">de Chile Chico</MenuItem>
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
          <FormHelperText>{groupType.fieldState.error?.message}</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item xs={12} my={2}>
        <FormControl component="fieldset" error={rsvp.fieldState.invalid}>
          <FormLabel component="legend">¿Vienes al matrimonio?</FormLabel>
          <RadioGroup
            row
            id="rsvp"
            value={rsvp.field.value}
            onChange={rsvp.field.onChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Si" />
            <FormControlLabel
              value="maybe"
              control={<Radio />}
              label="Aun no lo sé"
            />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          <FormHelperText>{rsvp.fieldState.error?.message}</FormHelperText>
        </FormControl>
      </Grid>
      <Collapse
        in={
          rsvp.field.value === "yes" && groupType.field.value !== "chile-chico"
        }
      >
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
            <FormLabel component="legend">¿Ya compraste pasajes?</FormLabel>
            <RadioGroup
              row
              id="has-tickets"
              value={hasTickets.field.value}
              onChange={hasTickets.field.onChange}
            >
              <FormControlLabel value={true} control={<Radio />} label="Si" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} mt={2}>
          <FormControl component="fieldset" error={hasHotel.fieldState.invalid}>
            <FormLabel component="legend">¿Ya tienes alojamiento?</FormLabel>
            <RadioGroup
              row
              id="has-hotel"
              value={hasHotel.field.value}
              onChange={hasHotel.field.onChange}
            >
              <FormControlLabel value={true} control={<Radio />} label="Si" />
              <FormControlLabel value={false} control={<Radio />} label="No" />
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
      <Collapse in={formState.isDirty}>
        <Grid item xs={12} mt={2}>
          <TextField
            label="Código secreto"
            id="code"
            fullWidth
            value={code.field.value}
            onChange={code.field.onChange}
            error={code.fieldState.invalid}
            helperText="Obligatorio"
            required
          />
        </Grid>
      </Collapse>
      <Grid item xs={12} mt={2}>
        <Button type="submit" size="large">
          {loading ? <CircularProgress size="1rem" /> : "Enviar"}
        </Button>
      </Grid>
    </div>
  );
};

export default Form;
