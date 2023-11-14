import { categories } from "../../../data/categories"
import { CategoryCard } from "../category_card/category_card"
import { CategoriasContainer, CategoriasWrapper } from "./styles"
export const CategoryWidget = () => {
  return (
    <CategoriasWrapper>
        <h2>Categorias</h2>
        <CategoriasContainer>
          {
            categories.map((item) => <CategoryCard key={item.id} {...item}/>)
          }  
        </CategoriasContainer>
    </CategoriasWrapper>
  )
}
