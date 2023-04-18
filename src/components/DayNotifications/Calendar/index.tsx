import styled from "styled-components";
import Box from "@mui/material/Box";
import CardCalendar from "./CardCalendar";
import Typography from "@mui/material/Typography";

const Date = styled(Typography)`
  font-size: 23px !important;
  font-weight: 500;
`;
const Appoinments = styled(Typography)`
  font-size: 12.5px !important;
  color: #727f88;
`;

const Index = () => {
  return (
    <Box>
      <Box mt={5} mb={5} ml={3} mr={3}>
        <Date>21 Marzo</Date>
        <Appoinments>Tienes 3 citas para el día de hoy</Appoinments>
      </Box>
      <Box>
        {[1, 2, 3].map(() => (
          <CardCalendar />
        ))}
      </Box>
    </Box>
  );
};

export default Index;
