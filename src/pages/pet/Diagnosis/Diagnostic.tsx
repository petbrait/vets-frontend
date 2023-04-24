import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import IconArrow from "@/assets/icons/chevron.svg";
import IconFileText from "@/assets/icons/file-text.svg";
import IconShare from "@/assets/icons/share.svg";

const Card = styled(Accordion)`
  border: 1px solid #d1d1d185 !important;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Section = styled(Box)`
  margin-bottom: 20px;
  & h3 {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  & p {
    font-size: 12.5px;
  }
`;

const Date = styled(Typography)`
  font-size: 12px !important;
  color: grey;
`;

const Index = () => {
  return (
    <Box>
      <Card>
        <AccordionSummary
          expandIcon={
            <Image
              width={20}
              height={20}
              priority
              src={IconArrow}
              alt="icon-arrow"
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: "0 20px !important" }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Image
              width={18}
              height={18}
              priority
              src={IconFileText}
              alt="icon-filetext"
            />
            <Box>
              <p>Diagnostico 1</p>
              <Date>23 de Abril 2023</Date>
            </Box>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={5.5}>
            <Grid item xs={11}>
              <Section>
                <h3>Detalles del problema</h3>
                <p>
                  Se siente mal, el dueño dice que tiene fatiga y no quiere
                  comer, esto paso despues de llevarlo a la estetica de
                  mascoatas
                </p>
              </Section>
              <Section>
                <h3>Diagnostico</h3>
                <p>
                  Revision de estomago, esta un poco suleto y tirene lombrises
                  en el estomago, se necesita mandar medicamentos para el dolor
                  y desparasitar
                </p>
              </Section>
              <Section>
                <h3>Medicamentos Recetados</h3>
                <p>
                  Revision de estomago, esta un poco suleto, se necesita mandar
                  medicamentos
                </p>
              </Section>
              <Section>
                <h3>Examenes Recetados</h3>
                <p>Ninguno</p>
              </Section>
              <Section>
                <h3>Notas</h3>
                <p>Ninguno</p>
              </Section>
            </Grid>
            <Grid item xs={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Tooltip title="Compartir">
                  <IconButton>
                    <Image
                      width={17}
                      height={17}
                      priority
                      src={IconShare}
                      alt="icon-share"
                    />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Card>
    </Box>
  );
};

export default Index;
