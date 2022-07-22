import React from 'react'
import { itemAdded } from '../store/cartNew'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

function Product({ items }) {
  const cart = useSelector((state) => state.cartUpdate)
  const countItems = cart.filter((item) => item._id === items._id).length

  const dispatch = useDispatch()

  function itemHandler(e) {
    dispatch(itemAdded(items))
  }

  return (
    <div className='item-food'>
      <img
        className='item-food__img'
        src={`img/${items.img_link}`}
        alt='pizza'
      />
      <h2 className='item-food__name'>{items.name}</h2>
      <span className='item-food__price'>{items.price} грн</span>
      <div className='buttons-block'>
        <button onClick={itemHandler} className='btn btnDef'>
          Додати у кошик
        </button>
        <button className='btn btnV'>{countItems} шт</button>
      </div>
    </div>
  )
}

export default Product
