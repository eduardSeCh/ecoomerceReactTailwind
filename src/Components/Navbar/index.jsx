import { HiOutlineShoppingBag } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

function Navbar () {
  const { count } = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'

  const routesLeft = []
  routesLeft.push({ to: '/', label: 'All' })
  routesLeft.push({ to: '/clothes', label: 'Clothes' })
  routesLeft.push({ to: '/electronics', label: 'Electronics' })
  routesLeft.push({ to: '/furnitures', label: 'Furnitures' })
  routesLeft.push({ to: '/toys', label: 'Toys' })
  routesLeft.push({ to: '/others', label: 'Others' })

  const routesRight = []
  routesRight.push({ to: '/my-orders', label: 'My Orders' })
  routesRight.push({ to: '/my-account', label: 'My Account' })
  routesRight.push({ to: '/sign-in', label: 'Sign In' })

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>

      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        {routesLeft.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>teff@platzi.com</li>
        {routesRight.map((route) => (
          <li key={route.to}>
            <NavLink
              to={route.to}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              {route.label}
            </NavLink>
          </li>
        ))}
        <li className='flex content-between items-center'>
          <HiOutlineShoppingBag className='text-lg m-1' /> {count}
        </li>
      </ul>

    </nav>
  )
}

export { Navbar }
