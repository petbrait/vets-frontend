import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const Card = styled(Box)`
  background-color: #fff;
  margin-bottom: 20px;
  padding: 15px 10px 15px 30px;
  cursor: pointer;
  & div {
    & img {
      width: 44px;
      height: 44px;
    }
    & p {
      margin: 0;
      font-family: "Poppins";
      font-size: 14px;
    }
    & span {
      margin: 0;
      font-family: "Jost";
      color: #727f88;
      font-size: 14px;
    }
  }
`;

const Content = styled(Box)`
  display: grid;
  grid-template-columns: 25% 20% 20% 20% 12%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: flex-start;
`;

const PetName = styled(Typography)`
  font-size: 16px;
  font-weight: 500;
`;

const Race = styled(Typography)`
  color: #727f88;
  font-size: 11px !important;
`;

const Item = styled(Typography)`
  font-size: 13px !important;
`;

interface Patient {
  id: number;
  name: string;
  race: string;
  owner_name: string;
  owner_phone: string;
  total_sessions: number;
}

const Index = ({
  id,
  name,
  race,
  owner_name,
  owner_phone,
  total_sessions,
}: Patient) => {
  const router = useRouter();

  return (
    <Card key={id}>
      <Content onClick={() => router.push(`/pet/${id}`)}>
        <div>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="ncieone"
              src="https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-t.jpg"
              sx={{
                width: 50,
                height: 50,
                bgcolor: "#AA77FF",
                color: "#fff",
              }}
            />
            <Box>
              <PetName>{name}</PetName>
              <Race>{race}</Race>
            </Box>
          </Stack>
        </div>
        <div>
          <Item>{owner_name}</Item>
        </div>
        <div>
          <Item>{owner_phone}</Item>
        </div>
        <div>
          <Item>{total_sessions}</Item>
        </div>
        <div>
          <Button
            onClick={() => console.log("Sheesh")}
            sx={{ position: "relative", zIndex: 5 }}
          >
            Agendar Cita
          </Button>
        </div>
      </Content>
    </Card>
  );
};

export default Index;
