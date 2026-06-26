import './global.css';

function ShoppingCart({ cart, onRemove }) {
  // Dùng hàm reduce để tính tổng tiền = Giá * Số lượng
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Giỏ hàng</h2>
      
      {cart.length === 0 ? (
        <p className="empty-cart">Giỏ hàng đang trống!</p>
      ) : (
        <ul className="cart-list">
          {cart.map(item => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-info">
                <strong>{item.name}</strong>
                <span>{item.price.toLocaleString('vi-VN')}đ x {item.quantity}</span>
              </div>
              <button 
                className="btn-remove" 
                onClick={() => onRemove(item.id)}
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <span>Tổng cộng:</span>
          <strong>{totalPrice.toLocaleString('vi-VN')}đ</strong>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;