import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityName: "",    
};

export const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {
        changeCity: (state, action) => {
            state.cityName = action.payload;
        },
    }
});

export const {changeCity} = citySlice.actions;
export const cityReducer =  citySlice.reducer;