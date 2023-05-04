/* provides helper functions for using localized strings */
import languages from './languages/all.js'

function getCurrentLanguage () {
  // TODO add a setting to change the language to something other than the default

  var language = 'en-US' // default

  if (typeof navigator !== 'undefined') { // renderer process
    language = navigator.language
  } else if (typeof app !== 'undefined') { // main process
    language = app.getLocale()
  } else {
    // nothing worked, fall back to default
  }

  return language
}

var userLanguage = null

function l (stringId) {
  try {
    if (!userLanguage) {
      userLanguage = getCurrentLanguage()
    }

    // If the string is available in the user's language, use it
    if (languages[userLanguage] && languages[userLanguage][stringId]) {
      return languages[userLanguage][stringId]
    }
    // If general language unavailable but specific dialect is, use it
    for (let lang in languages) {
      if (lang.startsWith(userLanguage.split('-')[0]) && languages[lang][stringId]) {
        return languages[lang][stringId]
      }
    }
    // If the specific dialect is unavailable, use the general language
    if (languages[userLanguage.split('-')[0]] && languages[userLanguage.split('-')[0]][stringId]) {
      return languages[userLanguage.split('-')[0]][stringId]
    }
    // If the string is unavailable in the user's language, use the default
    if (languages['en-US'][stringId]) {
      return languages['en-US'][stringId]
    }
  } catch (e) { } finally {
    // If the string is unavailable in the default language, use the stringId
    return stringId
  }
}

/* for static HTML pages
insert a localized string into all elements with a [data-string] attribute
set the correct attributes for all elements with a [data-label] attribute
set the value attribute for all elements with a [data-value] attribute
 */

if (typeof document !== 'undefined') {
  if (languages[getCurrentLanguage()] && languages[getCurrentLanguage()].rtl) {
    document.body.classList.add('rtl')
  }

  document.querySelectorAll('[data-string]').forEach(function (el) {
    var str = l(el.getAttribute('data-string'))
    if (typeof str === 'string') {
      el.textContent = str
    } else if (str && str.unsafeHTML && el.hasAttribute('data-allowHTML')) {
      el.innerHTML = str.unsafeHTML
    }
  })
  document.querySelectorAll('[data-label]').forEach(function (el) {
    var str = l(el.getAttribute('data-label'))
    if (typeof str === 'string') {
      el.setAttribute('title', str)
      el.setAttribute('aria-label', str)
    } else {
      throw new Error('invalid data-label value: ' + str)
    }
  })
  document.querySelectorAll('[data-value]').forEach(function (el) {
    var str = l(el.getAttribute('data-value'))
    if (typeof str === 'string') {
      el.setAttribute('value', str)
    } else {
      throw new Error('invalid data-value value: ' + str)
    }
  })
}
if (typeof window !== 'undefined') {
  window.l = l
  window.userLanguage = userLanguage
  window.getCurrentLanguage = getCurrentLanguage
}

export { l }
