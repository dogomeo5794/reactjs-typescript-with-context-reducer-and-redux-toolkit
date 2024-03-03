import React, { useContext } from "react";
import { ShopCartContext, ShopCartData } from "../../store/context/shopCartContext";

const ShopCartContextItem: React.FC<{ product: ShopCartData }> = ({ product }) => {
  const {addQuantity, minusQuantity, removeCartItem} = useContext(ShopCartContext)
  const handleAddQuantity = (e: React.MouseEvent<HTMLSpanElement>) => {
    addQuantity(product)
  }

  const handleMinusQuantity = (e: React.MouseEvent<HTMLSpanElement>) => {
    minusQuantity(product)
  }

  const handleRemoveCartItem = (e: React.MouseEvent<HTMLSpanElement>) => {
    removeCartItem(product)
  }

  return (
    <li className="product-item">
      <div className="product-content-wrapper">
        <div className="product-content">
          <div className="product-id">
            <span>ID</span>
            <span>{product.productId}</span>
          </div>
          <div className="product-name">
            <span>Product</span>
            <span>{product.product}</span>
          </div>
          <div className="product-price">
            <span>Price</span>
            <span>P {product.price}</span>
          </div>
          <div className="product-quantity">
            <span>Quantity</span>
            <span className="product-qty">
              <span className="product-qty-minus" onClick={handleMinusQuantity}>-</span>
              <span className="product-qty-value">{product.quantity}</span>
              <span className="product-qty-add" onClick={handleAddQuantity}>+</span>
            </span>
          </div>
        </div>
        <div className="product-action">
          <button className="btn btn-danger" onClick={handleRemoveCartItem}>Remove</button>
        </div>
      </div>
    </li>
  );
};

export default ShopCartContextItem;
