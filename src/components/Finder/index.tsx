import styled from "styled-components";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Input = styled(TextField)(({}) => ({
  "& .MuiInputBase-input": {
    fontSize: "13px",
    padding: "13.5px 14px",
  },
}));

const Title = styled(Typography)`
  font-size: 19px !important;
  font-weight: 500 !important;
`;

const Index = () => {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>Buscar mascota</Title>
        <Button size="small">+ Registrar mascota</Button>
      </Stack>
      <Box mt={3}>
        <Input
          variant="outlined"
          sx={{ fontFamily: "Poppins" }}
          fullWidth={true}
          placeholder="Escribe un nombre"
        />
      </Box>
    </Box>
  );
};

export default Index;
