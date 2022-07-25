import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'

import ShopMenu from './components/ShopMenu'
import Cart from './pages/Cart'
import OrdersHistory from './pages/OrdersHistory'
import Nav from './components/Nav'
import ShopList from './components/ShopList'

function App() {

  const [cartState, setCartState] = useState([])
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<ShopList />}>
          <Route index element={<ShopMenu type='all' filter={'terramare'} />} />
          <Route path='/:shopId' element={<ShopMenu type='menu' />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/history' element={<OrdersHistory />} />
      </Routes>
    </>
  )
}

export default App
