import React, { useState, useEffect } from 'react'

import I18nContext from 'utils/i18nContext'

export default function I18n(props) {
  const [translations, setTranslations] = useState()
  useEffect(() => {
    fetch('/data/translations.json')
      .then(res => res.json())
      .then(res => setTranslations(res))
  }, [])

  const [lang, setLang] = useState(localStorage.getItem('language') || 'fr')

  const translate = sentence =>
    translations
      ? translations[sentence] && translations[sentence][lang]
        ? translations[sentence][lang]
        : sentence
      : ''

  return (
    <I18nContext.Provider
      value={{
        lang,
        setLang: lang => {
          localStorage.setItem('language', lang)
          setLang(lang)
        },
        translations,
        translate
      }}
    >
      {props.children}
    </I18nContext.Provider>
  )
}
