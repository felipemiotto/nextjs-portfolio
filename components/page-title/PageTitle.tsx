import styles from './styles.module.css'

type PageTitleProps = {
  title: string
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="text-5xl font-[bold] pb-[30px]">
      <h1 className='text-2xl md:text-3xl lg:text-4xl'>{title}</h1>
      <hr className="rounded-[3px] border-[3px] border-solid"/>
    </div>
  )
}

export default PageTitle