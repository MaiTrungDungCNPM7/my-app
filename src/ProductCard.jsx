import Badge from "./Badge";
import './global.css'

function ProductCard({name, price, image, inStock, category = 'Chung', onAddToCart}){
    return(
        <div className='card'>
            <img src={image} alt={name} className="product-img" />
            <span className="category-tag">{category}</span>
            <h3>{name}</h3>
            <p>{price.toLocaleString('vi-VN')}đ</p>

            <Badge
                label={inStock ? 'Còn hàng' : 'Hết hàng'}
                color={inStock ? 'green' : 'red'} 
            />

            <button
                className="btn-add-to-cart"
                onClick={onAddToCart} // Khi click, hàm onAddToCart do component cha App truyền xuống sẽ được gọi => Thực thi ngay tại chỗ => onAddToCart lúc này chính là HandleAddToCart
                disabled={!inStock} // Nếu hết hàng => Trả lại trạng thái inStock  = false => Vô hiệu hóa nút bấm
            >{inStock? 'Thêm vào giỏ' : 'Tạm hết hàng'}</button>
        </div>
    );
}

export default ProductCard;