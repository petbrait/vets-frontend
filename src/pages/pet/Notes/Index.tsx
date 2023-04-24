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
import AddNote from "./AddNote";
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
        <Title>2 Notas</Title>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box>
              <Button size="small" onClick={handleClick}>
                Filtros
              </Button>
              {/* Menu */}
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem sx={{ fontSize: "12.5px" }} onClick={handleClose}>
                  Fecha
                </MenuItem>
                <MenuItem sx={{ fontSize: "12.5px" }} onClick={handleClose}>
                  A-Z
                </MenuItem>
                <MenuItem sx={{ fontSize: "12.5px" }} onClick={handleClose}>
                  Z-A
                </MenuItem>
              </Menu>
            </Box>
            <Box>
              <AddNote />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Box mt={2}>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <>
            {notes &&
              notes.map((note) => (
                <Box>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={
                        <Image
                          width={16}
                          height={16}
                          priority
                          src={IconArrow}
                          alt="icon-arrow"
                        />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Image
                          width={16}
                          height={16}
                          priority
                          src={IconNote}
                          alt="icon-note"
                        />
                        <Name>{note.title}</Name>
                        {/* <Date>{note.date}</Date> */}
                        {/* 24 Febrero 2023 */}
                      </Stack>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Details>{note.details}</Details>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))}
          </>
        )}
      </Box>
    </Box>
  );
};

export default Index;
