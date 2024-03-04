import { useShopCartDispatch, useShopCartSelector } from "../../lib/hooks";
import { addItem } from "../../store/redux/modules/shopCartSlice";
import ShopCartReduxItem from "./ShopCartReduxItem";

const ShopCartReduxCard = () => {
  const shopCartItems = useShopCartSelector(state => state.cart.items)
  const dispatch = useShopCartDispatch();
  const handleAddCartItem = () => {
    const productId = Date.now()
    dispatch(addItem({
      productId: productId,
      product: `Product ${productId}`,
      price: +((Math.random() * 1000) + 100).toFixed(2)
    }))
  };

  return (
    <div className="app-item app-redux">
      <h2>Shop Cart Using Redux</h2>
      <button className="btn" onClick={handleAddCartItem}>
        Add Cart Item
      </button>
      <ul className="product">
        {shopCartItems.length > 0 && shopCartItems.map((product: any) => (
          <ShopCartReduxItem key={product.productId} product={product} />
        ))}
      </ul>

      {shopCartItems.length === 0 && (
        <h2>No Product from cart</h2>
      )}
    </div>
  );
};

export default ShopCartReduxCard;
