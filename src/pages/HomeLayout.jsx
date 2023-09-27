import React from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar } from '../components'
import Loading from './Loading'

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  return (
    <div>
        <Header/>
        <Navbar/>
        {isPageLoading ? 
        <Loading/> : 
        <main className='align-elements'>
        <Outlet/>
        </main>}
    </div>
  )
}

export default HomeLayout