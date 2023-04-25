import { useState } from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddFile from "./AddFile";

const Title = styled(Typography)`
  font-size: 18px !important;
  font-weight: 500 !important;
`;

const Description = styled(Typography)`
  font-size: 13px !important;
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
        <Box>
          <Title>Archivos</Title>
          <Description>
            Aqui podras ver los archivos que te sean compartidos o tu compartas
          </Description>
        </Box>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box>
              <AddFile />
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
