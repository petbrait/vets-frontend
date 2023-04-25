import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Index = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Button>Pendientes</Button>
      <Button>Confirmadas</Button>
    </Stack>
  );
};

export default Index;
