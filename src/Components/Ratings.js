import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Ratings = ({ rating, onClick }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span onClick={() => onClick(i + 1)} key={i}>
          {rating > i ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </>
  );
};

export default Ratings;
