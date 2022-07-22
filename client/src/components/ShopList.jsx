import React from 'react'
import { Outlet } from 'react-router-dom'
import { useShopItemsQuery } from '../store/shopData/shopData'
import ShopListItem from './ShopListItem'

function ShopList() {
  const { isLoading, isError, data } = useShopItemsQuery()

  if (data) {
    const key = 'shop_id'
    const ArrayUniqueByShop = [
      ...new Map(data.map((item) => [item[key], item])).values(),
    ]

    return (
      <div className='container'>
        <div className='shops-layout'>
          <div className='shops-sidebar'>
            {ArrayUniqueByShop.map((item) => (
              <ShopListItem key={item._id} item={item} />
            ))}
          </div>
          <Outlet />
        </div>
      </div>
    )
  }
}

export default ShopList
