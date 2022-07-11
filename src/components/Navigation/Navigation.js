import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as ShopLogo } from '../../assets/logo.svg'

const Navigation = () => {
  return (
    <nav>
      <div>
        <Logo />
      </div>
      <Link to='/shop'>Shop</Link>
    </nav>
  )
}

const Logo = styled(ShopLogo)`
  width: 64px;
  height: 64px;
`

export default Navigation
