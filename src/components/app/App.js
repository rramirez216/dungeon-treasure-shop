import styled from 'styled-components'
import CategoriesContainer from '../CategoriesContainer'
import GlobalStyles from '../GlobalStyles'

const App = () => {
  return (
    <Wrapper>
      <CategoriesContainer />
      <GlobalStyles />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  width: 100%;
  min-height: 100%;
  /* background-color: green; */
`

export default App
