import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css'
import { getDictionary } from '@/lib/get-dictionary'
import  { Locale } from '@/i18n-config'

async function Studies(
  { params: {lang}}: { params: { lang: Locale }}
) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="page-content pb-10">
      <div className='flex flex-col'>
        <Link className={styles.disabled} href={'/studies/big-o'}>
          BigO - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/arrays'}>
          Arrays - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/hash-map'}>
          HashMap - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/two-pointer'}>
          Two Pointers - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/stack'}>
          Stack - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/binary-search'}>
          Binary Search - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/sliding-window'}>
          Sliding Window - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/quick-sort'}>
          Quick Sort - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/recurtion'}>
          Recurtion - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/linked-list'}>
          Linked List - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/doubly-linked-list'}>
          Doubly Linked List - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/deque'}>
          DEQUE - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/trees'}>
          Trees - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/tries'}>
          Tries - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/backtracking'}>
          Backtracking - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/heap-priority-queue'}>
          Heap/Priority Queue - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/intervals'}>
          Intervals - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/graph'}>
          Graph - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/dijkstra-algorithm'}>
          Dijkstra Algorithm - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/a-algorithm'}>
          A* Algorithm - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/dynamic-programming'}>
          Dynamic Programming - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/kadanes-algorithm'}>
          Kadane's Algorithm - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/greedy'}>
          Greedy - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/bit-manipoulation'}>
          Bit Manipulation - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/development-patterns'}>
          Development Patterns - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/math-and-geometry'}>
          Math And Geometry - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
        <Link className={styles.disabled} href={'/studies/turtoise-hare-algorithm'}>
          Turtoise Hare Algorithm - <span className={styles.notImplementedYet}>{dictionary.messages['not-implemented-yet']}</span>
        </Link>
      </div>
    </main>
  )
}

export default Studies