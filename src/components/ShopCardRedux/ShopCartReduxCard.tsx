import ShopCartReduxItem from "./ShopCartReduxItem";
import { addCartItem } from "../../store/redux/modules/shopCartSlice";
import { useShopCartDispatch, useShopCartSelector } from "../../lib/hooks";

const ShopCartReduxCard = () => {
  const shopCartItems = useShopCartSelector((state) => state.product.items)
  const shopCartDispatch = useShopCartDispatch();
  const handleAddCartItem = () => {
    const productId = Date.now().toString()
    shopCartDispatch(addCartItem({
      productId: productId,
      product: `Product ${productId}`,
      price: +((Math.random() * 10000) + 100).toFixed(2),
    }))
  };

  return (
    <div className="app-item app-redux">
      <h2>Shop Cart Using Redux</h2>
      <button className="btn" onClick={handleAddCartItem}>
        Add Cart Item
      </button>
      <ul className="product">
        {shopCartItems.length > 0 && shopCartItems.map(product => (
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
