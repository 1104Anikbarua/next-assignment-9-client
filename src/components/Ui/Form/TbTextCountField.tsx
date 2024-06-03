import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect } from "react";
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
  multiline?: boolean;
  setCount: React.Dispatch<React.SetStateAction<string>>;
  count: string;
  totalWord: number;
}
const TbTextCountField = ({
  name,
  type = "text",
  fullWidth,
  size = "small",
  placeholder,
  label,
  disabled = false,
  multiline = false,
  setCount,
  count,
  totalWord,
}: ITextFieldProps) => {
  useEffect(() => {
    const remainingChars = 150 - count?.length;
    if (remainingChars < 0) {
      setCount(count?.slice(0, 150));
    }
  }, [count, setCount]);
  return (
    <Controller
      name={name}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => {
        return (
          <TextField
            // onChange={(e) => setCount(e.target.value)}//old
            onChange={(e) => {
              setCount(e.target.value);
              onChange(e);
            }} //new
            id={name}
            // value={count} //old
            value={value} //new
            {...field}
            label={label}
            placeholder={placeholder}
            type={type}
            fullWidth={fullWidth}
            size={size}
            multiline={multiline}
            error={!!error?.message}
            disabled={totalWord > 150}
            helperText={error?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  sx={{
                    position: "absolute",
                    right: 3,
                    bottom: 15,
                    fontSize: "12px",
                    color: count?.length >= 150 ? "#dc2626" : "#22c55e",
                  }}
                  position="end"
                >
                  {150 - count?.length}
                </InputAdornment>
              ),
            }}
          />
        );
      }}
    />
  );
};
export default TbTextCountField;
