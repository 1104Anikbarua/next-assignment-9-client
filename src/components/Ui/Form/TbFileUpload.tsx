import * as React from "react";
import { SxProps, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller } from "react-hook-form";
import { Input } from "@mui/material";

// interface
interface IFileUploadProps {
  name: string;
  placeholder: string;
  sx?: SxProps;
  fullWidth?: boolean;
}
//
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function TbFileUpload({
  name,
  placeholder,
  sx,
  fullWidth,
}: IFileUploadProps) {
  return (
    <Controller
      name={name}
      render={({
        field: { onChange, value, ...field },
        fieldState: { error },
      }) => (
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          sx={{ ...sx }}
          fullWidth={fullWidth}
        >
          {placeholder}
          <VisuallyHiddenInput
            {...field}
            value={value?.fileName}
            onChange={(e) => onChange(e?.target)}
            type="file"
            multiple
          />
          {/* <Input
            fullWidth={fullWidth}
            {...field}
            value={value?.fileName}
            type="file"
            sx={{ display: "none" }}
            onChange={(e) =>
              onChange((e?.target as HTMLInputElement)?.files?.[0])
            }
          /> */}
        </Button>
      )}
    />
  );
}
