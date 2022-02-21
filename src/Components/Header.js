import React, { useContext } from "react";
import {
  Container,
  Navbar,
  Form,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillShopping,
  AiOutlineDelete,
} from "react-icons/ai";
import "./styles.css";
import { CartContext } from "../context/Context";

const Header = () => {
  const {
    cartState: { cart },
    cartDispatch,
    productDispatch
  } = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <AiFillShopping fontSize="25px" style={{ padding: "2px" }} />
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text>
          <Form.Control
            style={{ width: "500px" }}
            type="search"
            placeholder="Search your product..."
            className="m-auto"
            onChange={(e) => {
              productDispatch({
                type: 'SEARCH',
                payload: e.target.value
              })
            }}
          />
        </Navbar.Text>
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success">
            <AiOutlineShoppingCart fontSize="25px" />
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: "250px" }}>
            {cart.length > 0 ? (
              <>
                {cart.map((c) => {
                  return (
                    <span className="cartItem-container">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="cartItem-image"
                      />
                      <div className="cartItem-details">
                        <span>{c.name}</span>
                        <span>{c.price}</span>
                      </div>
                      <AiOutlineDelete
                        fontSize="20px"
                        onClick={() =>
                          cartDispatch({ type: "REMOVE_FROM_CART", payload: c })
                        }
                      />
                    </span>
                  )
                })}
                <Link to="/cart">
                  <Button style={{ width: '90%', padding: '10px' }}>Go to Cart</Button>
                </Link>
              </>
            ) : (
                <span>Cart is Empty!</span>
              )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
