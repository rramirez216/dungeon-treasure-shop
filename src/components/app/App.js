import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import CategoriesContainer from '../CategoriesContainer'
import GlobalStyles from '../GlobalStyles'
import Navigation from '../Navigation'

const App = () => {
  return (
    <Wrapper>
      <Navigation />
      <Routes>
        {/* <Route element={<Navigation />} /> */}
        <Route path='/' element={<CategoriesContainer />} />
      </Routes>
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
