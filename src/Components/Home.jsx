import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import Navbar from './Navber'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet className="pt-32"></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Home
