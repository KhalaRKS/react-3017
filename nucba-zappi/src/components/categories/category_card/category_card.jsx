export const CategoryCard = ({img, title, category}) => {
  return (
    <div>
        <img src={img} alt={category} />
        <h2>{title}</h2>
        <div></div>
    </div>
  )
}
