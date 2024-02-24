import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feartures/counterSlice"


export const store =configureStore({
      reducer:{
            counter: counterReducer
      }
})

console.log(store.getState())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch