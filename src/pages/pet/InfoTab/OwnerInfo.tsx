import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@/components/Input";
import LoadingButton from "@mui/lab/LoadingButton";

const Title = styled(Typography)`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 20px !important;
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
    </Box>
  );
};

export default Index;
