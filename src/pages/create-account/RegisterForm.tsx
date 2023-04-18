import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Wrapper = styled(Box)`
  margin: 140px 40px 40px 40px;
`;

const Title = styled(Typography)`
  font-size: 22px;
`;

const Index = () => {
  return (
    <Wrapper>
      <Title>Prueba Petbrait vets</Title>
    </Wrapper>
  );
};

export default Index;
