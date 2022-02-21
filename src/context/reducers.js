export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const productFilterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY_ORDER":
      return { ...state, sort: action.payload };
    case "BY_STOCK":
      return { ...state, byStock: !state.byStock };
    case "BY_RATING":
      return { ...state, byRating: action.payload };
    case "BY_FAST_DELIVERY":
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case "SEARCH":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
