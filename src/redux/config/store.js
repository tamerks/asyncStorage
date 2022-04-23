import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { cityReducer } from '../citySlice';
import { universityReducer } from '../universitySlice';

const rootReducer = combineReducers({
    cityReducer,
    universityReducer
});

export const store = () =>{
    return configureStore({
        reducer:rootReducer
     })     
} 
