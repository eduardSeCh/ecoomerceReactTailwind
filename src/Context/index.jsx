import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Shopping card Increment * quantity
  const [count, setCount] = useState(0)
  const [isProductDetilOpen, setIsProductDetilOpen] = useState(false)

  // Product Detail * open/close
  const openProductDetail = () => setIsProductDetilOpen(true)
  const closeProductDetail = () => setIsProductDetilOpen(false)

  // Product Detail * Show product
  const [productToShow, setProductToShow] = useState({})

  // Shopping card * Add products to cart
  const [cartProducts, setcartProducts] = useState([])

  // Check out side menu * open/close
  const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
  const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true)
  const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetilOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setcartProducts,
        isCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
