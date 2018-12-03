// const ADD_TO_CART = 'ADD_TO_CART';

// export const addToCart = price => ({
//   type: ADD_TO_CART,
//   price
// })

// export default (state = 0, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return state + action.price;
//     default:
//       return state;
//   }
// }






// const ADD_TO_CART = 'ADD_TO_CART';

// export const addToCart = (title, price) => ({
//   type: ADD_TO_CART,
//   item: {
//     title,
//     price
//   }
// });

// export default (state = [], action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [ ...state, action.item ];
//     default:
//       return state;
//   }
// }


const ADD_TO_CART = 'ADD_TO_CART';

const INITIAL_STATE = {
  cartTotal: 0,
  items: []
};

export const addToCart = (title, price) => ({
  type: ADD_TO_CART,
  item: {
    title,
    price
  }
});

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.item],
        cartTotal: (state.cartTotal + action.item.price)
      };
    default:
      return state;
  }
}
