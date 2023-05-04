import ar from './ar.js'
import be from './be.js'
import bg from './bg.js'
import bn from './bn.js'
import cs from './cs.js'
import de from './de.js'
import el from './el.js'
import enUS from './en-US.js'
import es from './es.js'
import fa from './fa.js'
import fr from './fr.js'
import hr from './hr.js'
import hu from './hu.js'
import id from './id.js'
import it from './it.js'
import ja from './ja.js'
import ko from './ko.js'
import lt from './lt.js'
import pl from './pl.js'
import ptBR from './pt-BR.js'
import ptPT from './pt-PT.js'
import ru from './ru.js'
import sr from './sr.js'
import th from './th.js'
import tr from './tr.js'
import uk from './uk.js'
import uz from './uz.js'
import vi from './vi.js'
import zhCN from './zh-CN.js'
import zhTW from './zh-TW.js'

let allLangs = {
    'ar': ar,
    'be': be,
    'bg': bg,
    'bn': bn,
    'cs': cs,
    'de': de,
    'el': el,
    'en-US': enUS,
    'es': es,
    'fa': fa,
    'fr': fr,
    'hr': hr,
    'hu': hu,
    'id': id,
    'it': it,
    'ja': ja,
    'ko': ko,
    'lt': lt,
    'pl': pl,
    'pt-BR': ptBR,
    'pt-PT': ptPT,
    'ru': ru,
    'sr': sr,
    'th': th,
    'tr': tr,
    'uk': uk,
    'uz': uz,
    'vi': vi,
    'zh-CN': zhCN,
    'zh-TW': zhTW
}

let translations = {}

for (let lang in allLangs) {
    translations[lang] = allLangs[lang].translations
}

export default translations
