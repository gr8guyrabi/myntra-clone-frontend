import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductItemsActions, FetchStatusActions } from '../actions'

const PORT = 8080
const URL = `http://localhost:${PORT}/items`

const fetchItems = async (signal) => {
    const res = await fetch(URL, { signal })
    if (res.status === 200) {
        const data = await res.json()
        const items = data?.items.map((item) => {
            const arr = item
            arr.current_price = (
                item.original_price -
                Math.round(
                    (item.original_price * item.discount_percentage) / 100
                )
            ).toFixed(2)
            return arr
        })
        return await items
    }
}

const ItemLoading = () => {
    const productItems = useSelector((state) => state.productItems)
    const { fetchDone, currentlyFetching } = useSelector(
        (state) => state.fetchStatus
    )
    const dispatch = useDispatch()
    useEffect(() => {
        if (!currentlyFetching && fetchDone) return
        if (!productItems || (productItems && !productItems.length)) {
            dispatch(FetchStatusActions.markFetchingStarted())
            const controller = new AbortController()
            const signal = controller.signal
            fetchItems(signal)
                .then((items) => {
                    dispatch(ProductItemsActions.storeFetchedItems(items))
                    dispatch(FetchStatusActions.markFetchDone())
                    dispatch(FetchStatusActions.markFetchingFinished())
                })
                .catch((error) => {
                    console.error(error)
                    // dispatch(FetchStatusActions.markFetchingFinished())
                })
            return () => {
                controller.abort()
            }
        }
    }, [fetchDone, currentlyFetching])

    if (!currentlyFetching && fetchDone) return

    return (
        <div className="d-flex justify-content-center spinner-container">
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default ItemLoading
