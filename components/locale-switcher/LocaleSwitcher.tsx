"use client";
import { useState } from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation";

function LocaleSwitcher() {
    const [isPtBr, setIsPtBr] = useState<boolean>(true)

    const pathName = usePathname();
    const redirectedPathName = (locale: string) => {
        if(!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    const setCookie = (locale: string) => {
        document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
    }

    const handleLanguageChange = () => {
        setIsPtBr(!isPtBr)
        setCookie(isPtBr ? 'pt' : 'en')
    }

    return (
    <>
        <Link
            href={redirectedPathName(isPtBr ? 'pt' : 'en')}
            onClick={() => handleLanguageChange()}
        >
            {isPtBr ? 'EN' : 'BR'}
        </Link>
    </>
    )
}

export default LocaleSwitcher