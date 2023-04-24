import { useState } from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import IconClock from "@/assets/icons/clock.svg";

import { type Appoiment } from "@/types";

const Wrapper = styled(Box)`
  margin: 10px 20px;
`;

const Card = styled(Box)`
  border: 1px solid #ededed;
  padding: 10px;
  border-radius: 7px;
  cursor: pointer;
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

const PetName = styled(Typography)`
  font-size: 13px !important;
`;

const Icon = styled(Image)`
  position: relative;
  z-index: 2;
  width: 15px;
  height: 15px;
`;

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

const Index = ({ time, objetive, pet_name, session_duration }: Appoiment) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <Date>{time}</Date>
      <Card onClick={handleOpen}>
        <Title>{objetive}</Title>
        <Grid container alignItems="flex-end" mt={1}>
          <Grid item xs={9}>
            <Stack direction="row" spacing={2} alignItems="center">
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
              <PetName>{pet_name}</PetName>
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Stack direction="row" spacing={0.7} alignItems="center">
              <Icon src={IconClock} alt="" />
              <Time>{session_duration} mins</Time>
            </Stack>
          </Grid>
        </Grid>
      </Card>
    </Wrapper>
  );
};

export default Index;
