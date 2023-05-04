export default {
  "name": "Italiano",
  "identifier": "it",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "Aggiungi al dizionario",
    "pictureInPicture": "Picture in Picture",
    "openInNewTab": "Apri in nuova scheda",
    "openInNewPrivateTab": "Apri in nuova scheda privata",
    "saveLinkAs": "Salva link come...",
    "viewImage": "Visualizza immagine",
    "openImageInNewTab": "Apri immagine in nuova scheda",
    "openImageInNewPrivateTab": "Apri immagine in nuova scheda privata",
    "saveImageAs": "Salva immagine con nome",
    "searchWith": "Cerca con %s", //%s will be replaced with the name of the current search engine
    "copyLink": "Copia Link",
    "copyEmailAddress": "Copia indirizzo email",
    "selectAll": "Seleziona Tutto",
    "undo": "Annulla",
    "redo": "Ripeti",
    "cut": "Taglia",
    "copy": "Copia", //this is a verb (as in "copy the currently-selected text")
    "paste": "Incolla",
    "goBack": "Indietro",
    "goForward": "Avanti",
    "inspectElement": "Ispeziona elemento",
    /* searchbar */
    "pasteAndGo": "Incolla e Vai",
    "DDGAnswerSubtitle": "Risposta", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "Sito suggerito", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "Risultati di DuckDuckGo", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "Task %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "Mostra di più",
    "viewSettings": "Vedi Impostazioni",
    "takeScreenshot": "Cattura Screenshot",
    "clearHistory": "Svuota la cronologia",
    "enableBlocking": "Abilita blocco dei contenuti per questo sito",
    "disableBlocking": "Disabilita blocco dei contenuti per questo sito",
    "clearHistoryConfirmation": "Cancellare tutti i dati di navigazione?",
    "switchToTask": "Passa a Task",
    "createTask": "Crea un Task",
    "closeTask": "Chiudi un Task",
    "moveToTask": "Sposta questa scheda in un task",
    "nameTask": "Dai un nome a questo task",
    "addBookmark": "Aggiungi preferiti",
    "searchBookmarks": "Cerca nei Preferiti",
    "bookmarksAddTag": "Aggiungi tag...",
    "bookmarksRenameTag": "Rinomina tag",
    "bookmarksDeleteTag": "Elimina tag",
    "deleteBookmarksWithTag": "Elimina Preferiti con tag",
    "bookmarksSimilarItems": "Oggetti simili",
    "searchHistory": "Cerca nella cronologia",
    "importBookmarks": "Importa preferiti da file HTML",
    "exportBookmarks": "Esporta Preferiti",
    "runUserscript": "Avvia userscript",
    /* navbar */
    "openMenu": "Apri menu", //application menu button on windows
    "enterReaderView": "Entra in Modalità Lettura",
    "exitReaderView": "Esci dalla Modalità Lettura",
    "newTabLabel": "Nuova scheda", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "La tua connessione a questo sito non è sicura..",
    "searchbarPlaceholder": "Cerca o inserisci indirizzo",
    "privateTab": "Scheda privata",
    "newTabAction": "Nuova scheda", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "Mostra Task",
    "newTask": "Nuovo Task", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "Task %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "Task eliminato. <a>Annullare?</a>"
    },
    "tasksSearchTabs": "Cerca scheda",
    "returnToTask": "Torna al task precedente",
    "taskDescriptionTwo": "%t , %t",
    "taskDescriptionThree": "%t, %t, e altri %n",
    /* find in page toolbar */
    "searchInPage": "Cerca nella pagina", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%i su %t risultato", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%i su %t risultati",
    /* Focus mode */
    "isFocusMode": "Sei in Modalità Focus.",
    "closeDialog": "OK", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "Nella modalità focus, non puoi creare nuovi schede o passare tra le attività",
    "focusModeExplanation2": "Puoi abbandonare la modalità focus deselezionando \"modalità focus\" nel menu visualizza.",
    /* relative dates */
    "timeRangeJustNow": "Proprio ora",
    "timeRangeMinutes": "Pochi minuti fa",
    "timeRangeHour": "Quest'ora",
    "timeRangeToday": "Oggi",
    "timeRangeYesterday": "Ieri",
    "timeRangeWeek": "Questa settimana",
    "timeRangeMonth": "Questo mese",
    "timeRangeYear": "Quest'anno",
    "timeRangeLongerAgo": "Tempo fa",
    /* pages/error/index.html */
    "crashErrorTitle": "Qualcosa non ha funzionato.",
    "crashErrorSubtitle": "Si è verificato un errore nella visualizzazione di questa pagina.",
    "errorPagePrimaryAction": "Riprova",
    "serverNotFoundTitle": "Server non trovato",
    "serverNotFoundSubtitle": "Min non è riuscito a trovare il server.",
    "archiveSearchAction": "Cerca su archive.org",
    "sslErrorTitle": "Questo sito non è disponibile",
    "sslErrorMessage": "Min non ha potuto stabilire una connessione sicura con questo sito.",
    "dnsErrorTitle": "Sito non trovato",
    "dnsErrorMessage": "Si è verificato un errore DNS.",
    "offlineErrorTitle": "Sei offline",
    "offlineErrorMessage": "Riconnettiti ad Internet e riprova.",
    "genericConnectionFail": "Min non ha potuto connettersi a questo sito.",
    "sslTimeErrorMessage": "Min non ha potuto stabilire una connessione sicura con questo sito. Assicurati che l'orologio di questo computer sia impostato correttamente.",
    "addressInvalidTitle": "Questo indirizzo non è valido.",
    "genericError": "Si è verificato un errore",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "Questo sito è pericoloso.",
    "phishingErrorMessage": "Questo sito potrebbe cercare di rubare i tuoi dati sensibili, come password o credenziali bancarie.",
    "phishingErrorVisitAnyway": "Visita sito comunque",
    "phishingErrorLeave": "Portami via da questo sito",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "Si è verificato un errore. Chiudi ogni altra instanza e riavvia Min.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "Si è verificato un errore",
    "sessionRestoreErrorExplanation": "Impossibile recuperare le schede precedentemente aperte.",
    "sessionRestoreErrorBackupInfo": "Min ha salvato un backup dei tuoi dati in: %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "Se questo errore persiste, apri un nuovo issue <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">qui</a>."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "Impostazioni",
    "settingsRestartRequired": "Devi riavviare Min per applicare queste modifiche.",
    "settingsPrivacyHeading": "Blocco contenuti",
    "settingsContentBlockingLevel0": "Autorizza Pubblicità e tracker",
    "settingsContentBlockingLevel1": "Blocca Pubblicità e tracker di terze parti",
    "settingsContentBlockingLevel2": "Blocca tutte le pubblicità e i tracker",
    "settingsContentBlockingExceptions": "Consenti pubblicità sui seguenti siti:",
    "settingsBlockScriptsToggle": "Blocca script",
    "settingsBlockImagesToggle": "Blocca immagini",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "Fino ad ora, Min ha bloccato <strong></strong> pubblicità e tracciatori"
    },
    "settingsCustomBangs": "Bang personalizzati",
    "settingsCustomBangsAdd": "Aggiungi bang personalizzato",
    "settingsCustomBangsPhrase": "Frase (Richiesto)",
    "settingsCustomBangsSnippet": "Descrizione (Opzionale)",
    "settingsCustomBangsRedirect": "URL Reindirizzamento (Richiesto)",
    "settingsCustomizeFiltersLink": "Personalizza filtri",
    "settingsAppearanceHeading": "Aspetto",
    "settingsEnableDarkMode": "Abilita dark mode:",
    "settingsDarkModeNever": "Mai",
    "settingsDarkModeNight": "Di notte",
    "settingsDarkModeAlways": "Sempre",
    "settingsDarkModeSystem": "Adotta il tema di sistema",
    "settingsSiteThemeToggle": "Abilita tema adattivo (si adatta al sito)",
    "settingsAdditionalFeaturesHeading": "Funzionalità aggiuntive",
    "settingsUserscriptsToggle": "Abilita script definiti dall'utente",
    "settingsShowDividerToggle": "Mostra divisore tra i schede",
    "settingsSeparateTitlebarToggle": "Usa barra del titolo separata",
    "settingsAutoplayToggle": "Abilita Autoplay",
    "settingsOpenTabsInForegroundToggle": "Apri nuove schede in primo piano",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "Gli script definiti dall'utente ti permettono di modificare il comportamento dei siti - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">scopri di più</a>."
    },
    "settingsUserAgentToggle": "Utilizza un user agent personalizzato",
    "settingsUpdateNotificationsToggle": "Controlla automaticamente la presenza di aggiornamenti",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "Invia statistiche di utilizzo (<a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">Maggiori informazioni</a>)"
    },
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "Motore di ricerca",
    "settingsDefaultSearchEngine": "Scegli un motore di ricerca predefinito:",
    "settingsDDGExplanation": "Imposta DuckDuckGo come motore di ricerca predefinito per vedere risposte istantanee nella barra di ricerca.",
    "customSearchEngineDescription": "Sostituisci il termine di ricerca con %s",
    "settingsKeyboardShortcutsHeading": "Scorciatoie da tastiera",
    "settingsKeyboardShortcutsHelp": "Utilizza una virgola per separare scorciatoie multiple.",
    "settingsProxyHeading": "Proxy",
    "settingsNoProxy": "Nessun proxy",
    "settingsManualProxy": "Configurazione manuale",
    "settingsAutomaticProxy": "Configurazione automatica",
    "settingsProxyRules": "Regole proxy:",
    "settingsProxyBypassRules": "Nessun proxy per:",
    "settingsProxyConfigurationURL": "URL configurazione",
    /* app menu */
    "appMenuFile": "File",
    "appMenuNewTab": "Nuova scheda",
    "appMenuDuplicateTab": "Duplica scheda",
    "appMenuNewPrivateTab": "Nuova scheda privata",
    "appMenuNewTask": "Nuovo task",
    "appMenuSavePageAs": "Salva pagina con nome",
    "appMenuPrint": "Stampa",
    "appMenuEdit": "Modifica",
    "appMenuUndo": "Annulla",
    "appMenuRedo": "Ripeti",
    "appMenuCut": "Taglia",
    "appMenuCopy": "Copia",
    "appMenuPaste": "Incolla",
    "appMenuSelectAll": "Seleziona tutto",
    "appMenuFind": "Trova",
    "appMenuView": "Vista",
    "appMenuZoomIn": "Aumenta zoom",
    "appMenuZoomOut": "Riduci zoom",
    "appMenuActualSize": "Dimensioni reali",
    "appMenuFullScreen": "Schermo Intero", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "Modalità Focus",
    "appMenuBookmarks": "Preferiti",
    "appMenuHistory": "Cronologia",
    "appMenuDeveloper": "Sviluppo",
    "appMenuReloadBrowser": "Ricarica browser",
    "appMenuInspectBrowser": "Ispeziona browser",
    "appMenuInspectPage": "Ispeziona pagina",
    "appMenuWindow": "Finestra",
    "appMenuMinimize": "Minimizza",
    "appMenuClose": "Chiudi",
    "appMenuAlwaysOnTop": "Sempre in cima",
    "appMenuHelp": "Aiuto",
    "appMenuKeyboardShortcuts": "Scorciatoie da tastiera",
    "appMenuReportBug": "Segnala un bug",
    "appMenuTakeTour": "Fai un tour",
    "appMenuViewGithub": "Vedi su GitHub",
    "appMenuAbout": "A proposito di %n", //%n is replaced with app name
    "appMenuPreferences": "Preferenze",
    "appMenuServices": "Servizi",
    "appMenuHide": "Nascondi %n",
    "appMenuHideOthers": "Nascondi altre",
    "appMenuShowAll": "Mostra tutte",
    "appMenuQuit": "Esci da %n",
    "appMenuBringToFront": "Porta avanti",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "pagina <input type='text'/> su <span id='total'></span>"
    },
    /* Context Reader */
    "buttonReaderSettings": "Impostazioni lettura",
    "buttonReaderLightTheme": "Chiaro",
    "buttonReaderSepiaTheme": "Seppia",
    "buttonReaderDarkTheme": "Scuro",
    "openReaderView": "Apri sempre in modalità lettura",
    "autoRedirectBannerReader": "Aprire sempre gli articoli di questo sito in modalità lettura?",
    "buttonReaderRedirectYes": "Si",
    "buttonReaderRedirectNo": "NO",
    "articleReaderView": "Articolo originale",
    /* Download manager */
    "downloadCancel": "Annulla",
    "downloadStateCompleted": "Completato",
    "downloadStateFailed": "Fallito",
    /* Update Notifications */
    "updateNotificationTitle": "Una nuova versione di Min è disponibile",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "Completamento automatico password",
    "settingsSelectPasswordManager": "Seleziona uno dei gestori di password supportati:",
    "keychainViewPasswords": "Mostra password salvate",
    /* Password manager setup */
    "passwordManagerSetupHeading": "Imposta %p per utilizzare l'autocompletamento",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "Prima, <a id='password-manager-setup-link'></a> ed estrailo per il tuo sistema."
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "Scarica <a id='password-manager-setup-link-installer'></a> e sposta il file nel box qui sotto:"
    },
    "passwordManagerSetupLink": "scarica il tool CLI di %p",
    "passwordManagerSetupLinkInstaller": "l'install CLI di %p",
    "passwordManagerSetupStep2": "Quindi trascina il tool nel box qui sotto:",
    "passwordManagerSetupDragBox": "Trascina il tool qui",
    "passwordManagerSetupInstalling": "Installazione...",
    "passwordManagerBitwardenSignIn": "Per collegare il tuo account Bitwarden, accedi dalla pagina vault.bitwarden.com/#/settings/account, scorri fino in fondo alla pagina, e scegli \"View API Key\". Poi copia i valori nei campi sottostanti.",
    "passwordManagerSetupSignIn": "Entra nel tuo gestore di password per iniziare ad usare l'autocompletamento. Le tue credenziali non saranno salvate da nessuna parte in Min.",
    "disableAutofill": "Disabilita autocompletamento",
    "passwordManagerSetupUnlockError": "Impossibile sbloccare le password: ",
    "passwordManagerSetupRetry": "Assicurati di star usando il file corretto e la password corretta. Puoi riprovare a trascinare il tool di nuovo qui.",
    "passwordManagerUnlock": "Inserisci la master password di %p per sbloccare le password:",
    /* Password save bar */
    "passwordCaptureSavePassword": "Salvare la password per %s?",
    "passwordCaptureSave": "Salva",
    "passwordCaptureDontSave": "Non salvare",
    "passwordCaptureNeverSave": "Non salvare mai",
    /* Password viewer */
    "savedPasswordsHeading": "Password salvate",
    "savedPasswordsEmpty": "Nessuna password salvata",
    "savedPasswordsNeverSavedLabel": "Mai salvata",
    "deletePassword": "Eliminare la password per %s?",
    /* Dialogs */
    "loginPromptTitle": "Entra in %h (%r)",
    "dialogConfirmButton": "Conferma",
    "dialogSkipButton": "Annulla",
    "username": "Nome utente",
    "email": "Email",
    "password": "Password",
    "secretKey": "Chiave segreta",
    "openExternalApp": "Apri in \\\"%s\\\"?",
    "clickToCopy": "Clicca per copiare",
    "copied": "Copiato"
  }
}
