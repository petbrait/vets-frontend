import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Index = () => {
  return (
    <Box
      sx={{
        position: "relative",
        marginBottom: "20px",
        zIndex: 1,
      }}
    >
      <Link href="/home">
        <Typography
          sx={{
            display: "initial",
            color: "#000",
            letterSpacing: "2.5px",
            fontSize: "18px",
          }}
        >
          PETBRAIT
        </Typography>
        <small>Vets</small>
      </Link>
    </Box>
  );
};

export default Index;
