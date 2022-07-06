import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  loading: false,
  error: false,
    products: [],
    input: {
        date1: null,
        date2: null
    }
};

const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setItems: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.items = payload;
      },
      setInput: (state, { payload }) => {
          state.input.date1 = payload.date1;
          state.input.date2 = payload.date2;
    },
    setError: (state) => {
      state.error = true;
    },
  },
});

export const { setLoading, setItems, setError, setInput } = ProductSlice.actions;

export const itemsSelector = (state) => state.shop;

export default ProductSlice.reducer;

const api = axios.create({
    baseURL: "http://192.168.0.107:8084/",
    headers : {
        'Content-Type': 'application/json; charset=UTF-8'
    },
  
});

// Fetch all items
export function fetchAllItem() {
  return async (dispatch) => {
    api
      .get("/purchase/getAllProducts?startPosition=1&maxResult=10")
        .then((response) => {
        dispatch(setItems(response?.data?.model));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}


export function SearchProduct(date1 = null, date2 = null) {
  return async (dispatch) => {
    api
        .get("/purchase/getAllProducts", {
            date1: date1,
            date2: date2,
            startPosition: 0,
            maxResult: 20
            
      })
        .then((response) => {
        dispatch(setItems(response?.data?.model));
      })
      .catch((er) => {
        dispatch(setError());
      });
  };
}




