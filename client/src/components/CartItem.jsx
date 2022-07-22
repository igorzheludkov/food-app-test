import React from 'react'
import { useSelector } from 'react-redux'

function CartItem({ items, onClick }) {
  const cart = useSelector((state) => state.cartUpdate)

  const countItems = cart.filter((item) => item._id === items._id).length
  return (
    <div className='item-food'>
      <img
        className='item-food__img'
        src={`img/${items.img_link}`}
        alt='pizza'
      />
      <h2 className='item-food__name'>{items.name}</h2>
      <span className='item-food__price'>{items.price * countItems} грн</span>
      <div>
        <button
          name='rem'
          onClick={onClick}
          value={items._id}
          className='btn btnV'
        >
          -
        </button>
        <button className='btn bntQ'>{countItems} шт</button>
        <button
          name='add'
          onClick={onClick}
          value={items._id}
          className='btn btnV'
        >
          +
        </button>
      </div>
    </div>
  )
}

export default CartItem
