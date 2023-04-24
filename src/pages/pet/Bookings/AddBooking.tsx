import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@/styles";
import Calendar from "@/components/Calendar";

interface addBookingProps {
  type: string;
  children: any;
}

const Index = ({ type, children }: addBookingProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Button onClick={() => setOpen(true)} size="small">
        {children}
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <DialogTitle sx={{ fontFamily: "Poppins" }}>
            {type === "booking" ? "Reservar" : "Reagendar"}
          </DialogTitle>
          <Box>
            <Calendar type={type} />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Index;
