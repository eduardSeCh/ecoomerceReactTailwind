import { HiXCircle } from 'react-icons/hi'
import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OderCard'
import './style.css'

function CheckOutSideMenu () {
  const {
    isCheckOutSideMenuOpen,
    closeCheckOutSideMenu,
    cartProducts
  } = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${isCheckOutSideMenuOpen ? 'flex' : 'hidden'} scrollable-cards  flex-col fixed scroll-m-10 top-20 right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div onClick={() => closeCheckOutSideMenu()}>
          <HiXCircle className='text-2xl cursor-pointer' />
        </div>
      </div>
      <div className='px-6'>
        {
          cartProducts.map(product => <OrderCard key={product.id} {...product} />)
        }
      </div>

    </aside>
  )
}

export default CheckOutSideMenu
