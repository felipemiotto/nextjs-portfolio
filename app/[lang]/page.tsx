import SocialMedia from "@/components/social-media/SocialMedia";
import Link from "next/link";

import { getDictionary } from '@/lib/get-dictionary'
import  { Locale } from '@/i18n-config'

export default async function Home(
  { params: {lang}}: { params: { lang: Locale }}
) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="page-content">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-center flex flex-col"><b>{dictionary.home["title-1"]}</b>{dictionary.home["title-2"]}</h1>
        <h2 className="px-[12vw] mt-5">{dictionary.home.subtitle}</h2>
        <div className="flex justify-between mt-20 px-[5vw] md:px-[10vw] mb-20" >
          <Link href={'/bio'}>{dictionary.home["more-about-me"]}</Link>
          <Link href={'/experiences'}>{dictionary.home["see-my-experiences"]}</Link>
        </div>
        <SocialMedia />
    </main>
  )
}
