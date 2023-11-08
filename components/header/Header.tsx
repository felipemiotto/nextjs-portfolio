
"use client";
import React from 'react'
import Link from 'next/link'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { useState } from 'react'

type HeaderProps = {
  navbarOpen: boolean
  setNavbarOpen: (isOpen: boolean) => void
}

const Header = ({ navbarOpen, setNavbarOpen }: HeaderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const [isPtBr, setIsPtBr] = useState<boolean>(true)
  
  return (
    <div className='flex flex-row justify-between px-[8%] py-5 sm:py-8 lg:py-10 text-center'>
      <Link className='self-center text-xl' href="/"><b>Felipe M.</b> </Link>
      <div className='flex flex-row justify-between gap-x-5 items-center'>
          <div className='cursor-pointer' onClick={() => setIsPtBr(!isPtBr)}>{isPtBr ? "BR" : "EN"}</div>
          <div className='cursor-pointer' onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? <BsFillMoonFill /> : <BsFillSunFill />}</div>
          <button
          className="flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                      navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                      navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                      navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                  }`}
                ></span>
            </div>
          </button>
      </div>
    </div>
  )
}

export default Header