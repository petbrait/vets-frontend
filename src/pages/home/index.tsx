import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navegation from "@/components/Navegation";
import BadgeProfile from "@/components/BadgeProfile";
import Logo from "@/components/Logo";
import DayNotifications from "@/components/DayNotifications";

const Wrapper = styled(Box)`
  background-color: #f7f6fe;
  height: 100vh;
  padding: 40px;
`;

const Index = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={9}>
          <Wrapper>
            <Grid container alignItems="center">
              <Grid item xs={10.5}>
                <Logo />
              </Grid>
              <Grid item xs={1.5}>
                <BadgeProfile />
              </Grid>
            </Grid>
            <Navegation />
          </Wrapper>
        </Grid>
        <Grid item xs={3}>
          <DayNotifications />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
