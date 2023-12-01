import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import { getDictionary } from '@/lib/get-dictionary'
import  { Locale } from '@/i18n-config'
import PageTitle from '@/components/page-title/PageTitle'

async function Studies(
  { params: {lang}}: { params: { lang: Locale }}
) {
  const dictionary = await getDictionary(lang)

  const notImplementedYet = dictionary.messages.notImplementedYet
  
  
  return (
    <main className="page-content pb-10">
      <PageTitle title={dictionary.studies.title}/>

      <div className="flex flex-col">
        <Link className={styles.disabled} href={'/studies/big-o'}>
          {dictionary.studies['big-o']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>
        
        <Link className={styles.disabled} href={'/studies/arrays'}>
          {dictionary.studies.arrays} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/hash-map'}>
          {dictionary.studies['hash-map']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/two-pointer'}>
          {dictionary.studies['two-pointers']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/stack'}>
          {dictionary.studies.stack} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/binary-search'}>
          {dictionary.studies['binary-search']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/sliding-window'}>
          {dictionary.studies['sliding-window']} Window - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/quick-sort'}>
          {dictionary.studies['quick-sort']} Sort - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/recurtion'}>
          {dictionary.studies.recurtion} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/linked-list'}>
          {dictionary.studies['linked-list']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>
        
        <Link className={styles.disabled} href={'/studies/doubly-linked-list'}>
          {dictionary.studies['doubly-linked-list']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/deque'}>
          {dictionary.studies.deque} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/trees'}>
          {dictionary.studies.trees} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/tries'}>
          {dictionary.studies.tries} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/backtracking'}>
          {dictionary.studies.backtracking} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/heap-priority-queue'}>
          {dictionary.studies['heap-priority-queue']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/intervals'}>
          {dictionary.studies.intervals} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/graph'}>
          {dictionary.studies.graph} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/dijkstra-algorithm'}>
          {dictionary.studies['dijkstra-algorithm']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/a-algorithm'}>
          {dictionary.studies['a-algorithm']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/dynamic-programming'}>
          {dictionary.studies['dynamic-programming']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/kadanes-algorithm'}>
          {dictionary.studies['kadanes-algorithm']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/greedy'}>
          {dictionary.studies.greedy} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/bit-manipoulation'}>
          {dictionary.studies['bit-manipulation']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/development-patterns'}>
          {dictionary.studies['development-patterns']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/math-and-geometry'}>
          {dictionary.studies['math-and-geometry']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>

        <Link className={styles.disabled} href={'/studies/turtoise-hare-algorithm'}>
          {dictionary.studies['turtoise-hare-algorithm']} - <span className={styles.notImplementedYet}>{notImplementedYet}</span>
        </Link>
      </div>
    </main>
  )
}

export default Studies