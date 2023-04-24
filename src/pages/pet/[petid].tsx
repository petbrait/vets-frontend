import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PetInfo from "./PetInfo";
import OwnerInfo from "./OwnerInfo";
import TabContentPet from "./TabContentPet";
import Image from "next/image";
import IconArrow from "@/assets/icons/arrow.svg";
import Logo from "@/components/Logo";

const Wrapper = styled(Box)`
  background-color: #f7f6fe;
  height: calc(100vh - 80px);
  padding: 40px;
`;

const Back = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer !important;
  & img {
    cursor: pointer;
    margin-right: 5px !important;
  }
`;

const Index = () => {
  const router = useRouter();

  const patients = useSelector((state: any) => state.patients);

  console.log("patients", patients);

  return (
    <Wrapper>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ marginBottom: 4 }}
      >
        <Back onClick={() => router.push("/home")}>
          <Image
            width={16}
            height={16}
            priority
            src={IconArrow}
            alt="icon-arrow"
          />
        </Back>
        <Logo />
      </Stack>
      <Grid container spacing={5}>
        <Grid item xs={3.5}>
          <Box mb={3}>
            <PetInfo />
          </Box>
          <OwnerInfo />
        </Grid>
        <Grid item xs={8.5}>
          <TabContentPet />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Index;
