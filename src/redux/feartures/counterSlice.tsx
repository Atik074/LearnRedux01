import {createSlice} from '@reduxjs/toolkit'

const initialState = {count:0}

 const counterSlice = createSlice({
     name: "counter" ,
     initialState ,
     reducers:{
        increament : (state)=>{
            state.count = state.count + 1 
        },
       decreament: (state )=>{
        state.count = state.count - 1 
       } ,
       increamentByValue : (state , action)=>{
            state.count = state.count + action.payload.value
       }
        
     }

})

export  const  {increament , decreament , increamentByValue } = counterSlice.actions ;
export  default counterSlice.reducer ;