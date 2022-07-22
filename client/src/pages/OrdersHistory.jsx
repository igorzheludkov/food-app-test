import React, { useState } from 'react'
import OrdersHistoryItem from '../components/OrdersHistoryItem'
import { useOrdersHistoryQuery } from '../store/shopData/shopData'

function Cart() {
  const [searchInput, setSearchInput] = useState('')
  const [findOrders, setFindOrders] = useState([])

  const { isLoading, isError, data } = useOrdersHistoryQuery(findOrders)
  function searchHandler() {
    setFindOrders(searchInput)
  }

  if (data) {
    if (data.length > 0) {
      return (
        <div className='container'>
          <div className='orders-history'>
            <h3 className='orders-title'>Введіть номер телефону для пошуку</h3>
            <input
              type='text'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className='btn' onClick={searchHandler}>
              Пошук
            </button>
            {data.map((i, index) => (
              <div className='user-inner'>
                <h4>Знайдено користувача</h4>
                <div className='user-order'>Ім'я: {i.name}</div>
                <div className='user-order'>Телефон: {i.phone}</div>
                <div className='user-order'>Адреса доставки: {i.adress}</div>
                <div className='order-title'>
                  <h4>Замовлення:</h4>
                </div>
                {i.orders.map((item) => (
                  <OrdersHistoryItem i={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className='container'>
        <div className='orders-history'>
          <h3 className='orders-title'>Введіть номер телефону для пошуку</h3>
          <input
            type='text'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className='btn' onClick={searchHandler}>
            Пошук
          </button>
        </div>
      </div>
    )
  }
}

export default Cart
