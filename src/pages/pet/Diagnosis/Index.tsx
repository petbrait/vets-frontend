import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Diagnostic from "./Diagnostic";
import Typography from "@mui/material/Typography";

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
        <Title>Diagnosticos (3)</Title>
      </Stack>
      <Box mt={3} mb={2}>
        {[1, 2, 3].map(() => (
          <Diagnostic />
        ))}
      </Box>
    </Box>
  );
};

export default Index;
