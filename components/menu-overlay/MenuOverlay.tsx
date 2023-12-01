import React from 'react'
import Link from 'next/link'
import SocialMedia from '../social-media/SocialMedia'

type MenuOverlayProps = {
    navbarOpen: boolean
    setNavbarOpen: (isOpen: boolean) => void
}

const MenuOverlay = ({ navbarOpen, setNavbarOpen }: MenuOverlayProps) => {
  return (
    <nav className={`
        fixed flex left-0 w-full px-10 z-10 h-screen
        bg-gray-900 transform delay-100 transition-all duration-300 
        ${ navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}
    >
        <ul className="w-full flex flex-col text-center mt-10">
            <li className="nav-li flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                <Link
                href="/"
                className="nav-link h-full w-full py-2 text-lg text-white"
                onClick={() => {
                    setNavbarOpen(false);
                }}
                >
                    Home
                </Link>
            </li>
            <li className="nav-li flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                <Link
                href="/bio"
                className="nav-link h-full w-full py-2 text-lg text-white"
                onClick={() => {
                    setNavbarOpen(false);
                }}
                >
                Bio
                </Link>
            </li>
            <li className="nav-li flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                <Link
                href="/experiences"
                className="nav-link h-full w-full py-2 text-lg text-white"
                onClick={() => {
                    setNavbarOpen(false);
                }}
                >
                Experiences
                </Link>
            </li>
            <li className="nav-li flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                <Link
                href="/contact"
                className="nav-link h-full w-full py-2 text-lg text-white"
                onClick={() => {
                    setNavbarOpen(false);
                }}
                >
                Contact
                </Link>
            </li>
            <li className="nav-li flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
                <Link
                href="/studies"
                className="nav-link h-full w-full py-2 text-lg text-white"
                onClick={() => {
                    setNavbarOpen(false);
                }}
                >
                Studies
                </Link>
            </li>
            <li className='mt-16'>
                <SocialMedia />
            </li>
        </ul>        
    </nav>
  )
}

export default MenuOverlay
