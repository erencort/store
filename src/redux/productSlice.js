import { async } from "@firebase/util";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "product/getProduct",
  async (category) => {
    const res = await axios(`https://fakestoreapi.com/products${category}`);

    return res.data;
  }
);

export const fetchCategories = createAsyncThunk(
  "category/getCategory",
  async () => {
    const res = await axios("https://fakestoreapi.com/products/categories");
    return res.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productItems: [],
    productStatus: "",
    productError: null,
    categories: [],
    categoryStatus: "",
    categoryError: null,
    cart: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
    },
    appendCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.productStatus = "loading";
      state.productError = null;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.productItems = action.payload;
      state.productStatus = "succeed";
    },
    [fetchProducts.rejected]: (state, action) => {
      state.productStatus = "failed";
      state.productError = action.error.message;
    },
    [fetchCategories.pending]: (state, action) => {
      state.categoryStatus = "loading";
      state.categoryError = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.categoryStatus = "succeed";
    },
    [fetchCategories.rejected]: (state, action) => {
      state.categoryStatus = "failed";
      state.categoryError = action.error.message;
    },
  },
});

export default productSlice.reducer;
export const { setCart, appendCart } = productSlice.actions;
