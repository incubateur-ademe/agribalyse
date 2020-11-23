import React from 'react'

export default React.createContext({
  lang: null,
  setLang: () => {},
  translations: null,
  translate: () => {}
})
