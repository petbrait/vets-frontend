import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent } from "@/styles";
import Input from "@/components/Input";
import { Field } from "@/styles";
import LoadingButton from "@mui/lab/LoadingButton";

const Content = styled(Box)`
  padding: 20px;
`;

const Index = () => {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = (dataForm: any) => {
    console.log(dataForm);
  };

  return (
    <Box>
      <Button onClick={() => setOpen(true)} size="small">
        + Agregar meta
      </Button>
      <Dialog
        onClose={() => setOpen(false)}
        open={open}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogContent>
          <DialogTitle sx={{ fontFamily: "Poppins" }}>Agregar meta</DialogTitle>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ padding: "0 20px" }}>
                <Field>
                  <label>Titulo</label>
                  <Input
                    type="text"
                    register={register}
                    errors={errors}
                    keyName="goal_name"
                    placeholder="Titulo de la meta"
                  />
                </Field>
                <Field>
                  <label>Descripción</label>
                  <Input
                    type="text"
                    register={register}
                    errors={errors}
                    keyName="goal_details"
                    placeholder="Escribe los detalles"
                  />
                </Field>
                <LoadingButton
                  sx={{
                    marginTop: "10px",
                    marginBottom: "25px",
                    color: "#fff",
                  }}
                  size="medium"
                  color="primary"
                  type="submit"
                  loading={loading}
                  variant="contained"
                >
                  <span>Agregar meta</span>
                </LoadingButton>
              </Box>
            </form>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Index;
