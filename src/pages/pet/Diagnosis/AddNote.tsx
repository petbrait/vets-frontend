import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Input from "@/components/Input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Field } from "@/styles";

const ContentTitle = styled(Box)`
  padding: 0 35px 16px;
  border-bottom: 1px solid #d1d1d1;
`;

const Title = styled(Typography)`
  font-size: 16px !important;
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
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={10}>
            <Field>
              <label>Nota</label>
              <Input
                type="text"
                register={register}
                errors={errors}
                keyName="medicine"
                placeholder="Escribe una nota"
              />
            </Field>
          </Grid>
          <Grid item xs={2}>
            <Button sx={{ marginTop: 2 }} size="small">
              + Agregar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Index;
