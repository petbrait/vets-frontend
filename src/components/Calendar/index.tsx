import { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

const Wrapper = styled(Box)`
  padding: 0 24px;
`;

interface calendarProps {
  type: string;
}

const Index = ({ type }: calendarProps) => {
  const [value, onChange] = useState(new Date());

  const [loading, setLoading] = useState(false);

  return (
    <Wrapper>
      <Calendar onChange={onChange} value={value} />
      <LoadingButton
        sx={{
          marginTop: "30px",
          marginBottom: "25px",
          color: "#fff",
        }}
        size="medium"
        color="primary"
        type="submit"
        loading={loading}
        variant="contained"
      >
        <span>{type === "booking" ? "Reservar" : "Reagendar"}</span>
      </LoadingButton>
    </Wrapper>
  );
};

export default Index;
