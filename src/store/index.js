import { configureStore } from '@reduxjs/toolkit'
import { Bag, FetchStatus, ProductItems } from '../reducers'

const Store = configureStore({
    reducer: {
        bagItems: Bag.reducer,
        fetchStatus: FetchStatus.reducer,
        productItems: ProductItems.reducer,
    },
})

export default Store
