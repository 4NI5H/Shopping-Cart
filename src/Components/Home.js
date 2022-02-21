import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import Filters from "./Filters";
import ProductCard from "./ProductCard";
import "./styles.css";

const Home = () => {
  const {
    cartState: { products },
    productState: { sort, byStock, byRating, byFastDelivery, searchQuery },
  } = useContext(CartContext);

  const transformedPrdoucts = () => {
    let filteredProducts = products;
    if (sort)
      filteredProducts = filteredProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );

    if (!byStock)
      filteredProducts = filteredProducts.filter((prod) => prod.inStock);

    if (byFastDelivery)
      filteredProducts = filteredProducts.filter((prod) => prod.fastDelivery);

    if (byRating)
      filteredProducts = filteredProducts.filter(
        (prod) => prod.ratings >= byRating
      );

    if (searchQuery)
      filteredProducts = filteredProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );

    return filteredProducts;
  };

  return (
    <div className="home-container">
      <Filters />
      <div className="product-container">
        {transformedPrdoucts().map((prod) => {
          return <ProductCard product={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
