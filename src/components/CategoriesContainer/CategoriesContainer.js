import constants from '../../constants'
import Category from './Category'

import styled from 'styled-components'

const CategoriesContainer = () => {
  return (
    <CategoryWrapper>
      {constants.categories.map((value, index) => {
        return <Category key={index} title={value.title} />
      })}
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 240px 240px;
  gap: 8px;
  & :nth-child(4) {
    grid-column: span 3;
  }
  & :nth-child(5) {
    grid-column: span 3;
  }
`

export default CategoriesContainer
