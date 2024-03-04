import ShopCartContextItem from "./ShopCartContextItem";

const ShopCartContextCard = () => {
  const items: any = []
  const handleAddCartItem = () => {
    // 
  };

  return (
    <div className="app-item app-context">
      <h2>Shop Cart Using Context</h2>
      <button className="btn" onClick={handleAddCartItem}>
        Add Cart Item
      </button>
      <ul className="product">
        {items.length > 0 && items.map((product: any) => (
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
