import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScooterType } from "../service/Scooters";

interface InitialStateType {
    orderList: ScooterType[]
}

const initialState: InitialStateType = {
    orderList: []
}

export const orderSlice = createSlice({
    name: "orderSlice",
    initialState,
    reducers: {
        saveOrderProducts: (state: InitialStateType, action: PayloadAction<ScooterType>) => {
            const id = state.orderList.findIndex((item:ScooterType) => item.id === action.payload.id)
            if(id === -1){
                return{
                    orderList: [...state.orderList, action.payload]
                }
            }
            else{
                state.orderList.splice(id, 1, action.payload)
            }
        }
    }
})