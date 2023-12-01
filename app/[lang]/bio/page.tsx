import { getDictionary } from '@/lib/get-dictionary'
import  { Locale } from '@/i18n-config'
import PageTitle from '@/components/page-title/PageTitle'

export default async function Bio(
  { params: {lang}}: { params: { lang: Locale }}
) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="page-content">
      <PageTitle title={dictionary.bio.title}/>
      <p>{dictionary.bio.text}</p>
    </main>
  )
}
