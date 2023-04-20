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
