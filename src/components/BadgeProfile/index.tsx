import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";
import IconPlus from "@/assets/icons/plus.svg";
import Modal from "@mui/material/Modal";
import Finder from "@/components/Finder";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

const ButtonAddPet = styled.button`
  background-color: #f5f4f7;
  padding: 10px 12px;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 15px;
`;

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Tooltip title="Asignarme una mascota">
          <ButtonAddPet onClick={handleOpen}>
            <Image priority src={IconPlus} alt="icon-plus" />
          </ButtonAddPet>
        </Tooltip>
        <Avatar
          alt="ncieone"
          src="https://micarrerauniversitaria.com/wp-content/uploads/2018/03/veterinario-1.gif"
          sx={{ width: 50, height: 50, bgcolor: "#AA77FF", color: "#fff" }}
        />
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Finder />
        </Box>
      </Modal>
    </Box>
  );
};

export default Index;
