import React from 'react'

function OrdersHistoryItem({ i }) {
  return (
    <div>
      <div className='order-item'>
        <img className='order-img' src={`img/${i.img_link}`} alt='' />
        <div>
          <h4>{i.name}</h4>
          <div>Ресторан {i.shop}</div>
          <div>Ціна: {i.price} грн</div>
        </div>
      </div>
    </div>
  )
}

export default OrdersHistoryItem
