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
      <Title>Información de Laika</Title>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={1.5}>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="pet_name"
              placeholder="Nombre o Apodo"
            />
          </Box>
          <Grid container spacing={1.5} mb={1.5}>
            <Grid item xs={6}>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="race"
                placeholder="Raza"
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="color"
                placeholder="Color"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1.5}>
            <Grid item xs={6}>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="weight"
                placeholder="Peso"
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="size"
                placeholder="Tamaño"
              />
            </Grid>
          </Grid>
          <Box mt={1.5}>
            <Input
              type="text"
              register={register}
              errors={errors}
              keyName="description"
              placeholder="Descripción de Laika"
            />
          </Box>
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
