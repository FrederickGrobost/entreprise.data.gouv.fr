var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

  BASE_ADDRESS_SIRENE_FULLTEXT: '"http://localhost:3000/v1/full_text/"',
  BASE_ADDRESS_SIRENE_SIRET: '"http://localhost:3000/v1/siret/"',
  BASE_ADDRESS_SIRENE_SIREN: '"http://localhost:3000/v2/siren/"',
  BASE_ADDRESS_SIRENE_SUGGESTIONS: '"http://localhost:3000/v1/suggest/"',
  BASE_ADDRESS_SIRENE_NEAR_ETABLISSEMENT: '"http://localhost:3000/v1/near_etablissement_geojson/"',
  BASE_ADDRESS_SIRENE_ID_ASSOCIATION: '"http://localhost:3000/v1/rna/"',

  BASE_ADDRESS_RNA_FULLTEXT: '"http://localhost:3001/v1/full_text/"',
  BASE_ADDRESS_RNA_SIRET: '"http://localhost:3001/v1/siret/"',
  BASE_ADDRESS_RNA_ID_ASSOCIATION: '"http://localhost:3001/v1/id/"',

  BASE_ADDRESS_RNCS: '"https://sandbox2.sirene.entreprise.api.gouv.fr/rncs/api/infos_identite_entreprise_rncs/"',
  BASE_ADDRESS_RNM: '"https://api-rnm.artisanat.fr/api/entreprise/"'
})
