import React from "react";
import styled, { css } from "styled-components";
import IconCalendar from "@/assets/icons/calendar.svg";
import IconChat from "@/assets/icons/chat.svg";
import Image from "next/image";

const Wrapper = styled.div`
  position: relative;
  width: 100px;
  margin: 50px auto 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div {
    cursor: pointer;
  }
`;

const Icon = styled(Image)`
  position: relative;
  z-index: 2;
  padding: 10px;
  width: 25px;
  height: 25px;
`;

interface ActiveTabProps {
  isActive: number;
}

const ActiveTab = styled.div<ActiveTabProps>`
  position: absolute;
  ${({ isActive }) =>
    (isActive === 1 &&
      css`
        left: 2.5px;
      `) ||
    (isActive === 2 &&
      css`
        left: 53px;
      `) ||
    (isActive === 3 &&
      css`
        left: 100px;
      `)}
  background-color: #4649ff30;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  z-index: 1;
  transition: left 0.2s ease-out;
`;

interface HeaderTabProps {
  renderTab: number;
  setRenderTab: any;
}

export const Header = ({ renderTab, setRenderTab }: HeaderTabProps) => {
  return (
    <Wrapper>
      <ActiveTab isActive={renderTab} />
      <Content>
        <div>
          <Icon src={IconCalendar} alt="" onClick={() => setRenderTab(1)} />
        </div>
        <div>
          <Icon src={IconChat} alt="" onClick={() => setRenderTab(2)} />
        </div>
      </Content>
    </Wrapper>
  );
};
