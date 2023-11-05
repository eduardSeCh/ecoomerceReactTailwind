import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function Card (product) {
  const {
    count, setCount,
    openProductDetail,
    setProductToShow, cartProducts,
    setcartProducts,
    openCheckOutSideMenu,
    closeCheckOutSideMenu,
    closeProductDetail
  } = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    closeCheckOutSideMenu()
    openProductDetail()
    setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    setcartProducts([...cartProducts, productData])
    openCheckOutSideMenu()
    closeProductDetail()
    setCount(count + 1)
  }

  return (
    <div
      onClick={() => showProduct(product)}
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {product.category}
        </span>
        <img
          className='w-full h-full object-cove rounded-lg'
          src={product.image}
          alt={product.description}
        />
        <button // btn +
          className='absolute top-0 right-0 flex justify-around items-start bg-white rounded-full m-2 w-7 h-7 font-bold'
          onClick={(event) => addProductsToCart(event, product)}
        >
          <svg xmlns='https://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path fillRule='evenodd' d='M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z' clipRule='evenodd' />
          </svg>
        </button>
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </div>
  )
}

export default Card
