import { ItemCart } from '../components/ItemCart'
// import { useLoaderData } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ItemLoading from '../components/ItemLoading'

const checkIfItemAlreadyExists = (container, item) => {
    const foundItem = container.find(
        (containerItem) => containerItem.id === item.id
    )
    if (foundItem) {
        return true
    }
    return false
}
const Home = () => {
    // const { items } = useLoaderData()
    const bagItems = useSelector((state) => state.bagItems)
    const productItems = useSelector((state) => state.productItems)

    return (
        <main>
            <ItemLoading />
            <div className="items-container">
                {productItems.map((item) => (
                    <ItemCart
                        key={item.id}
                        item={item}
                        alreadyInCart={checkIfItemAlreadyExists(bagItems, item)}
                    />
                ))}
            </div>
        </main>
    )
}

export default Home
