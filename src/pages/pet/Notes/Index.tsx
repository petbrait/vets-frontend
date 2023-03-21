import Box from "@mui/material/Box";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import IconArrow from "@/assets/icons/chevron.svg";
import IconNote from "@/assets/icons/note.svg";

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
  const notes = [
    {
      name: "Revisión",
      date: "24 Febrero 2023",
      details:
        "En esta primera revision, el perrito se ecnuentra bien, solamente hay que mejorar la parte de sus horarios de alimentación, le mandare un medicamento para la caida de cabello.",
    },
    {
      name: "Seguimiento contra las pulgas",
      date: "01 Marzo 2023",
      details:
        "En esta primera revision, el perrito se ecnuentra bien, solamente hay que mejorar la parte de sus horarios de alimentación, le mandare un medicamento para la caida de cabello.",
    },
  ];

  return (
    <Box>
      {notes.map((note) => (
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
                <Name>{note.name}</Name>
                <Date>{note.date}</Date>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Details>{note.details}</Details>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default Index;
