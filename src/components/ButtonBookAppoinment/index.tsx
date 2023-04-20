import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@/styles";

const Index = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Agendar Cita</Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <DialogTitle sx={{ fontFamily: "Poppins" }}>Agendar Cita</DialogTitle>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Index;
