"use client";
import MenuOverlay from '../menu-overlay/MenuOverlay';
import Header from '../header/Header';
import { useState } from 'react'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
    </div>
  )
}

export default Navbar