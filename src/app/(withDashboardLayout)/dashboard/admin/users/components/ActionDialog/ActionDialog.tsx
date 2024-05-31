import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Button, DialogActions } from "@mui/material";

const roles = ["SUPER_ADMIN", "ADMIN"];
const status = ["ACTIVE", "BLOCKED"];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  setUserStatus: React.Dispatch<
    React.SetStateAction<{
      status?: string | undefined;
      role?: string | undefined;
    }>
  >;
  handleChangeStatus: () => Promise<void>;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open, setUserStatus, handleChangeStatus } =
    props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth={"xs"} fullWidth>
      <DialogTitle>Set Role</DialogTitle>
      <List sx={{ pt: 0 }}>
        {roles?.map((role) => (
          <ListItem disableGutters key={role}>
            <ListItemButton onClick={(prev) => setUserStatus({ role: role })}>
              <ListItemText primary={role} />
            </ListItemButton>
          </ListItem>
        ))}
        <DialogTitle>Set Status</DialogTitle>
        {status?.map((status) => (
          <ListItem disableGutters key={status}>
            <ListItemButton
              autoFocus
              //   onClick={() => handleListItemClick("addAccount")}
              onClick={(prev) => setUserStatus({ status: status })}
            >
              <ListItemText primary={status} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <DialogActions>
        <Button color="error" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button
          color="success"
          onClick={() => {
            handleChangeStatus(), handleClose();
          }}
        >
          Save changes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
//
interface IDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClickOpen: (id: string) => void;
  setUserStatus: React.Dispatch<
    React.SetStateAction<{
      status?: string | undefined;
      role?: string | undefined;
    }>
  >;
  handleChangeStatus: () => Promise<void>;
}
export default function SimpleDialogDemo({
  open,
  setOpen,
  setUserStatus,
  handleChangeStatus,
}: IDialogProps) {
  const [selectedValue, setSelectedValue] = React.useState(roles[1]);

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />

      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        setUserStatus={setUserStatus}
        handleChangeStatus={handleChangeStatus}
      />
    </div>
  );
}
