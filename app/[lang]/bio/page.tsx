import { getDictionary } from '@/lib/get-dictionary'
import  { Locale } from '@/i18n-config'
import PageTitle from '@/components/page-title/PageTitle'
import Image from 'next/image'
import bioImage from '@/public/bio.jpg';

export default async function Bio(
  { params: {lang}}: { params: { lang: Locale }}
) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="page-content mb-20">
      <PageTitle title={dictionary.bio.title}/>
      <div className='flex flex-col gap-10'>
        <p>{dictionary.bio.text}</p>
        <div className='md:px-10 lg:px-40 xl:px-52'>
          <Image
            objectFit='contain'
            src={bioImage}
            alt="Felipe Antonio Miotto with its son" 
          />
        </div>
      </div>
    </main>
  )
}
