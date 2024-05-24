import React from "react";
import { Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { SxProps } from "@mui/material";
// interface
interface IDatePickerProps {
  name: string;
  fullWidth?: boolean;
  label?: string;
  sx?: SxProps;
  disablePast?: boolean;
  size?: "small" | "medium";
  required?: boolean;
}
const TbDatePicker = ({
  name,
  fullWidth,
  label,
  sx,
  required,
  disablePast = true,
  size = "small",
}: IDatePickerProps) => {
  return (
    <Controller
      name={name}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field: { onChange, value, ...field } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            timezone="system"
            sx={{ ...sx }}
            disablePast={disablePast}
            {...field}
            label={label}
            onChange={(date) => onChange(date)}
            value={value || Date.now()}
            slotProps={{
              textField: {
                required,
                size,
                variant: "outlined",
                sx: { ...sx },
                fullWidth,
              },
            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default TbDatePicker;
