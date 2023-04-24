import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { PetName, Race } from "@/styles";
import { type Patient } from "@/types";

const Card = styled(Box)`
  padding-bottom: 10px;
  margin-bottom: 10px;
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

interface props {
  patient: Patient;
  setPatientSelected: any;
}

const Index = ({ patient, setPatientSelected }: props) => {
  return (
    <Card onClick={() => setPatientSelected(patient)}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          alt="ncieone"
          src="https://images.hola.com/imagenes/mascotas/20221020219416/razas-perros-toy/1-154-385/razas-de-perro-toy-t.jpg"
          sx={{
            width: 45,
            height: 45,
            bgcolor: "#AA77FF",
            color: "#fff",
          }}
        />
        <Box>
          <PetName>{patient.name}</PetName>
          <Race>{patient.race}</Race>
        </Box>
      </Stack>
    </Card>
  );
};

export default Index;
