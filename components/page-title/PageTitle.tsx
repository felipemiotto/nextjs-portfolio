import styles from './styles.module.css'

type PageTitleProps = {
  title: string
}

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <hr className={styles.separator}/>
    </div>
  )
}

export default PageTitle