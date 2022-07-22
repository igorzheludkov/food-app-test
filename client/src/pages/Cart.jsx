import React, { useState, useEffect } from 'react'
import CartItem from '../components/CartItem'
import { remFromCart, addToCart } from '../store/cartNew'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useSubmitOrderMutation } from '../store/shopData/shopData'
import { Outlet, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Cart() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartUpdate)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    adress: '',
    total: '',
    orders: [],
  })
  const cartTotal =
    cart.length > 0 &&
    cart
      .map((i) => i.price)
      .reduce((previousValue, currentValue) => previousValue + currentValue)

  const validation =
    (form.name.length &&
      form.email.length &&
      form.phone.length &&
      form.adress.length) > 2

  const [submitOrder, response] = useSubmitOrderMutation()
  const key = 'name'
  const ArrayUniqueByShop = [
    ...new Map(cart.map((item) => [item[key], item])).values(),
  ].sort((a, b) => (a._id > b._id ? 1 : b._id > a._id ? -1 : 0))

  function formSubmit() {
    validation &&
      submitOrder(form)
        .then((res) => {
          console.log(res)
          routeChange()
        })
        .then((e) => console.log(e))
  }

  const routeChange = () => {
    let path = '/'
    navigate(path)
    window.location.reload()
  }

  useEffect(() => {
    setForm({ ...form, orders: cart, total: cartTotal })
  }, [cart])

  function removeHandler(e) {
    if (e.target.name === 'rem') {
      dispatch(remFromCart(e.target.value))
    } else {
      dispatch(addToCart(e.target.value))
    }
  }

  function formHandler(e) {
    e.target.id === 'name' && setForm({ ...form, name: e.target.value })
    e.target.id === 'email' && setForm({ ...form, email: e.target.value })
    e.target.id === 'phone' && setForm({ ...form, phone: e.target.value })
    e.target.id === 'adress' && setForm({ ...form, adress: e.target.value })
  }

  if (cart.length > 0) {
    return (
      <div className='container'>
        <div className='cart'>
          <div className='cart__inner'>
            <div className='cart__form'>
              <label className='cart__input' htmlFor='name'>
                Ваше ім'я
              </label>
              <input
                type='text'
                id='name'
                value={form.name}
                onChange={formHandler}
              />
              <label className='cart__input' htmlFor='email'>
                Ваш E-mail
              </label>
              <input
                type='email'
                id='email'
                value={form.email}
                onChange={formHandler}
              />
              <label className='cart__input' htmlFor='phone'>
                Ваш номер телефону
              </label>
              <input
                type='text'
                id='phone'
                value={form.phone}
                onChange={formHandler}
              />
              <label className='cart__input' htmlFor='adress'>
                Адреса для доставки
              </label>
              <input
                type='text'
                id='adress'
                value={form.adress}
                onChange={formHandler}
              />
              <div className='cart-total'>
                Загальна сума замовлення: {cartTotal} грн
              </div>
              <button onClick={formSubmit} className='btn' type='submit'>
                Оформити замовлення
              </button>
            </div>
            <div className='cart__items'>
              {ArrayUniqueByShop.map((i, index) => (
                <CartItem
                  key={index}
                  items={i}
                  onClick={removeHandler}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div className='cart-empty'>
          <h1 className='item-food__name'>Ваш кошик пустий</h1>
          <Link to={'/'}>
            <button className='btn btnDef'>Перейти на головну</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Cart
