import Link from 'next/link'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between px-20 py-20'>
        <div><Link href="/">Felipe M.</Link></div>
        <div className='flex flex-row justify-between gap-x-4 items-center'>
            <div><Link href="/about">About</Link></div>
            <div>BR</div>
            <div><BsFillMoonFill /></div>
            <div className='text-xl'>+</div>
        </div>
    </div>
  )
}

export default Navbar