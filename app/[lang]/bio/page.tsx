import { getDictionary } from '@/lib/get-dictionary'
import  { Locale } from '@/i18n-config'
import PageTitle from '@/components/page-title/PageTitle'
import Image from 'next/image'
import bioImage from '@/public/bio.jpg';
import cv_pt from '@/public/cv_pt.pdf';
import cv_en from '@/public/cv_en.pdf';
import Link from 'next/link';

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
            src={bioImage}
            alt="Felipe Antonio Miotto with its son" 
          />
        </div>
      </div>
      <div className='mt-10 text-center'>
        <Link 
          target='_blank' 
          href={dictionary['current-locale'] === 'pt' ? '/cv_pt.pdf' : '/cv_en.pdf'}
          rel="noopener noreferrer"
          locale={false} 
          download
        >
          <b>{dictionary.bio.resume}</b>
        </Link>
      </div>
    </main>
  )
}
