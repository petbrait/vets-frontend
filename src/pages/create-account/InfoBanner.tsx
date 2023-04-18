import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Index = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        height: "calc(100vh)",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          padding: "50px 0 0 30px",
          letterSpacing: "2.5px",
          fontSize: "18px",
        }}
      >
        PETBRAIT
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          marginTop: "10px",
          padding: "50px 70px 0 70px",
          fontSize: "30px",
          fontWeight: "500",
        }}
      >
        Gestiona, incorpora todo lo que conlleva sobre tu veterinaria o hospital
        para mascotas
      </Typography>
      <Typography
        sx={{
          color: "#fff",
          marginTop: "10px",
          padding: "30px 70px 0 70px",
          fontSize: "17px",
        }}
      >
        Demuestrale a tus pacientes la nueva forma de llevar el control de su
        carnet medico, gestiona tu día a día con el creador de citas y así poder
        agregar valor de marca
      </Typography>
    </Box>
  );
};

export default Index;
