import React from 'react'
import { About, Banner } from '../components'

function Home() {
  return (
    <div style={{
      width: "1400px",
      margin: "0 auto"
    }}>
      <Banner/>
      <About />
    </div>
  )
}

export default Home