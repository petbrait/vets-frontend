import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

const Wrapper = styled(Box)`
  margin: 10px 20px;
`;

const Card = styled(Box)`
  border: 1px solid #ededed;
  padding: 10px;
  border-radius: 7px;
`;

const Date = styled(Typography)`
  text-align: center;
  margin: 20px !important;
`;

const Title = styled(Typography)`
  font-size: 16px;
`;

const Time = styled(Typography)`
  font-size: 11px !important;
  color: #344f64;
`;

const PetName = styled(Typography)`
  font-size: 13px !important;
`;

const Index = () => {
  return (
    <Wrapper>
      <Date>10:30px</Date>
      <Card>
        <Title>Revision general</Title>
        <Grid container alignItems="flex-end" mt={1}>
          <Grid item xs={7}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                alt="ncieone"
                src="../../assets/images/logo-petco.png"
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "#AA77FF",
                  color: "#fff",
                }}
              />
              <PetName>Pedrito </PetName>
            </Stack>
          </Grid>
          <Grid item xs={3}></Grid>
          <Time>30 mins</Time>
        </Grid>
      </Card>
    </Wrapper>
  );
};

export default Index;
