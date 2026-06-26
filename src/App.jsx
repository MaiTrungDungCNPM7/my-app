import { useState } from "react";
import Avatar from "./Avatar";
import ProductCard from "./ProductCard";
import userAvatar from "./assets/user.png";
import ShoppingCart from "./ShoppingCart";

function App() {
  const products = [
    { id: 1, name: 'Laptop Gaming HP', price: 24500000, image: 'https://hp.widen.net/content/fbe3roj49f/png/fbe3roj49f.png?w=800&h=600&dpi=72&color=ffffff00', inStock: true, category: 'Máy tính' },
    { id: 2, name: 'Chuột không dây Logitech', price: 650000, image: 'https://bizweb.dktcdn.net/100/329/122/products/chuot-gaming-khong-day-logitech-g-pro-x-superlight-2-d9fa496b-1eb8-49e5-a9a1-4c275aa234a3.jpg?v=1775013013570', inStock: false, category: 'Phụ kiện' },
    { id: 3, name: 'Bàn phím cơ AKKO', price: 1850000, image: 'https://akko.vn/wp-content/uploads/2021/10/ban-phim-co-akko-3098b-multi-modes-neon-ava-akkovn.jpg', inStock: true, category: 'Phụ kiện' },
    { id: 4, name: 'Màn hình Dell', price: 8900000, image: 'https://product.hstatic.net/200000722513/product/monitor-ultrasharp-u2424h-gy-gallery-2_4197c0dd87854f26a6f84276613c0a48.png', inStock: true }, // Không truyền category để test giá trị mặc định
  ];

  const [cart, setCart] = useState([]); // Khởi tạo state cho giỏ hàng ở component cha cao nhất là App()

  //Hàm này sẽ xử lý khi click vào nút thêm sản phẩm
  const handleAddToCart = (product) => {
    setCart((prevCart)=>{
      // Kiểm tra xem sản phẩm đã có trong giỏ chưa (kiểm tra theo quantity)
      const existingItem = prevCart.find(item => item.id === product.id);

      if(existingItem) {
        // Nếu có rồi (quantity > 0) thì sẽ clone mảng và tăng quantity thêm 1
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 }
          : item
        );
      }
      // Nếu chưa có thì truyền cả object product vào mảng mới, thêm cả key : value mới là quantity
      return [...prevCart, { ...product, quantity: 1}];
    })
  };

  // Hàm xóa khỏi giỏ
  const handleRemoveFromCart = (productId) => {
    // Dùng hàm filter lọc ra item không trùng id sẽ bị xóa => Trả về mảng mới không có phần tử đó
    setCart(prevCart=> prevCart.filter(item => item.id !== productId))
  }

  return (
    <div className="container layout-wrapper">
      <div className="main-content">
        <h1>Trang cửa hàng đồ công nghệ</h1>
          <Avatar src={userAvatar} name="User" size="lg" />
          <div className="grid">
            {products.map(p => (
              <ProductCard 
              key={p.id} 
              {...p}
              // Truyền hàm xử lý như một prop, và do cần truyền thêm tham số nên ta phải bọc nó trong arrow fucntion ẩn danh
              // Nếu không dùng arrow function thì màn hình sẽ bị alert trước cả khi người dùng thực sự click chuột
              // Ở đây nó tạo ra một hàm mới rỗng, trong trạng thái chờ đợi, người dùng click vào nó mới tạo Closure và xử lý.
              // Lần này thay vì truyền p.name. giờ ta truyền vào cả object p
              onAddToCart={()=> handleAddToCart(p)}
              />
            ))}
          </div>
      </div>

      {/* Sidebar chứa giỏ hàng */}
      <aside className="sidebar">
            <ShoppingCart cart = {cart} onRemove={handleRemoveFromCart} />
      </aside>
    </div>
  );
}

export default App;