import React from 'react'
import Hero from './Hero'
import Standards from './Standards'
import Compliance from './Compliance'

function page() {
  return (
    <div className="min-h-screen font-quicksand relative">
        <Hero/>
        <Standards/>
        <Compliance/>
    </div>
  )
}

export default page;