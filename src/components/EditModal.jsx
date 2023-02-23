import React from "react";
import { Dialog, DialogTitle, DialogContent, Box } from "@mui/material";
import { NotesForm } from "./NotesForm.jsx";

export const EditModal = ({ open = false, onClose, currentNote, onEdit }) => {
  const onSubmit = (values) => {
    onEdit(currentNote.id, values.title, values.description);
    onClose();
  };
  return (
    <Dialog onClose={onClose} open={open} fullWidth>
      <DialogTitle>{`Edit ${currentNote.title}`}</DialogTitle>
      <DialogContent>
        <Box sx={{ paddingTop: 2 }}>
          <NotesForm
            onSubmit={onSubmit}
            initialTitle={currentNote.title}
            initialDescription={currentNote.description}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
