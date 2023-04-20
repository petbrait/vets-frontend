import { useState } from "react";
import { useFinder } from "@/hooks/useFinder";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PetCardFinder from "./PetCardFinder";
import { UsePatients } from "@/core/api";
import { type Patient } from "@/types";

const Input = styled(TextField)(({}) => ({
  "& .MuiInputBase-input": {
    fontSize: "13px",
    padding: "13.5px 14px",
  },
}));

const Title = styled(Typography)`
  font-size: 19px !important;
  font-weight: 500 !important;
`;

const Index = () => {
  const {
    patients,
    isLoading,
    isError,
  }: { patients: Array<Patient>; isLoading: boolean; isError: boolean } =
    UsePatients();

  const [filterName, setFilterName] = useState<string | null>(null);
  const filteredData = useFinder(filterName, patients);

  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>Buscar mascota</Title>
        <Button size="small">+ Registrar mascota</Button>
      </Stack>
      <Box mt={3}>
        <Input
          variant="outlined"
          sx={{ fontFamily: "Poppins" }}
          fullWidth={true}
          placeholder="Escribe un nombre"
          onChange={(e) => setFilterName(e.target.value)}
        />
      </Box>
      <Box mt={4}>
        {filteredData &&
          // @ts-ignore
          filteredData.map((patient) => <PetCardFinder patient={patient} />)}
      </Box>
    </Box>
  );
};

export default Index;
