import searchbarPlugins from './searchbarPlugins.js'

import urlParser from '../util/urlParser.js'
import searchEngine from '../util/searchEngine.js'

import { getTabs } from '../tabState.js'

function showSearchSuggestions (text, input, event) {
    const suggestionsURL = searchEngine.getCurrent().suggestionsURL

  if (!suggestionsURL) {
    searchbarPlugins.reset('searchSuggestions')
    return
  }

  if ((searchbarPlugins.getResultCount() - searchbarPlugins.getResultCount('searchSuggestions')) > 3) {
    searchbarPlugins.reset('searchSuggestions')
    return
  }

  fetch(suggestionsURL.replace('%s', encodeURIComponent(text)), {
    cache: 'force-cache'
  })
    .then(function (response) {
      return response.json()
    })
    .then(function (results) {
      searchbarPlugins.reset('searchSuggestions')

      if (searchbarPlugins.getResultCount() > 3) {
        return
      }

      if (results) {
        results = results[1].slice(0, 3)
        results.forEach(function (result) {
          var data = {
            title: result,
            url: result
          }

          if (urlParser.isPossibleURL(result)) { // website suggestions
            data.icon = 'carbon:earth-filled'
          } else { // regular search results
            data.icon = 'carbon:search'
          }

          searchbarPlugins.addResult('searchSuggestions', data)
        })
      }
    })
}

function initialize () {
  searchbarPlugins.register('searchSuggestions', {
    index: 4,
    trigger: function (text) {
      return !!text && text.indexOf('!') !== 0 && !getTabs().get(getTabs().getSelected()).private
    },
    showResults: debounce(showSearchSuggestions, 50)
  })
}

export default {
  initialize
}
