import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("product/getProduct", async () => {
  const res = await axios(`https://fakestoreapi.com/products`);

  return res.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    status: "",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "succeed";
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default productSlice.reducer;
