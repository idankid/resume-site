import { configureStore } from "@reduxjs/toolkit";
import carouselSlice from "./carousel.Slice";

export const store = configureStore(
    {
        reducer:{
            carousel:carouselSlice
        }
    });

export type RootState = ReturnType<typeof store.getState>
