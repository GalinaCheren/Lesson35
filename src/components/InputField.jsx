import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

export const InputField = ({ label = "", multiline = false, name }) => {
  const [{ onChange, onBlur, value }, { touched, error }] = useField(name);
  const isErrorShow = touched && !!error;
  return (
    <TextField
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      fullWidth
      variant="outlined"
      label={label}
      multiline={multiline}
      rows={multiline ? 4 : 1}
      error={isErrorShow}
      helperText={isErrorShow ? error : ""}
    />
  );
};
