import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import logo from './img/logo.png'
import cartLogo from './img/cart.png'
import historyLogo from './img/history.png'

function Nav() {
  const cart = useSelector((state) => state.cartUpdate)
  const cartTotal = cart.length > 0 && cart
    .map((i) => i.price)
    .reduce((previousValue, currentValue) => previousValue + currentValue)

  return (
    <>
      <nav className='nav'>
        <Link className='nav__item' to={'/'}>
          <img className='logo' src={logo} alt='' />
        </Link>
        <div className='nav__cart'>
          <Link className='nav__item' to={'/history'}>
            <div className='orders-history-nav'>
              <img className='orders-history-img' src={historyLogo} alt='' />
              <h6>
                Історія<br></br> замовлень
              </h6>
            </div>
          </Link>
          <Link
            style={cart.length <= 0 ? { pointerEvents: 'none' } : {}}
            className='nav__item'
            to='/cart'
          >
            <div className='cart-link'>
              <img className='cart-logo' src={cartLogo} alt='' />
              <div className={cart.length > 0 ? 'nav-total-price' : ''}>{cartTotal ? `${cartTotal} грн` : ''}</div>
            </div>
          </Link>
          
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Nav
