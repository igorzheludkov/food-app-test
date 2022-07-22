import React from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import { useShopItemsQuery } from "../store/shopData/shopData";


function ShopMenu({type, filter}) {
  const { isLoading, isError, data } = useShopItemsQuery()

  let params = useParams()

  if (data && type === 'menu') {
    const filtered = data.filter((i) => i.shop_id === params.shopId)

    return (
      <div className='foods-layout'>
        {filtered.map((i) => (
          <Product key={i._id} items={i} />
        ))}
      </div>
    )
  } else if (data && type === 'all') {
    const filtered = data.filter((i) => i.shop_id === filter)

    return (
      <div className='foods-layout'>
        {filtered.map((i) => (
          <Product key={i._id} items={i} />
        ))}
      </div>
    )}
}

export default ShopMenu
