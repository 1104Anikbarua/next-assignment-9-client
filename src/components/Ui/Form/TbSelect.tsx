import { MenuItem, SxProps, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

// interface
interface ISelectProps {
  name: string;
  sx?: SxProps;
  fullWidth?: boolean;
  required?: boolean;
  type?: string;
  helperText?: string;
  size?: "small" | "medium";
  label?: string;
  items: string[];
}

const TbSelect = ({
  name,
  sx,
  fullWidth,
  size = "small",
  helperText,
  required,
  type,
  label,
  items,
}: ISelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          required={required}
          name={name}
          label={label}
          fullWidth={fullWidth}
          size={size}
          select
          helperText={errors[name] ? (errors[name]?.message as string) : ""}
          error={errors[name] !== undefined}
          SelectProps={{
            sx: { textAlign: "left" },
          }}
        >
          {items?.map((option: string) => (
            <MenuItem key={option} value={option}>
              {option.toUpperCase()}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default TbSelect;
