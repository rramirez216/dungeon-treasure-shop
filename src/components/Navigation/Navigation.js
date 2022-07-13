import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import { ShoppingCart } from 'react-feather'
import { ReactComponent as ShopLogo } from '../../assets/logo.svg'

const Navigation = () => {
  return (
    <Nav>
      <InnerWrapper>
        <NavLink to='/'>
          <div>
            <Logo />
          </div>
        </NavLink>
        <NavLink to='/shop'>Shop</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='Sign In'>Sign In</NavLink>
        <NavLink to='Cart'>
          <ShoppingCart />
        </NavLink>
      </InnerWrapper>
    </Nav>
  )
}

const Nav = styled.nav`
  min-height: 88px;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  padding: 24px;
`
const InnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: 24px;
  & :nth-child(1) {
    margin-right: auto;
  }
`
const Logo = styled(ShopLogo)`
  width: 64px;
  height: 64px;
`
const NavLink = styled(Link)`
  display: block;
`

export default Navigation
