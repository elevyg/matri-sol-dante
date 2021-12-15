import { Button, CircularProgress, Grid, TextField } from "@mui/material";

import React, { ReactElement, useMemo } from "react";
import { useMutation } from "react-query";
import { useController, useForm } from "react-hook-form";
import { addRestriction } from "../../actions/rsvp";

import Dialog from "../atoms/Dialog";

interface Props extends Partial<React.ComponentProps<typeof Dialog>> {
  onClose: () => void;
}

function FoodRestrictionDialog(props: Props): ReactElement {
  const { control, handleSubmit, reset } = useForm();
  const {
    mutate,
    isLoading,
    isSuccess,
    isError,
    reset: resetSubmit,
  } = useMutation(addRestriction);
  const nameLastName = useController({
    name: "name-lastName",
    control,
    defaultValue: "",
  });
  const restriction = useController({
    name: "restriction",
    control,
    defaultValue: "",
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data);
  });

  const color = useMemo(() => {
    if (isSuccess) return "success";
    if (isError) return "error";
    return "primary";
  }, [isError, isSuccess]);

  return (
    <Dialog open={props.open} onClose={props.onClose} {...props}>
      <form onSubmit={onSubmit}>
        <Grid container spacing={4} display="flex" alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              label="Nombre y apellido"
              id="name-lastName"
              variant="standard"
              fullWidth
              required
              value={nameLastName.field.value}
              onChange={nameLastName.field.onChange}
              error={nameLastName.fieldState.invalid}
              helperText={nameLastName.fieldState.error?.message}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Restricción alimentaria"
              id="restriction"
              variant="standard"
              fullWidth
              required
              value={restriction.field.value}
              onChange={restriction.field.onChange}
              error={restriction.fieldState.invalid}
              helperText={restriction.fieldState.error?.message}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button type="submit" variant="contained" color={color}>
              {isLoading ? (
                <CircularProgress color="inherit" sx={{ color: "#fff" }} />
              ) : (
                "Enviar"
              )}
            </Button>

            {isSuccess && (
              <Button
                onClick={() => {
                  reset({ "name-lastName": "", restriction: "" });
                  resetSubmit();
                }}
              >
                Enviar Otro
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
}

export default FoodRestrictionDialog;
