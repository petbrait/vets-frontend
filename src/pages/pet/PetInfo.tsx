import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const Wrapper = styled(Box)`
  background-color: #fff;
  border-radius: 14px;
  padding: 25px;
`;

const Name = styled(Typography)`
  font-weight: 600;
  font-size: 18px !important;
  text-align: center;
  margin-bottom: 5px !important;
`;

const Race = styled(Typography)`
  font-weight: 400;
  font-size: 12px !important;
  color: #344f64;
  text-align: center;
`;

const Index = () => {
  return (
    <Wrapper>
      <Box>
        <Avatar
          alt="L"
          src="../../assets/images/logo-petco.png"
          sx={{
            width: 55,
            height: 55,
            bgcolor: "#AA77FF",
            color: "#fff",
            margin: "0 auto 10px",
          }}
        />
        <Name>Laika</Name>
        <Race>Cooker</Race>
        <Race>2 años de edad</Race>
      </Box>
    </Wrapper>
  );
};

export default Index;
