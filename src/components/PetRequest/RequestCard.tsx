import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { PetName, Race } from "@/styles";

const Card = styled(Box)`
  background-color: #fff;
  padding: 15px;
  cursor: pointer;
  & button {
    display: none;
  }
  &:hover {
    & button {
      display: block;
    }
  }
`;

const Index = () => {
  return (
    <Card>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Box>
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
              <PetName>Rocky</PetName>
              <Race>Pitbull</Race>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Button size="small">Confirmar</Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default Index;
