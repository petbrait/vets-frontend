import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@/components/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import Image from "next/image";

const Wrapper = styled(Box)`
  background-color: #fff;
  border-radius: 14px;
  padding: 25px;
`;

const Title = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px !important;
`;

const Race = styled(Typography)`
  font-family: "Jost";
  font-weight: 400;
  font-size: 14px;
  color: #344f64;
`;

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (dataForm: any) => {
    setLoading(true);
    console.log(dataForm);
  };

  return (
    <Wrapper>
      <Box>
        <Title>Información del dueño</Title>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={1.5}>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="full_name"
                placeholder="Nombre y Apellido"
              />
            </Box>
            <Grid container spacing={1.5} mb={1.5}>
              <Grid item xs={6}>
                <Input
                  type="text"
                  register={register}
                  errors={errors}
                  keyName="full_name"
                  placeholder="Correo"
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  type="text"
                  register={register}
                  errors={errors}
                  keyName="full_name"
                  placeholder="Telefono"
                />
              </Grid>
            </Grid>
            <Box mb={1.5}>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="full_name"
                placeholder="Dirección"
              />
            </Box>
            <Grid container spacing={1.5}>
              <Grid item xs={6}>
                <Input
                  type="text"
                  register={register}
                  errors={errors}
                  keyName="full_name"
                  placeholder="Estado"
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  type="text"
                  register={register}
                  errors={errors}
                  keyName="full_name"
                  placeholder="Codigo postal"
                />
              </Grid>
            </Grid>
            <Box>
              <LoadingButton
                sx={{ marginTop: "20px", color: "#fff" }}
                size="medium"
                color="primary"
                type="submit"
                loading={loading}
                variant="contained"
                fullWidth={true}
              >
                <span>Actualizar</span>
              </LoadingButton>
            </Box>
          </form>
        </Box>
        {/* <Stack mt={3} direction="column" spacing={0} alignItems="columns">
        <Tooltip title="Me gusta" placement="left-start">
                <IconButton>
                  <Image
                    width={22}
                    height={22}
                    priority
                    src={IconHeart}
                    alt="icon-heart"
                    data-testid="heart"
                  />
                </IconButton>
              </Tooltip>
        </Stack> */}
      </Box>
    </Wrapper>
  );
};

export default Index;
