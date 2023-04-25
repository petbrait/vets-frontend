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

interface IconButtonProps {
  tab: string;
}

const IconButtonOwner = styled(IconButton)<IconButtonProps>`
  background-color: ${({ tab }) =>
    tab === INFO_TAB.OWNER_INFO && "#4649ff30"} !important;
`;

const IconButtonPet = styled(IconButton)<IconButtonProps>`
  background-color: ${({ tab }) =>
    tab === INFO_TAB.PET_INFO && "#4649ff30"} !important;
`;

const Index = () => {
  const [tab, setTab] = useState<string>(INFO_TAB.OWNER_INFO);

  return (
    <Wrapper>
      <Box mb={2}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip placement="top-start" title="Información del dueño">
            <IconButtonOwner
              tab={tab}
              onClick={() => setTab(INFO_TAB.OWNER_INFO)}
            >
              <Image
                width={20}
                height={20}
                priority
                src={IconUser}
                alt="icon-user"
              />
            </IconButtonOwner>
          </Tooltip>
          <Tooltip placement="top-start" title="Información de la mascota">
            <IconButtonPet tab={tab} onClick={() => setTab(INFO_TAB.PET_INFO)}>
              <Image
                width={20}
                height={20}
                priority
                src={IconPet}
                alt="icon-pet"
              />
            </IconButtonPet>
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
