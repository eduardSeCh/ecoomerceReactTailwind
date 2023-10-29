function Card (product) {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {product.category}
        </span>
        <img
          className='w-full h-full object-cove rounded-lg'
          src={product.image}
          alt={product.description}
        />
        <div className='absolute top-0 right-0 flex justify-around items-start bg-white rounded-full m-2 w-7 h-7 font-bold'>
          +
        </div>
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light'>{product.title}</span>
        <span className='text-lg font-medium'>${product.price}</span>
      </p>
    </div>
  )
}

export default Card
