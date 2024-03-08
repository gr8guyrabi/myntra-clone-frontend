import { useSelector } from 'react-redux'

const PlaceOrderSummary = () => {
    const bagItems = useSelector((state) => state.bagItems)

    const CONVINENCE_FEE = 99

    let totalItem = bagItems?.length
    let totalMRP = 0
    let totalDiscount = 0
    let finalPayment = 0

    bagItems.forEach((item) => {
        totalMRP += item.original_price
        totalDiscount += item.original_price * (item.discount_percentage / 100)
    })
    finalPayment = totalMRP - totalDiscount + CONVINENCE_FEE

    return (
        <div className="bag-summary">
            <div className="bag-details-container">
                <div className="price-header">
                    PRICE DETAILS ({totalItem} Items){' '}
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Total MRP</span>
                    <span className="price-item-value">₹{totalMRP}</span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Discount on MRP</span>
                    <span className="price-item-value priceDetail-base-discount">
                        -₹{totalDiscount}
                    </span>
                </div>
                <div className="price-item">
                    <span className="price-item-tag">Convenience Fee</span>
                    <span className="price-item-value">₹{CONVINENCE_FEE}</span>
                </div>
                <hr />
                <div className="price-footer">
                    <span className="price-item-tag">Total Amount</span>
                    <span className="price-item-value">₹{finalPayment}</span>
                </div>
            </div>
            <button className="btn-place-order">
                <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>
    )
}

export default PlaceOrderSummary
