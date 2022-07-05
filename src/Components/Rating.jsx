import React from "react";
import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

const Rating = ({ children }) => {
  return (
    <RatingBoard>
      <Star>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </Star>
      <p style={{ color: "gray", fontWeight: "400" }}>{children}</p>
    </RatingBoard>
  );
};

export default Rating;

const RatingBoard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Star = styled.div`
  color: #fddc4a;
  font-size: 1.5rem;
`;
