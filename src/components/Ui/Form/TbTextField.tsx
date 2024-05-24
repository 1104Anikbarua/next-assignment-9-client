import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
// text field props
interface ITextFieldProps {
  name: string;
  type?: string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  placeholder?: string;
  label?: string;
  disabled?: boolean;
}
const TbTextField = ({
  name,
  type = "text",
  fullWidth,
  size = "small",
  placeholder,
  label,
  disabled = false,
}: ITextFieldProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <TextField
            id={name}
            {...field}
            label={label}
            placeholder={placeholder}
            type={type}
            fullWidth={fullWidth}
            size={size}
            error={!!error?.message}
            disabled={disabled}
            helperText={error?.message}
          />
        );
      }}
    />
  );
};

export default TbTextField;
