import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "@/core/api";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PatientCard from "./PatientCard";

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

interface Patient {
  id: number;
  name: string;
  race: string;
  owner_name: string;
  owner_phone: string;
  total_sessions: number;
}

const Index = () => {
  const patients = useSelector((state: any) => state.patients);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("patients", patients);
    !patients.length && getPatients(dispatch);
  }, []);

  return (
    <Box mt={5}>
      <Title>Mascotas</Title>
      <Box>
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
          {patients &&
            patients.map((patient: Patient) => <PatientCard {...patient} />)}
        </>
      </Box>
    </Box>
  );
};

export default Index;
