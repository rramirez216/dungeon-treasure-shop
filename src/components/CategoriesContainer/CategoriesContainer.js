import constants from '../../constants'
import Category from './Category'

import styled from 'styled-components'

const CategoriesContainer = () => {
  return (
    <div>
      {constants.categories.map((value, index) => {
        return <Category key={index} title={value} shop={constants.shopNow} />
      })}
    </div>
  )
}

export default CategoriesContainer
