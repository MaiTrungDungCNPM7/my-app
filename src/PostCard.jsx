// Cách viết chuyên nghiệp hơn bằng Destructuring:
function PostCard({ title, author }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Tác giả: {author}</p>
    </div>
  );
}

export default PostCard;