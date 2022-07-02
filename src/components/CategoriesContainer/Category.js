const Category = ({ title = 'title', shop = 'Shop Now' }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{shop}</p>
      </div>
    </div>
  )
}

export default Category
