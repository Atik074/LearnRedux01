import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feartures/counterSlice";
import logger from "./midleware/logger";



export const store =configureStore({
      reducer:{
            counter: counterReducer
      },
      middleware : (getdefaulteMidleware) => getdefaulteMidleware().concat(logger)
})

console.log(store.getState())

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch