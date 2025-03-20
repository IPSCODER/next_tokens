import DummyData from '@/components/layout/DummyData'
import React, { Suspense } from 'react'

const DummDataPage = () => {
  return (
    <>
    <Suspense fallback={<h1>Loading...</h1>} >
    <DummyData/>
    </Suspense>
    </>
  )
}

export default DummDataPage