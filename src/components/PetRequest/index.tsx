import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Filters from "./Filters";
import RequestCard from "./RequestCard";

const Title = styled(Typography)`
  font-size: 24px !important;
  font-weight: 500 !important;
`;

const Index = () => {
  return (
    <Box mt={1}>
      <Title>Solicitudes 👏🏻</Title>
      <Box mt={3}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4].map(() => (
            <Grid item xs={4}>
              <RequestCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
