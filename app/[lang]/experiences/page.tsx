import ExperienceCard from '@/components/experience-card/ExperienceCard'
import PageTitle from '@/components/page-title/PageTitle'
import  { Locale } from '@/i18n-config'
import { getDictionary } from '@/lib/get-dictionary'


export default async function Experiences(
  { params: {lang}}: { params: { lang: Locale }}
) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="page-content">
      <PageTitle title={dictionary.experiences.title}/>
      <div className='mb-20'>        
        {dictionary.experiences.jobs.map((job, key) => 
          <ExperienceCard 
            key={key}
            company={job.company}
            date={job.date}
            description={job.description}
            title={job.title} 
          />
        )}
      </div>
    </main>
  )
}
