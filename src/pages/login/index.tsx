import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Input from "@/components/Input";
import LoadingButton from "@mui/lab/LoadingButton";
import Logo from "@/components/Logo";

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled(Box)`
  width: 25%;
  border: 1px solid #cbcbcb;
  border-radius: 10px;
  padding: 40px;
`;

const Index = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (dataForm: any) => {
    console.log(dataForm);
    router.push("/home");
  };

  return (
    <Wrapper>
      <Content>
        <Box>
          <Box mt={2} mb={6} textAlign="center">
            <Logo />
          </Box>
          <Box>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={5}>
                  <Grid item xs={12}>
                    <Input
                      type="email"
                      register={register}
                      errors={errors}
                      keyName="email"
                      placeholder="Correo electronico"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      type="password"
                      register={register}
                      errors={errors}
                      keyName="password"
                      placeholder="Contraseña"
                    />
                  </Grid>
                </Grid>
                <LoadingButton
                  sx={{ marginTop: "30px", color: "#fff" }}
                  size="medium"
                  color="primary"
                  type="submit"
                  loading={loading}
                  variant="contained"
                  fullWidth={true}
                >
                  <span>Entrar</span>
                </LoadingButton>
              </form>
            </Box>
          </Box>
        </Box>
      </Content>
    </Wrapper>
  );
};

export default Index;
