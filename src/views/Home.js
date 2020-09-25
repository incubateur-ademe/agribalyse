import React from 'react'

import Presentation from './home/Presentation'
import Video from './home/Video'
import Categories from './home/Categories'
import Examples from './home/Examples'
import Contact from './home/Contact'

export default function Home(props) {
  return (
    <>
      <Presentation />
      <Video />
      <Categories categories={props.categories} />
      <Examples />
      <Contact />
    </>
  )
}
