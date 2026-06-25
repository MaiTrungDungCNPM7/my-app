import Avatar from "./Avatar";
import ProductCard from "./ProductCard";
import userAvatar from "./assets/user.png"

function App() {
  const products = [
    { id: 1, name: 'Laptop Gaming HP', price: 24500000, image: 'https://hp.widen.net/content/fbe3roj49f/png/fbe3roj49f.png?w=800&h=600&dpi=72&color=ffffff00', inStock: true, category: 'Máy tính' },
    { id: 2, name: 'Chuột không dây Logitech', price: 650000, image: 'https://bizweb.dktcdn.net/100/329/122/products/chuot-gaming-khong-day-logitech-g-pro-x-superlight-2-d9fa496b-1eb8-49e5-a9a1-4c275aa234a3.jpg?v=1775013013570', inStock: false, category: 'Phụ kiện' },
    { id: 3, name: 'Bàn phím cơ AKKO', price: 1850000, image: 'https://akko.vn/wp-content/uploads/2021/10/ban-phim-co-akko-3098b-multi-modes-neon-ava-akkovn.jpg', inStock: true, category: 'Phụ kiện' },
    { id: 4, name: 'Màn hình Dell', price: 8900000, image: 'https://product.hstatic.net/200000722513/product/monitor-ultrasharp-u2424h-gy-gallery-2_4197c0dd87854f26a6f84276613c0a48.png', inStock: true }, // Không truyền category để test giá trị mặc định
  ];

  //Hàm này sẽ xử lý khi click vào nút thêm sản phẩm
  const handleAddToCart = (productName) => {
    alert(`Đã thêm thành công sản phẩm [${productName}] vào giỏ hàng`)
  };

  return (
    <div className="container">
      <h1>Trang cửa hàng đồ công nghệ</h1>
        <Avatar src={userAvatar} name="User" size="lg" />
        <div className="grid">
          {products.map(p => (
            <ProductCard key={p.id} {...p}
            // Truyền hàm xử lý như một prop, và do cần truyền thêm tham số nên ta phải bọc nó trong arrow fucntion ẩn danh
            // Nếu không dùng arrow function thì màn hình sẽ bị alert trước cả khi người dùng thực sự click chuột
            // Ở đây nó tạo ra một hàm mới rỗng, trong trạng thái chờ đợi, người dùng click vào nó mới tạo Closure và xử lý.
            onAddToCart={()=> handleAddToCart(p.name)}
            />
          ))}
        </div>
    </div>
  );
}

export default App;