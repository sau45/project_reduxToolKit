import React from 'react'
import { Provider } from 'react-redux'
import Store from '../store/Store'
import  Navbar  from '../navbar/NavbarPanel'
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
   <>
   <Provider store={Store}>
    <Navbar/>
    <main>
        <Outlet/>
    </main>

   </Provider>

   </>
  )
}

export default RootLayout
