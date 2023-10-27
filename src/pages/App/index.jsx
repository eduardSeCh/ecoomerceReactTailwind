import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import './App.css'

const routes = createBrowserRouter([
  { path: '/', element: <Home/> },
  { path: '/my-account', element: <MyAccount/> },
  { path: '/my-order', element: <MyOrder/> },
  { path: '/my-orders', element: <MyOrders/> },
  { path: '/sign-in', element: <SignIn/> },
  { path: '/*', element: <NotFound/> }
])

const App = () => {
  return (
    <>
      <RouterProvider router={routes}/>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>
  )
}

export default App
