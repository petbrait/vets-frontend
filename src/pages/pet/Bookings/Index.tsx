import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookingCard from "./BookingCard";
import Stack from "@mui/material/Stack";
import AddBooking from "./AddBooking";
import { PROPS } from "@/constants/props";

const HeaderInfo = styled(Box)`
  display: grid;
  grid-template-columns: 25% 15% 20% 20% 20%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  align-items: flex-end;
  justify-items: flex-start;
  padding: 10px 10px 10px 30px;
  & div p {
    font-size: 12px;
    line-height: 120%;
    color: #727f88;
    padding: 0 27px 0 0;
    margin-bottom: 5px;
  }
`;

const Table = styled(Box)`
  margin-top: 0px;
`;

const Title = styled(Typography)`
  font-size: 18px !important;
  font-weight: 500 !important;
`;

const Index = () => {
  const data = [
    {
      session: "Follow Up Session · 2/4",
      date: "Oct, 11, 2022",
    },
    {
      session: "Follow Up Session · 2/4",
      date: "Oct, 11, 2022",
    },
  ];

  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Title>2 Sesiones</Title>
        <Box>
          <AddBooking type={PROPS.BOOKING}>+ Agendar una cita </AddBooking>
        </Box>
      </Stack>
      <Box mt={2}>
        <Table>
          <HeaderInfo>
            <div>
              <p>Session</p>
            </div>
            <div>
              <p>Date</p>
            </div>
          </HeaderInfo>
          {data.map((item) => (
            <BookingCard {...item} />
          ))}
        </Table>
      </Box>
    </Box>
  );
};

export default Index;
