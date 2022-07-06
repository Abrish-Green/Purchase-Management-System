import { configureStore } from "@reduxjs/toolkit";
import purchaseReducer from './Services/Redux/Purchase';
export const store = configureStore({
    reducer: {
        product: purchaseReducer
    }
})