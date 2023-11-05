import { HiXCircle } from 'react-icons/hi'

function OrderCard ({ title, image, price }) {
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-3'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={image} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-3'>
        <p className='text-lg font-medium'>{price}</p>
        <HiXCircle className='text-2xl cursor-pointer' />
      </div>
    </div>
  )
}

export default OrderCard
