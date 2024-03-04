import ShopCartReduxItem from "./ShopCartReduxItem";

const ShopCartReduxCard = () => {
  const shopCartItems: any = [];
  const handleAddCartItem = () => {
    // 
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
