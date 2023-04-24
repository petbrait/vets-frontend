import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Input from "@/components/Input";
import { Field } from "@/styles";
import LoadingButton from "@mui/lab/LoadingButton";

const ContentTitle = styled(Box)`
  padding: 0 35px 16px;
  border-bottom: 1px solid #d1d1d1;
`;

const Title = styled(Typography)`
  margin: 0;
  font-size: 20px;
`;

const Content = styled(Box)`
  margin-top: 20px;
  padding: 0 35px;
`;

const Footer = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  paddingTop: 2,
  paddingBottom: 3,
};

interface modalFormProps {
  what: string;
  keyName: string;
  submit: (props: any) => void;
}

const Index = ({ what, keyName, submit }: modalFormProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (dataForm: any) => {
    setLoading(true);
    submit(dataForm);
  };

  return (
    <Box>
      <Button onClick={handleOpen} size="small">
        + Agregar {what}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>
            <ContentTitle>
              <Title>Agregar {what}</Title>
            </ContentTitle>
            <Content>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                  <Field>
                    <label>Titulo</label>
                    <Input
                      type="text"
                      register={register}
                      errors={errors}
                      keyName={`${keyName}_name`}
                      placeholder={`Titulo de la ${what}`}
                    />
                  </Field>
                  <Field>
                    <label>Descripción</label>
                    <Input
                      type="text"
                      register={register}
                      errors={errors}
                      keyName={`${keyName}_details`}
                      placeholder="Escribe los detalles"
                    />
                  </Field>
                  <Footer>
                    <Box>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box>
                          <Button onClick={handleClose}>Cancelar</Button>
                        </Box>
                        <Box>
                          <LoadingButton
                            sx={{
                              color: "#fff",
                            }}
                            size="medium"
                            color="primary"
                            type="submit"
                            loading={loading}
                            variant="contained"
                          >
                            <span>Agregar 💪🏻</span>
                          </LoadingButton>
                        </Box>
                      </Stack>
                    </Box>
                  </Footer>
                </Box>
              </form>
            </Content>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Index;
