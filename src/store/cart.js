const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = price => ({
  type: ADD_TO_CART,
  price
})

export default (state = 0, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state + action.price;
    default:
      return state;
  }
}