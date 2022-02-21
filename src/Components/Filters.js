import React, { useContext, useState } from "react";
import "./styles.css";
import { Form } from "react-bootstrap";
import Ratings from "./Ratings";
import { CartContext } from "../context/Context";

const Filters = () => {
  const {
    cartState: { cart },
    productState: { sort, byStock, byRating, byFastDelivery },
    productDispatch,
  } = useContext(CartContext);

  // const [ratings, setRatings] = useState(null);

  return (
    <div className="filter-container">
      <span>
        <Form.Check
          type="radio"
          name="group1"
          label="Ascending"
          onChange={(e) => {
            productDispatch({
              type: "SORT_BY_ORDER",
              payload: "lowToHigh",
            });
          }}
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          type="radio"
          name="group1"
          label="Descending"
          onChange={(e) => {
            productDispatch({
              type: "SORT_BY_ORDER",
              payload: "highToLow",
            });
          }}
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          type="checkbox"
          name="group1"
          label="Include Out of Stock"
          onChange={(e) => {
            productDispatch({
              type: "BY_STOCK",
            });
          }}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          type="checkbox"
          name="group1"
          label="Fast Delivery Only"
          onChange={(e) => {
            productDispatch({
              type: "BY_FAST_DELIVERY",
            });
          }}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label>Ratings: </label>
        <Ratings
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "BY_RATING",
              payload: i,
            })
          }
        />
      </span>
    </div>
  );
};

export default Filters;
