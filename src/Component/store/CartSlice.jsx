import {createSlice}  from '@reduxjs/toolkit'

const initialState=[];
const CartSlice= createSlice({
    name:'Cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload);
        }
        ,
        remove(state,action){
            // filter array me wahi id wala element dalega jiska id brabar nahi hoga, yani hum jo id bheje hain usko array me nahi rakhega uske alawa array me jo id hai us id ka array bnake return kar dega
             return state.filter(item =>item.id !==action.payload);
        }
    }
})

export const {add,remove} =CartSlice.actions;
export default CartSlice.reducer;
