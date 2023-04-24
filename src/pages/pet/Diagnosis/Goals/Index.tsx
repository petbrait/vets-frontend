import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import GoalCard from "./GoalCard";
import AddGoal from "./AddGoal";
import { COLORS } from "@/constants/colors";
import { UseGoals } from "@/core/api";
import { type Goal } from "@/types";

const Title = styled(Typography)`
  font-size: 18px !important;
  font-weight: 500 !important;
`;

interface filterProps {
  active: boolean;
}

const Filters = styled(Box)`
  position: sticky;
  top: -20px;
  padding: 20px 0;
  background-color: #fff;
  z-index: 1;
`;

const Filter = styled(Typography)<filterProps>`
  font-size: 12px !important;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? `${COLORS.brightBlue}` : "#fff"};
  padding: 5px 10px;
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border-radius: 50px;
`;

const Index = () => {
  const {
    goals,
    isLoading,
    isError,
  }: { goals: Array<Goal>; isLoading: boolean; isError: boolean } = UseGoals();

  return (
    <div>
      <Box>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Title>7 Metas</Title>
          <Box>
            <AddGoal />
          </Box>
        </Stack>
        <Filters>
          <Stack direction="row" spacing={2} alignItems="center">
            <Filter active={true}>Activas</Filter>
            <Filter active={false}>Terminadas</Filter>
            <Filter active={false}>Eliminadas</Filter>
          </Stack>
        </Filters>
        <Box mt={3}>
          {isLoading ? (
            <Box>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={118}
                style={{ borderRadius: "7px", marginBottom: 10 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={118}
                style={{ borderRadius: "7px" }}
              />
            </Box>
          ) : (
            <>{goals && goals.map(() => <GoalCard />)}</>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Index;
