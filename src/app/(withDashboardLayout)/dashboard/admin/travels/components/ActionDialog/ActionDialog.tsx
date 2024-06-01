import { GridRowId } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import React from "react";

const ActionDialog = ({
  open,
  onClose,
  handleDeleteConfirm,
  handleEditConfirm,
}: {
  open: boolean;
  onClose: () => void;
  handleDeleteConfirm: () => Promise<void>;
  handleEditConfirm: () => void;
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Choose actions?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleEditConfirm()} color="success">
          Edit
        </Button>
        <Button
          onClick={() => {
            handleDeleteConfirm();
          }}
          color="error"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ActionDialog;
