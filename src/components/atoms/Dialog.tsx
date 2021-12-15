import React from "react";
import { IconButton, Theme, Dialog as MUIDialog } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

interface Props extends React.ComponentProps<typeof MUIDialog> {
  onClose: () => void;
}

const Dialog: React.FC<Props> = ({ onClose, ...props }) => {
  const classes = useStyles();
  return (
    <MUIDialog {...props} classes={{ paper: classes.dialog, ...props.classes }}>
      <IconButton
        aria-label="close"
        classes={{ root: classes.closeButton }}
        onClick={onClose}
        sx={{ position: "absolute" }}
      >
        <CloseIcon />
      </IconButton>
      {props.children}
    </MUIDialog>
  );
};

export default Dialog;

const useStyles = makeStyles<Theme>((theme) => ({
  dialog: {
    padding: theme.spacing(3),
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 10,
    margin: theme.spacing(2, 2, 0, 0),
  },
}));
