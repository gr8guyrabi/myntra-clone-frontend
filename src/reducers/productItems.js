import { createSlice } from '@reduxjs/toolkit'
const ProductItemsSlice = createSlice({
    name: 'productItems',
    initialState: [],
    reducers: {
        storeFetchedItems: (state, { payload }) => {
            return payload
        },
    },
})

export const ProductItemsActions = ProductItemsSlice.actions

export default ProductItemsSlice
