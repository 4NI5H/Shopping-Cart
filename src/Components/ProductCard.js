import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../context/Context";
import "./styles.css";

const ProductCard = ({ product }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(CartContext);

  return (
    <div className="product">
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <span>Price: {product.price}</span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>5 days Delivery</div>
            )}
          </Card.Text>

          {cart.some((c) => c.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                cartDispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: product,
                });
              }}
            >
              Remove from Cart
            </Button>
          ) : product.inStock ? (
            <Button
              variant="primary"
              onClick={() => {
                cartDispatch({
                  type: 'ADD_TO_CART',
                  payload: product,
                });
              }}
            >
              Add to Cart
            </Button>
          ) : (
            <Button variant="danger" disabled>
              Out of Stock
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
