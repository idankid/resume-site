import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { About } from "../info/about/About";
import { Education } from "../info/education/Education";
import { Experience } from "../info/experience/Experience";
import { Skills } from "../info/skills/Skills";
import { Languages } from "../info/languages/Languages";
import { Projects } from "../info/Projects/Projects";

const initialState = {
    name:"name",
    number:0,
    direction:-1,
    cards:[
        {title:"About", value:About},
        {title:"Education", value:Education},
        {title:"Experience", value:Experience},
        {title:"Skill", value:Skills},
        {title:"Languages", value:Languages},
        {title:"Projects", value:Projects},
    ]
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
        },
        setDirection:(state, action:PayloadAction<number>)=>{
            state.direction = action.payload
        }
    }
})

export const {setNumber, setName, setDirection} = CarouselSlice.actions;

export default CarouselSlice.reducer;