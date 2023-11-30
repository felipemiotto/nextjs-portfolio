type ExperienceCardProps = {
    title: string;
    company: string;
    date: string;
    description: string[];
}

function ExperienceCard({ title, company, date, description }: ExperienceCardProps) {
  return (
    <div className="border-b-2 pb-4 pt-4">
      <div className="flex justify-between flex-col md:flex-row items-center mb-4">
        <b>{company}</b>
        <div className="flex flex-col mt-7">
          <p>{title}</p>
          <p>{date}</p>
        </div>
      </div>
      <ul>
        {description.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default ExperienceCard