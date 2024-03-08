import { useDispatch } from 'react-redux'
import { BagActions } from '../actions'
import { IoBagAdd } from 'react-icons/io5'
import { RiDeleteBin5Fill } from 'react-icons/ri'

export const ItemCart = ({ item, alreadyInCart }) => {
    const dispatch = useDispatch()
    const handleAddToBag = () => {
        dispatch(BagActions.addToBag(item))
    }
    const handleRemoveFromBag = () => {
        dispatch(BagActions.removeFromBag(item.id))
    }
    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">
                    ({item.discount_percentage}% OFF)
                </span>
            </div>
            {!alreadyInCart ? (
                <button className="btn-add-bag" onClick={handleAddToBag}>
                    <IoBagAdd /> Add to Bag
                </button>
            ) : (
                <button
                    className="btn-remove-bag"
                    onClick={handleRemoveFromBag}
                >
                    <RiDeleteBin5Fill /> Remove from Bag
                </button>
            )}
        </div>
    )
}
