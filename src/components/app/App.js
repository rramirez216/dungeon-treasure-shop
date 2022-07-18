import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import CategoriesContainer from '../CategoriesContainer'
import GlobalStyles from '../GlobalStyles'
import Navigation from '../Navigation'
import SignIn from '../SignIn'

const App = () => {
  return (
    <Wrapper>
      <Navigation />
      <Routes>
        {/* <Route element={<Navigation />} /> */}
        <Route path='/' element={<CategoriesContainer />} />
        <Route path='/signin' element={<SignIn />} />
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
