import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";

import Image from "next/image";
import IconArrow from "@/assets/icons/arrow.svg";
import IconButton from "@mui/material/IconButton";

import { type Patient } from "@/types";

const Title = styled(Typography)`
  font-size: 19px !important;
  font-weight: 500 !important;
`;

const Description = styled(Typography)`
  font-size: 13px !important;
  font-weight: 400 !important;
`;

const TitleCongragulations = styled(Typography)`
  margin-bottom: 20px !important;
  font-size: 25px !important;
  font-weight: 400 !important;
`;

const InfoCongragulations = styled(Typography)`
  margin-bottom: 15px !important;
  font-size: 14px !important;
  font-weight: 400 !important;
`;

interface props {
  patient: Patient;
  setPatientSelected: any;
}

const Index = ({ patient, setPatientSelected }: props) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const assignmentConfirmation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setConfirmed(true);
    }, 2000);
  };

  return (
    <Box>
      {!confirmed ? (
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton onClick={() => setPatientSelected(null)}>
              <Image
                width={16}
                height={16}
                priority
                src={IconArrow}
                alt="icon-arrow"
              />
            </IconButton>
            <Title>Asignación de {patient?.name}</Title>
          </Stack>
          <Box mt={2} mb={4}>
            <Description>
              Al confirmar la asignación, {patient?.name} sera tu paciente de
              ahora en adelante y podra tener todos los beneficios.
            </Description>
          </Box>
          <LoadingButton
            size="medium"
            color="primary"
            type="submit"
            loading={loading}
            variant="contained"
            fullWidth={true}
            onClick={assignmentConfirmation}
          >
            <span>Confirmar asignación 👉🏻</span>
          </LoadingButton>
        </Box>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <TitleCongragulations>Wohooo! 🎉</TitleCongragulations>
          <InfoCongragulations>
            Ahora {patient?.name} es parte de tu lista de pacientes, recuerdale
            al dueño cuales son los grandes beneficios que tienes para el usando
            Petbrait
          </InfoCongragulations>
          <Button onClick={() => router.push("/pet/8768762")}>
            Ver carnet médico 👉🏻
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Index;
