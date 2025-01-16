import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScooterType } from "../service/Scooters";
import { AccessoryType } from "../service/Accessory";

interface InitialStateType {
    orderList: ScooterType[],
    accessoryList: AccessoryType[]
}

const initialState: InitialStateType = {
    orderList: [],
    accessoryList: []
}

export const orderSlice = createSlice({
    name: "orderSlice",
    initialState,
    reducers: {
        saveOrderScooters: (state, action: PayloadAction<ScooterType>) => {
            const id = state.orderList.findIndex((item: ScooterType) => item.id === action.payload.id)
            if (id === -1) {
                state.orderList.push(action.payload)
            } else {
                state.orderList[id] = action.payload
            }
        },
        deleteOrderScooters: (state, action: PayloadAction<string>) => {
            const id = state.orderList.findIndex((item: ScooterType) => item.id === action.payload)
            if (id !== -1) {
                state.orderList.splice(id, 1)
            }
        },
        saveOrderProducts: (state, action: PayloadAction<AccessoryType>) => {
            const id = state.accessoryList.findIndex((item: AccessoryType) => item.id === action.payload.id)
            if (id === -1) {
                state.accessoryList.push(action.payload)
            } else {
                state.accessoryList[id] = action.payload
            }
        },
        deleteOrderProducts: (state, action: PayloadAction<string>) => {
            const id = state.accessoryList.findIndex((item: AccessoryType) => item.id === action.payload)
            if (id !== -1) {
                state.accessoryList.splice(id, 1)
            }
        }
    }
})

export const { saveOrderProducts, deleteOrderProducts, saveOrderScooters, deleteOrderScooters } = orderSlice.actions