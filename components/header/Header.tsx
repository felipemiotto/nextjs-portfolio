
"use client";
import Link from 'next/link'
import LocaleSwitcher from '../locale-switcher/LocaleSwitcher';
import ThemeSwitcher from '../theme-switcher/ThemeSwitcher';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type HeaderProps = {
  navbarOpen: boolean
  setNavbarOpen: (isOpen: boolean) => void,
}

const Header = ({ navbarOpen, setNavbarOpen }: HeaderProps) => {
  // const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const { theme } = useTheme()

  const [currentTheme, setCurrentTheme] = useState<string>()

  useEffect(() => {
    setCurrentTheme(theme)
  }, [theme])

  return (
    <div className='flex flex-row justify-between px-[8%] py-5 sm:py-8 lg:py-10 text-center'>
      <Link className='self-center text-xl' href="/"><b>Felipe M.</b> </Link>
      <div className='flex flex-row justify-between gap-x-5 items-center'>
          <LocaleSwitcher />

          <ThemeSwitcher />

          <button
          className={`flex top-0 right-0 z-20 relative w-10 h-10 ${currentTheme === 'dark' ? 'text-white' : 'text-black'} focus:outline-none`}
          onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  className={`absolute h-0.5 w-5 bg-${currentTheme === 'dark' ? 'white' : 'black'} transform transition duration-300 ease-in-out ${
                      navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 bg-w ${currentTheme === 'dark' ? 'bg-white' : 'bg-black'} transform transition-all duration-200 ease-in-out ${
                      navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-5 bg-${currentTheme === 'dark' ? 'white' : 'black'} transform transition duration-300 ease-in-out ${
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