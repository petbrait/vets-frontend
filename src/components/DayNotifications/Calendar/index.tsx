import styled from "styled-components";
import Box from "@mui/material/Box";
import CardCalendar from "./CardCalendar";
import Typography from "@mui/material/Typography";

const Date = styled(Typography)`
  font-size: 20px;
  font-weight: 500;
`;
const Appoinments = styled(Typography)`
  font-size: 12px;
  color: #727f88;
`;

const Index = () => {
  return (
    <Box>
      <Box mt={5} mb={5} ml={3} mr={3}>
        <Date>21 Marzo</Date>
        <Appoinments>Tienes 3 citas</Appoinments>
      </Box>
      <Box>
        {[1, 2, 3].map((slot) => (
          <CardCalendar />
        ))}
      </Box>
    </Box>
  );
};

export default Index;
