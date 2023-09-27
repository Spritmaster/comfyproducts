import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  HomeLayout,
  Error,
  Landing,
  About,
  Products,
  SingleProduct,
  Cart,
  Login,
  Register,
} from './pages'
import { ErrorElement } from './components'


import {loader as landingLoader  } from './pages/Landing'
import {loader as productsLoader } from './pages/Products'
import {loader as singleProduct  } from './pages/SingleProduct'
import { loader as checkoutLoader } from './pages/Checkout';
import Orders, { loader as ordersLoader } from './pages/Orders';

import { action as registerAction } from './pages/Register';
import { action as checkoutAction } from './components/CheckoutForm';


import { useDispatch, useSelector } from 'react-redux'
import { updateCart } from './redux/fetures/productsSlice'
import Checkout from './pages/Checkout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => {
  const dispatch=useDispatch()
  const items=useSelector((store) =>store.product)
  useEffect(()=>{
    dispatch(updateCart())
  },[updateCart,dispatch,items])

  const routes=createBrowserRouter([
    {
      path:'/',
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Landing/>,
          loader:landingLoader,
          errorElement:<ErrorElement/>
        },
        {
          path:'about',
          element:<About/>,
          errorElement:<ErrorElement/>
        },
        {
          path:'products',
          element:<Products/>,
          loader:productsLoader,
          errorElement:<ErrorElement/>
        },
        {
          path: "singleProduct/:id",
          element: <SingleProduct />,
          loader:singleProduct,
          errorElement:<ErrorElement/>
        },
        {
          path:'cart',
          element:<Cart/>,
          errorElement:<ErrorElement/>
        },
        {
          path: 'checkout',
          element: <Checkout />,
          loader: checkoutLoader(),
          action: checkoutAction( queryClient),
        },
        {
          path: 'orders',
          element: <Orders />,
          loader: ordersLoader( queryClient),
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<Error/>, 
    },
    {
      path:'/register',
      element:<Register/>,
      
      errorElement:<Error/>, 
      action:registerAction,

    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App