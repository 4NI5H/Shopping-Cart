import React, { createContext, useReducer } from 'react'
import faker from "faker";
import  { CartReducer, productFilterReducer } from './reducers';

export const CartContext = createContext();
faker.seed(99);

const Context = ({children}) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));

    const [cartState, cartDispatch] = useReducer(CartReducer, {
      products,
      cart: [],
    });


    const [productState, productDispatch] = useReducer(productFilterReducer, {
        sort: "",
        byRating: 0,
        byStock: false,
        byFastDelivery: false,
        searchQuery: ""
    })

    return (
        <CartContext.Provider value= { { cartState , cartDispatch, productState, productDispatch}}> 
        {children}
        </CartContext.Provider>
    )
}

export default Context
