const api = process.env.REACT_APP_API + '/'

const aliments = api + 'agribalyse-synthese/lines'
const indicateurs = api + 'agribalyse-detail-etape/lines'
const ingredients = api + 'agribalyse-detail-ingredient/lines'

const categories =
  api +
  'agribalyse-synthese/values_agg?field=Groupe_d%27aliment;Sous-groupe_d%27aliment'

export default {
  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  },
  get(endpoint) {
    let headers = new Headers()
    return fetch(
      endpoint,

      {
        method: 'GET',
        headers: headers
      }
    )
      .then(this.handleErrors)
      .then(res => res.json())
  },
  fetchAliments({ code_agb, page, size, categories, subCategories, sort }) {
    let request = aliments + '?'

    if (sort) {
      request += `sort=${sort}`
    }

    if (code_agb) {
      request += `&Code_AGB_in=${code_agb}`
    }
    if (page) {
      request += `&page=${page}`
    }
    if (size) {
      request += `&size=${size}`
    }
    if (categories && categories.length) {
      if (subCategories && subCategories.length) {
        request += `&qs=Sous-groupe_d'aliment:(${subCategories
          .map(subCategory => `"${subCategory}"`)
          .join(' OR ')})`
      } else {
        request += `&qs=Groupe_d'aliment:(${categories
          .map(category => `"${category}"`)
          .join(' OR ')})`
      }
    }

    return this.get(request).then(
      result => result,
      error => {
        console.log(error)
      }
    )
  },
  fetchIndicateurs(code_agb) {
    return this.get(`${indicateurs}?Code_AGB_in=${code_agb}`).then(
      result => result,
      error => {
        console.log(error)
      }
    )
  },
  fetchIngredients(code_agb) {
    return this.get(`${ingredients}?qs=Ciqual_AGB:${code_agb}`).then(
      result => result,
      error => {
        console.log(error)
      }
    )
  },
  fetchCategories() {
    return this.get(categories).then(
      result => result,
      error => {
        console.log(error)
      }
    )
  }
}
