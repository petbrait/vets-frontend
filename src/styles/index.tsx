import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Forms
export const Field = styled(Box)`
  margin: 15px 0;
  & label {
    display: block;
    margin-bottom: 5px;
    font-size: 12.5px;
    font-weight: 500;
    font-family: "Poppins";
  }
`;

// Dialog
export const DialogContent = styled(Box)`
  padding: 20px;
`;

// Pet Card // Finder Pet
export const PetName = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;

export const Race = styled(Typography)`
  color: #727f88;
  font-size: 11px !important;
`;

// Modal
export const ModalContent = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  padding-top: 16px;
  padding-bottom: 24px;
`;

export const ContentTitle = styled(Box)`
  padding: 0 35px 16px;
  border-bottom: 1px solid #d1d1d1;
`;

export const ModalTitle = styled(Typography)`
  margin: 0;
  font-size: 20px !important;
  font-weight: 500;
`;

export const ModalFooter = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;
