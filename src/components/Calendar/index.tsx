import { useState } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Calendar from "react-calendar";

const Wrapper = styled(Box)`
  padding: 0 24px;
`;

const Question = styled(Typography)`
  margin-top: 20px;
`;

const Legend = styled(Typography)``;

const Footer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const BadgeAvailable = styled.span`
  position: relative;
  width: 18px;
  height: 15px;
  border-radius: 10px;
  background-color: #f7f6fe;
  border: 1px solid #4649ff;
`;

interface calendarProps {
  type: string;
  handleClose: () => void;
}

const Index = ({ type, handleClose }: calendarProps) => {
  const [value, onChange] = useState(new Date());

  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
  };

  return (
    <Wrapper>
      <Question>
        ¿La cita quieres que sea presencial o en linea (Video llamada)?
      </Question>
      <Box>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={7}>
            <Legend>Selecciona una fecha y horario disponible</Legend>
            <Calendar onChange={onChange} value={value} />
            <Stack
              direction="row"
              spacing={1.5}
              mt={2}
              ml={2}
              alignItems="center"
            >
              <BadgeAvailable />
              <Legend>
                los círculos de color morado claro representan días con citas
                disponibles
              </Legend>
            </Stack>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>
      </Box>
      <Footer>
        <Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <Box>
              <Button onClick={handleClose}>Cancelar</Button>
            </Box>
            <Box>
              <LoadingButton
                onClick={onSubmit}
                sx={{
                  color: "#fff",
                }}
                size="medium"
                color="primary"
                type="submit"
                loading={loading}
                variant="contained"
              >
                <span>{type === "booking" ? "Agendar" : "Reagendar"}</span>
              </LoadingButton>
            </Box>
          </Stack>
        </Box>
      </Footer>
    </Wrapper>
  );
};

export default Index;
