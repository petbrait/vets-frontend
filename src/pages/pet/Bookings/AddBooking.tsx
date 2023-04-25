import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Calendar from "@/components/Calendar";
import Modal from "@mui/material/Modal";
import { ModalContent, ContentTitle, ModalTitle } from "@/styles";
import { PROPS } from "@/constants/props";

interface addBookingProps {
  type: string;
  children: any;
}

const Index = ({ type, children }: addBookingProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button onClick={handleOpen} size="small">
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContent>
          <ContentTitle>
            <ModalTitle>
              {type === PROPS.BOOKING ? "Agendar" : "Reagendar"} cita
            </ModalTitle>
          </ContentTitle>
          <Box>
            <Calendar type={type} handleClose={handleClose} />
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
