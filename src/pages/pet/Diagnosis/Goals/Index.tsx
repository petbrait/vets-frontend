import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GoalCard from "./GoalCard";

const Title = styled(Typography)`
  font-size: 15px !important;
  font-weight: 600 !important;
`;

const Index = () => {
  return (
    <div>
      <Box>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          mt={1}
        >
          <Grid item xs={10.3}>
            <Title>7 Metas</Title>
          </Grid>
          <Grid item xs={1.7}>
            <Button size="small">+ Agregar meta</Button>
          </Grid>
        </Grid>
        <Box mt={3}>
          {[1, 2, 3].map(() => (
            <GoalCard />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Index;
