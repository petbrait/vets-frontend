import styled from "styled-components";
import Box from "@mui/material/Box";
import Dropzone from "react-dropzone";

const Wrapper = styled(Box)`
  background-color: #4649ff05;
  padding: 40px 20px;
  border-radius: 10px;
  border: 1px dashed #4649ff30;
  cursor: pointer;
  & p {
    font-size: 13px;
    text-align: center;
  }
`;

const Index = () => {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <Wrapper>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>
              Arrastre y suelte algunos archivos aquí, o haga clic para
              seleccionar archivos
            </p>
          </div>
        </Wrapper>
      )}
    </Dropzone>
  );
};

export default Index;
