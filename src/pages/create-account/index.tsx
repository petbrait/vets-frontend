import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InfoBanner from "./InfoBanner";
import RegisterForm from "./RegisterForm";

const Index = () => {
  return (
    <Box>
      <Grid container spacing={5}>
        <Grid item xs={6.5}>
          <InfoBanner />
        </Grid>
        <Grid item xs={5.5}>
          <RegisterForm />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
