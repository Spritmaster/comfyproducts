import { createSlice } from '@reduxjs/toolkit';
const value = JSON.parse(localStorage.getItem('cart'))



const initialState = {
  cardItem:   value.cardItem ,
  cartTotal: 0,
  shipping: 500,
  subtotalPrice: 0,
  tax: 0,
  orderTotal: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, {payload}) => {
        const item=state.cardItem.find((product) => product.id === payload.id && product.color === payload.color)
        item ? item.amount+=payload.amount : state.cardItem.push(payload)  
    },
    removeProduct:(state, {payload})=>{
     state.cardItem =  state.cardItem.filter((product)=>{
        if(product.cartId !== payload.cartId){
            return product
        }
      })
    },
    updateCart: (state) => {
      let totalPrice = 0;
      let basket = 0;

      state.cardItem.forEach((item) => {
        totalPrice += item.amount * item.price;
        basket += item.amount;
      });
      state.subtotalPrice = totalPrice;
      state.cartTotal = basket;
      state.tax = state.subtotalPrice / 100 
      state.orderTotal = state.subtotalPrice + state.tax + state.shipping
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state) => {
      state.cardItem = []
    },
  },
});

export const { addProduct,  updateCart ,removeProduct ,clearCart } = productsSlice.actions;
export default productsSlice.reducer;