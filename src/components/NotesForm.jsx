import React from "react";
import { Box, Button, Stack } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { InputField } from "./InputField.jsx";

export const NotesForm = ({
  onSubmit,
  initialTitle = "",
  initialDescription = "",
}) => {
  return (
    <Box>
      <Formik
        initialValues={{ title: initialTitle, description: initialDescription }}
        onSubmit={(values, formikHelpers) => {
          onSubmit(values);
          formikHelpers.resetForm();
        }}
        validationSchema={yup.object().shape({
          title: yup.string().label("Title").min(4).max(15).required(),
          description: yup
            .string()
            .label("Description")
            .min(20)
            .max(1000)
            .required(),
        })}
      >
        <Form>
          <Stack spacing={2}>
            <InputField label="Title" name="title" />
            <InputField label="Description" multiline name="description" />

            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  );
};
