import { createSlice } from '@reduxjs/toolkit'

const BagSlice = createSlice({
    name: 'bagItems',
    initialState: [],
    reducers: {
        addToBag: (state, { payload }) => {
            state.push(payload)
        },
        removeFromBag: (state, { payload }) => {
            state.filter((item) => item.id !== payload)
        },
    },
})

export const BagActions = BagSlice.actions

export default BagSlice
