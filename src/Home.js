import React from 'react'
import Image from './Image'
import Body from './Body'

function Home(){
  const body = "Your one donation can change the lives of many..."
  return(
    <div>
    <Image />
    <Body body = {body} />
    </div>
    )
}

export default Home;