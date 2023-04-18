import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Patients from "@/components/Patients";
import Calendar from "@/components/Calendar";

const List = styled.ul`
  padding: 0;
  margin: 20px 0;
  & li {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;

interface itemProps {
  active: boolean;
}

const Item = styled.li<itemProps>`
  list-style: none;
  display: inline-block;
  padding: 8px 23px;
  border-radius: 6px;
  font-size: 14px;
  background-color: ${({ active }) => (active ? "#4649ff" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  cursor: pointer;
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: #4649ff;
    color: #fff;
  }
`;

const Index = () => {
  const [renderTab, setRenderTab] = useState(1);

  return (
    <Box mt={5}>
      <List>
        <Item
          onClick={() => setRenderTab(1)}
          active={renderTab === 1 ? true : false}
        >
          Mascotas
        </Item>
        <Item
          onClick={() => setRenderTab(2)}
          active={renderTab === 2 ? true : false}
        >
          Doctores
        </Item>
        <Item
          onClick={() => setRenderTab(3)}
          active={renderTab === 3 ? true : false}
        >
          Calendario
        </Item>
      </List>
      {renderTab === 1 && <Patients />}
      {/* {renderTab === 2 && <Patients />} */}
      {renderTab === 3 && <Calendar />}
    </Box>
  );
};

export default Index;
