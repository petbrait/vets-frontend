import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Button from "@mui/material/Button";
import IconTimes from "@/assets/icons/times.svg";

import { type Appoiment } from "@/types";

const Wrapper = styled(Box)`
  margin: 10px 20px;
`;

const Card = styled(Box)`
  border: 1px solid #ededed;
  padding: 10px;
  border-radius: 7px;
  & button {
    display: none;
  }
  &:hover {
    & button {
      display: block;
    }
  }
`;

const TypeDate = styled(Typography)`
  font-size: 10px !important;
  color: grey;
`;

const Date = styled(Typography)`
  text-align: center;
  margin: 20px !important;
`;

const Title = styled(Typography)`
  font-size: 16px;
`;

const Time = styled(Typography)`
  font-size: 11px !important;
  color: #344f64;
`;

const Badge = styled(Box)`
  position: relative;
  width: 4px;
  height: 4px;
  border-radius: 10px;
  background-color: grey;
`;

const PetName = styled(Typography)`
  font-size: 13px !important;
`;

const Icon = styled(Image)`
  position: relative;
  width: 15px;
  height: 15px;
  z-index: 2;
  cursor: pointer;
`;

const Index = ({ time, objetive, pet_name, session_duration }: Appoiment) => {
  return (
    <Wrapper>
      <Date>{time}</Date>
      <Card>
        <Stack
          direction="row"
          spacing={0.7}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Stack
              direction="row"
              spacing={0.7}
              alignItems="center"
              justifyContent="space-between"
              mb={1.2}
            >
              <Box>
                <Title>{objetive}</Title>
              </Box>
              <Stack direction="row" spacing={0.7} alignItems="center">
                <Badge />
                <Time>{session_duration} mins</Time>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Tooltip placement="left" title="Cancelar cita">
              <Icon src={IconTimes} alt="X" />
            </Tooltip>
          </Box>
        </Stack>
        <Grid container alignItems="flex-end" mt={0.5}>
          <Grid item xs={9}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                alt="ncieone"
                src="https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-t.jpg"
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "#AA77FF",
                  color: "#fff",
                }}
              />
              <Box>
                <PetName>{pet_name}</PetName>
                <TypeDate>Video llamada</TypeDate>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack direction="row" spacing={0.7} alignItems="center">
              <Button size="small">Comenzar</Button>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Wrapper>
  );
};

export default Index;
