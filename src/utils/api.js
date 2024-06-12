const api = process.env.REACT_APP_API + '/'

const aliments = api + 'agribalyse-31-synthese/lines'
const indicateurs = api + 'agribalyse-31-detail-par-etape/lines'
const ingredients = api + 'agribalyse-31-detail-par-ingredient/lines'

const search = api + 'agribalyse-31-synthese/lines?size=9999&select=DQR%2CChangement_climatique%2CCode_AGB%2CGroupe_d%27aliment%2CSous-groupe_d%27aliment%2CNom_du_Produit_en_Français'

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
        headers: headers,
      }
    )
      .then(this.handleErrors)
      .then((res) => res.json())
  },

  fetchEveryAliments() {
    return this.get(search).then(
      (result) => result,
      (error) => {
        console.log(error)
      }
    )
  },

  fetchAliments({
    code_agb,
    page,
    size,
    search,
    categories,
    subCategories,
    sort,
  }) {
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
    if (search) {
      request += `&q=${search}`
    }
    if (categories && categories.length) {
      if (subCategories && subCategories.length) {
        request += `&qs=Sous-groupe_d'aliment:(${subCategories
          .map((subCategory) => `"${subCategory}"`)
          .join(' OR ')})`
      } else {
        request += `&qs=Groupe_d'aliment:(${categories
          .map((category) => `"${category}"`)
          .join(' OR ')})`
      }
    }

    return this.get(request).then(
      (result) => result,
      (error) => {
        console.log(error)
      }
    )
  },

  fetchIndicateurs(code_agb) {
    return this.get(`${indicateurs}?Code_AGB_in=${code_agb}`).then(
      (result) => result,
      (error) => {
        console.log(error)
      }
    )
  },

  fetchIngredients(code_agb) {
    return this.get(`${ingredients}?qs=Ciqual__AGB:${code_agb}`).then(
      (result) => result,
      (error) => {
        console.log(error)
      }
    )
  },

  fetchCategories() {
    return this.get(categories).then(
      (result) => result,
      (error) => {
        console.log(error)
      }
    )
  },
}
