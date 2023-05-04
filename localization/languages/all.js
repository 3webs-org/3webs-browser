let langCodes = [
    'ar',
    'be',
    'bg',
    'bn',
    'cs',
    'de',
    'el',
    'en-US',
    'es',
    'fa',
    'fr',
    'hr',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'pl',
    'pt-BR',
    'pt-PT',
    'ru',
    'sr',
    'th',
    'tr',
    'uk',
    'uz',
    'vi',
    'zh-CN',
    'zh-TW'
]

let languages = {}
for (let lang of langCodes) {
    languages[lang] = await import(`./${lang}.js`)
}

export default languages
