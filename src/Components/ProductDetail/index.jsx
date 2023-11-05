import { HiXCircle } from 'react-icons/hi'
import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function ProductDetail () {
  const { isProductDetilOpen, closeProductDetail, productToShow } = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${isProductDetilOpen ? 'flex' : 'hidden'} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div onClick={() => closeProductDetail()}>
          <HiXCircle className='text-2xl cursor-pointer' />
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full rounded-lg'
          src={productToShow.image}
          alt={productToShow.description}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>$ {productToShow.price}</span>
        <span className='font-medium text-xl'>{productToShow.title}</span>
        <span className='font-light text-sm'>{productToShow.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
