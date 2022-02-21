import React, { useContext, useEffect, useState } from "react";
import { Col, Form, Image, ListGroup, Row, Button } from "react-bootstrap";
import { CartContext } from "../context/Context";

const Cart = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);
  return (
    <div className='cartHome'>
      <ListGroup>
        {cart &&
          cart.map((cartItem) => (
            <ListGroup.Item key={cartItem.id}>
              <Row>
                <Col>
                  <Image
                    src={cartItem.image}
                    alt={cartItem.name}
                    rounded
                    fluid
                  />
                </Col>
                <Col>
                  <span>{cartItem.name}</span>
                </Col>
                <Col md={2}>
                  <span>{cartItem.price}</span>
                </Col>
                <Col>
                  <Form.Control
                    as="select"
                    size="sm"
                    value={cartItem.qty}
                    onChange={(ev) => {
                      cartDispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: cartItem.id,
                          qty: ev.target.value,
                        },
                      });
                    }}
                  >
                    {console.log([...Array(cartItem.inStock).keys()])}
                    {[...Array(cartItem.inStock).keys()].map((c) => {
                      return <option key={c}>{c + 1}</option>;
                    })}
                  </Form.Control>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
      </ListGroup>
      <div className="summary-container">
        <span style={{fontSize:'20px'}}> Subtotal of {cart.length} items</span>
        <br/>
        <span>Total sum: <b>{total}</b></span>
        <br/>
        <Button disabled>Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
