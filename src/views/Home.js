import React from 'react'

import I18nProvider from 'components/providers/I18nProvider'

import Landing from './home/Landing'
import Presentation from './home/Presentation'
import Video from './home/Video'
import Categories from './home/Categories'
import Examples from './home/Examples'
import Contact from './home/Contact'

export default function Home() {
  return (
    <I18nProvider>
      <Landing />
      <Presentation />
      <Video />
      <Categories />
      <Examples />
      <Contact />
    </I18nProvider>
  )
}
