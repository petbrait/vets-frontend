import styled from "styled-components";
import Box from "@mui/material/Box";
import CardCalendar from "./CardCalendar";
import Typography from "@mui/material/Typography";
import { UseAppoiments } from "@/core/api";
import { type Appoiment } from "@/types";

const Date = styled(Typography)`
  font-size: 23px !important;
  font-weight: 500;
`;
const Appoinments = styled(Typography)`
  font-size: 12.5px !important;
  color: #727f88;
`;

const Index = () => {
  const {
    appoiments,
    isLoading,
    isError,
  }: {
    appoiments: Array<Appoiment>;
    isLoading: boolean;
    isError: boolean;
  } = UseAppoiments();

  return (
    <Box>
      <Box mt={5} mb={5} ml={3} mr={3}>
        <Date>21 Marzo</Date>
        <Appoinments>Tienes 3 citas para el día de hoy</Appoinments>
      </Box>
      <Box>
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          <Box>
            {appoiments &&
              appoiments.map((appoiment) => <CardCalendar {...appoiment} />)}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Index;
