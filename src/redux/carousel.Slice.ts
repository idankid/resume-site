import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    name:"name",
    number:0
}

export const CarouselSlice = createSlice({
    name:"Carousel",
    initialState:initialState,
    reducers:{
        setNumber: (state, action: PayloadAction<number>) => {
            state.number = action.payload
        },
        setName: (state, action:PayloadAction<string>)=>{
            state.name = action.payload
        }
    }
})

export const {setNumber, setName} = CarouselSlice.actions;

export default CarouselSlice.reducer;