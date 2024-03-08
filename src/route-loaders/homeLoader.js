const PORT = 8080
const URL = `http://localhost:${PORT}/items`

export const homeLoader = async () => {
    console.log('hello')
    const res = await fetch(URL)
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
        return { items }
    }
}
