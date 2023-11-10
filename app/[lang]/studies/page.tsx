import Link from 'next/link'
import React from 'react'

function Studies() {
  return (
    <main className="page-content">
      <div className='flex flex-col'>
        <Link href={'/studies/big-o'}>BigO</Link>
        <Link href={'/studies/hash-map'}>HashMap</Link>
      </div>
    </main>
  )
}

export default Studies