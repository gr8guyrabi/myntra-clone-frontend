import { useSelector } from 'react-redux'

import PlaceOrderSummary from '../components/PlaceOrderSummary'
import BagItem from '../components/BagItem'

const Bag = () => {
    const bagItems = useSelector((state) => state.bagItems)
    return (
        <>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {bagItems?.map((item) => (
                            <BagItem key={item.id} item={item} />
                        ))}
                    </div>
                    <PlaceOrderSummary />
                </div>
            </main>
        </>
    )
}

export default Bag

{
    /* <script src="../data/items.js"></script>
    <script src="../scripts/index.js"></script>
    <script src="../scripts/bag.js"></script> */
}
