import PageTitle from "@/components/page-title/PageTitle";
import { getDictionary } from '@/lib/get-dictionary'
import  { Locale } from '@/i18n-config'
import Link from "next/link";
import styles from "./styles.module.css"

export default async function Contact(
  { params: {lang}}: { params: { lang: Locale }}
) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="page-content">
      <PageTitle title={dictionary.contact.title}/>
      <div className="flex md:justify-between flex-col md:flex-row gap-8 pl-4 pr-4">
        <div className="flex flex-col">
          <h2 className={styles.subtitle}>{dictionary.contact.email}</h2>
          <Link href="mailto:felipeamiotto@gmail.com">felipeamiotto@gmail.com</Link>
        </div>
        <div className="flex flex-col">
          <h2 className={styles.subtitle}>{dictionary.contact["social-media"]}</h2>
          <div className="flex flex-col">
            <Link href={'https://www.linkedin.com/in/felipe-a-miotto/'}>
              Linkedin
            </Link>
            <Link href={'https://github.com/felipemiotto'}>
              Github
            </Link>
            <Link href={'https://twitter.com/felipeam_tech'}>
              Twitter
            </Link>        
          </div>
        </div>
      </div>
    </main>
  )
}
