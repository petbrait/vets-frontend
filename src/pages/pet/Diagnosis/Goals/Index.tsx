import styled from "styled-components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import GoalCard from "./GoalCard";
import { colors } from "@/constants/colors";

const Title = styled(Typography)`
  font-size: 15px !important;
  font-weight: 600 !important;
`;

interface filterProps {
  active: boolean;
}

const Filters = styled(Box)`
  position: sticky;
  top: -20px;
  padding: 20px 0;
  background-color: #fff;
`;

const Filter = styled(Typography)<filterProps>`
  font-size: 12px !important;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? `${colors.brightBlue}` : "#fff"};
  padding: 5px 10px;
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border-radius: 50px;
`;

const Index = () => {
  return (
    <div>
      <Box>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={10.3}>
            <Title>7 Metas</Title>
          </Grid>
          <Grid item xs={1.7}>
            <Button size="small">+ Agregar meta</Button>
          </Grid>
        </Grid>
        <Filters>
          <Stack direction="row" spacing={2} alignItems="center">
            <Filter active={true}>Activas</Filter>
            <Filter active={false}>Terminadas</Filter>
            <Filter active={false}>Eliminadas</Filter>
          </Stack>
        </Filters>
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
