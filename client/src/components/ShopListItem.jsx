import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  useShopItemsQuery,
  useSubmitOrderMutation,
} from '../store/shopData/shopData'

function ShopListItem({ item }) {
  const cart = useSelector((state) => state.cartUpdate)

  const elemDisabled = { pointerEvents: 'none', opacity: 0.5 }

  const cartIsEmpty = !Boolean(cart.length > 0)

  let categoryInCart = !cartIsEmpty && cart[0].shop_id === item.shop_id

  function styleActive() {
    if (cartIsEmpty === categoryInCart) {
      return elemDisabled
    }
  }

  return (
    <div style={styleActive()} className='shop-item' key={item._id}>
      <NavLink to={`/${item.shop_id}`}>{item.shop}</NavLink>
    </div>
  )
}

export default ShopListItem
