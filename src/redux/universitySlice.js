import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    universityName: "",    
};

export const universitySlice = createSlice({
    name: "university",
    initialState,
    reducers: {
        changeUniversity: (state, action) => {
            state.universityName = action.payload;
        },
    }
});

export const {changeUniversity} = universitySlice.actions;
export const universityReducer =  universitySlice.reducer;