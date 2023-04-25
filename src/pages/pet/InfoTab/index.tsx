import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import IconUser from "@/assets/icons/user.svg";
import IconPet from "@/assets/icons/pet.png";
import IconButton from "@mui/material/IconButton";
import { INFO_TAB } from "@/constants/tabs";

import OwnerInfo from "./OwnerInfo";
import PetInfo from "./PetInfo";

const Wrapper = styled(Box)`
  background-color: #fff;
  border-radius: 14px;
  padding: 25px;
`;

const Index = () => {
  const [tab, setTab] = useState<string>(INFO_TAB.OWNER_INFO);

  return (
    <Wrapper>
      <Box mb={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip placement="top-start" title="Información del dueño">
            <IconButton
              onClick={() => setTab(INFO_TAB.OWNER_INFO)}
              sx={
                tab === INFO_TAB.OWNER_INFO && { backgroundColor: "#4649ff30" }
              }
            >
              <Image
                width={20}
                height={20}
                priority
                src={IconUser}
                alt="icon-user"
              />
            </IconButton>
          </Tooltip>
          <Tooltip placement="top-start" title="Información de la mascota">
            <IconButton
              onClick={() => setTab(INFO_TAB.PET_INFO)}
              sx={tab === INFO_TAB.PET_INFO && { backgroundColor: "#4649ff30" }}
            >
              <Image
                width={20}
                height={20}
                priority
                src={IconPet}
                alt="icon-pet"
              />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
      <Box>
        {tab === INFO_TAB.OWNER_INFO && <OwnerInfo />}
        {tab === INFO_TAB.PET_INFO && <PetInfo />}
      </Box>
    </Wrapper>
  );
};

export default Index;
