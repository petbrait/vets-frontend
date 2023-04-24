import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import IconCamera from "@/assets/icons/video.svg";
import IconCalendar from "@/assets/icons/calendar.svg";
import IconCheck from "@/assets/icons/check.svg";
import AddBooking from "./AddBooking";

const Card = styled.div`
  display: grid;
  grid-template-columns: 25% 15% 20% 20% 20%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: flex-start;
  background-color: #fafaff;
  margin-bottom: 20px;
  padding: 15px 10px 15px 30px;
  border-radius: 8px;
  cursor: pointer;

  & div {
    & p {
      display: inline-block;
      margin: 0;
      font-size: 12.5px;
    }
    & a {
      text-decoration: none;
      color: #161721;
      font-size: 12.5px;
      font-weight: 400;
    }
    & img {
      vertical-align: middle;
      margin-right: 5px;
      margin-top: -2px;
    }
    & span {
      margin: 0;
      color: #727f88;
      font-size: 12.5px;
    }
  }
`;

interface bookingCardProps {
  session: string;
  date: string;
}

const BookingCard = ({ session, date }: bookingCardProps) => {
  return (
    <Card>
      <div>
        <p>{session}</p>
      </div>
      <div>
        <span>{date}</span>
      </div>
      <div>
        <Image
          width={14}
          height={14}
          priority
          src={IconCamera}
          alt="icon-camera"
        />
        <Link href="/home">Start session</Link>
      </div>
      <div>
        <AddBooking type="reschedule">
          <Image
            width={14}
            height={14}
            priority
            src={IconCalendar}
            alt="icon-calendar"
          />
          <p>Reschedule</p>
        </AddBooking>
      </div>
      <div>
        <Image
          width={14}
          height={14}
          priority
          src={IconCheck}
          alt="icon-check"
        />
        <span>Confirmed</span>
      </div>
    </Card>
  );
};

export default BookingCard;
