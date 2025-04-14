import React from 'react'
import Banner from './Banner'
import Topsell from './Topsell'
import Recommended from './Recommended'
import News from './News'

function Home() {
  return (
    <div>
      <Banner/>
      <Topsell/>
      <Recommended/>
      <News/>
    </div>
  )
}

export default Home
