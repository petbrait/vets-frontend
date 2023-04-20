import { useState } from "react";
import { useFinder } from "@/hooks/useFinder";
import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PatientCard from "./PatientCard";
import { UsePatients } from "@/core/api";
import { type Patient } from "@/types";

const Title = styled(Typography)`
  font-size: 24px !important;
  font-weight: 500 !important;
`;

const HeaderInfo = styled(Box)`
  display: grid;
  grid-template-columns: 25% 20% 20% 20% 12%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  align-items: flex-end;
  justify-items: flex-start;
  padding: 10px 10px 10px 30px;
  & div p {
    font-family: "Poppins";
    font-size: 12px;
    line-height: 120%;
    color: #727f88;
    padding: 0 27px 0 0;
    margin-bottom: 5px;
  }
`;

const Input = styled(TextField)(({}) => ({
  "& .MuiInputBase-input": {
    fontSize: "13px",
    padding: "13.5px 14px",
  },
}));

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
    <Box mt={5}>
      <Title>Mascotas</Title>
      <Box mt={3} mb={3}>
        <Input
          variant="outlined"
          sx={{
            fontFamily: "Poppins",
            backgroundColor: "#fff",
          }}
          fullWidth={true}
          placeholder="Buscar mascota"
          onChange={(e) => setFilterName(e.target.value)}
        />
      </Box>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <Box>
          {isError ? (
            <p>Error was ocurred</p>
          ) : (
            <>
              <HeaderInfo>
                <div />
                <div>
                  <p>Dueño</p>
                </div>
                <div>
                  <p>Contacto</p>
                </div>
                <div>
                  <p>Total sesiones</p>
                </div>
                <div />
              </HeaderInfo>
              {filteredData &&
                // @ts-ignore
                filteredData.map((patient) => <PatientCard {...patient} />)}
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Index;
