import Link from 'next/link'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai'
import { FaXTwitter } from 'react-icons/fa6'


function SocialMedia() {
  return (
    <div className="flex justify-center gap-6">
        <Link href={'https://www.linkedin.com/in/felipe-a-miotto/'}>
            <AiFillLinkedin />
        </Link>
        <Link href={'https://github.com/felipemiotto'}>
            <AiFillGithub />
        </Link>
        <Link href={'https://twitter.com/felipeam_tech'}>
            <FaXTwitter />
        </Link>
    </div>
  )
}

export default SocialMedia