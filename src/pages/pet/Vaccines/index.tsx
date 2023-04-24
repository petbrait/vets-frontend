import { useState } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IconArrow from "@/assets/icons/chevron.svg";
import IconNote from "@/assets/icons/note.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UseNotes } from "@/core/api";
import { type Note } from "@/types";

const Title = styled(Typography)`
  font-size: 18px !important;
  font-weight: 500 !important;
`;

const Name = styled(Typography)`
  font-size: 15px !important;
  font-weight: 500;
`;

const Date = styled(Typography)`
  font-size: 13px !important;
  font-weight: 400;
  color: #7b8fa1;
`;

const Details = styled(Typography)`
  font-size: 13px !important;
`;

const Index = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const {
    notes,
    isLoading,
    isError,
  }: { notes: Array<Note>; isLoading: boolean; isError: boolean } = UseNotes();

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>Vacunas</Title>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box>{/* <AddNote /> */}</Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
