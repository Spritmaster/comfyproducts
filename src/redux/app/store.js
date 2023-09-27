import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../fetures/productsSlice";
import userSlice from "../fetures/userSlice";

export const store =configureStore({
  reducer:{
    product:productsSlice,
    userInfo:userSlice
  }
})