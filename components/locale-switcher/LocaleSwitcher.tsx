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

    return (
    <>
        <Link
            href={redirectedPathName(isPtBr ? 'pt' : 'en')}
            onClick={() => setIsPtBr(!isPtBr)}
        >
            {isPtBr ? 'EN' : 'BR'}
        </Link>
    </>
    )
}

export default LocaleSwitcher