import { useState } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddVaccine from "./AddVaccine";

const Title = styled(Typography)`
  font-size: 18px !important;
  font-weight: 500 !important;
`;

const Index = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>Vacunas</Title>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box>
              <AddVaccine />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
