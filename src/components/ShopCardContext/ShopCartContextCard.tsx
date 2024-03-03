import React, { useContext } from "react";
import ShopCartContextItem from "./ShopCartContextItem";
import { ShopCartContext } from "../../store/context/shopCartContext";

const ShopCartContextCard = () => {
  const {items, addCartItem} = useContext(ShopCartContext)
  const handleAddCartItem = () => {
    const productId = Date.now().toString()
    addCartItem({
      productId: productId,
      product: `Product ${productId}`,
      price: +((Math.random() * 10000) + 100).toFixed(2),
    })
  };

  return (
    <div className="app-item app-context">
      <h2>Shop Cart Using Context</h2>
      <button className="btn" onClick={handleAddCartItem}>
        Add Cart Item
      </button>
      <ul className="product">
        {items.length > 0 && items.map(product => (
          <ShopCartContextItem key={product.productId} product={product} />
        ))}
      </ul>
      {items.length === 0 && (
        <h2>No Product from cart</h2>
      )}
    </div>
  );
};

export default ShopCartContextCard;
