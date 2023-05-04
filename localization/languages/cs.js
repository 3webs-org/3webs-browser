export default {
  "name": "Česky",
  "identifier": "cs",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "Přidat do slovníku",
    "pictureInPicture": "Obraz v obraze",
    "openInNewTab": "Otevřít odkaz na nové kartě",
    "openInNewPrivateTab": "Otevřít odkaz na nové soukromé kartě",
    "saveLinkAs": "Uložit odkaz jako...",
    "viewImage": "Zobrazit obrázek",
    "openImageInNewTab": "Otevřít obrázek na nové kartě",
    "openImageInNewPrivateTab": "Otevřít obrázek na nové soukromé kartě",
    "saveImageAs": "Uložit obrázek jako...",
    "searchWith": "Vyhledat pomocí %s", //%s will be replaced with the name of the current search engine
    "copyLink": "Kopírovat odkaz",
    "copyEmailAddress": "Kopírovat e-mailovou adresu",
    "selectAll": "Označit vše",
    "undo": "Zpět",
    "redo": "Znovu",
    "cut": "Vyjmout",
    "copy": "Kopírovat", //this is a verb (as in "copy the currently-selected text")
    "paste": "Vložit",
    "goBack": "Zpět",
    "goForward": "Vpřed",
    "inspectElement": "Prozkoumat prvek",
    /* searchbar */
    "pasteAndGo": "Vložit a přejít",
    "DDGAnswerSubtitle": "Odpověď", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "Doporučené stránky", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "Výsledky z DuckDuckGo", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "Dimenze %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "Zobrazit více",
    "viewSettings": "Zobrazit nastavení",
    "takeScreenshot": "Pořídit snímek obrazovky",
    "clearHistory": "Vymazat celou historii",
    "enableBlocking": "Zapnout blokování obsahu pro tuto stránku",
    "disableBlocking": "Vypnout blokování obsahu pro tuto stránku",
    "clearHistoryConfirmation": "Vymazat historii a data o prohlížení?",
    "switchToTask": "Přesunout se do dimenze",
    "createTask": "Vytvořit dimenzi",
    "closeTask": "Zavřít dimenzi",
    "moveToTask": "Přesunout tuto kartu do dimenze",
    "nameTask": "Pojmenovat dimenzi",
    "addBookmark": "Přidat záložku",
    "searchBookmarks": "Vyhledávat záložky",
    "bookmarksAddTag": "Přidat štítek...",
    "bookmarksRenameTag": null, //missing translation
    "bookmarksDeleteTag": null, //missing translation
    "deleteBookmarksWithTag": null, //missing translation
    "bookmarksSimilarItems": "Podobné položky",
    "searchHistory": "Prohledat historii",
    "importBookmarks": "Importovat záložky z HTML souboru",
    "exportBookmarks": "Exportovat záložky",
    "runUserscript": "Spustit uživatelský skript",
    /* navbar */
    "openMenu": "Otevřít menu", //application menu button on windows
    "enterReaderView": "Otevřít režim čtení",
    "exitReaderView": "Zavřít režim čtení",
    "newTabLabel": "Nová karta", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "Vaše připojení k této stránce není zabezpečené.",
    "searchbarPlaceholder": "Hledejte nebo zadejte webovou adresu",
    "privateTab": "Soukromá karta",
    "newTabAction": "Nová karta", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "Zobrazit dimenze",
    "newTask": "Nová dimenze", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "Dimenze %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "Dimenze uzavřena. <a>Zpět?</a>"
    },
    "tasksSearchTabs": "Vyhledat otevřené karty",
    "returnToTask": "Vrátit se do předchozí dimenze",
    "taskDescriptionTwo": "%t a %t", //used to describe a task that has two tabs, %t is replaced with the tab titles
    "taskDescriptionThree": "%t, %t, a více (%n)", //used to describe a task that has three or more tabs
    /* find in page toolbar */
    "searchInPage": "Vyhledávat na stránce", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%i z %t výsledku", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%i z %t výsledků",
    /* Focus mode */
    "isFocusMode": "Jste v režimu zaměření.",
    "closeDialog": "Zavřít", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "V režimu zaměření nemůžete vytvářet nové karty nebo přepínat dimenze.",
    "focusModeExplanation2": "Režim zaměření můžete opustit odškrtnutím \"režim zaměření\" v menu zobrazení.",
    /* relative dates */
    "timeRangeJustNow": "Právě teď",
    "timeRangeMinutes": "Před pár minutami",
    "timeRangeHour": "Před hodinou",
    "timeRangeToday": "Dnes",
    "timeRangeYesterday": "Včera",
    "timeRangeWeek": "Před týdnem",
    "timeRangeMonth": "Před měsícem",
    "timeRangeYear": "Před rokem",
    "timeRangeLongerAgo": "Před více než rokem",
    /* pages/error/index.html */
    "crashErrorTitle": "Něco se pokazilo.",
    "crashErrorSubtitle": "Během zobrazování této stránky došlo k potížím.",
    "errorPagePrimaryAction": "Zkusit znovu",
    "serverNotFoundTitle": "Server nenalezen",
    "serverNotFoundSubtitle": "Prohlížeč nemůže najít tuto webovou stránku.",
    "archiveSearchAction": "Vyhledávat na archive.org",
    "sslErrorTitle": "Tato webová stránka není dostupná",
    "sslErrorMessage": "Prohlížeč nemůže s touto stránkou navázat zabezpečené spojení.",
    "dnsErrorTitle": "Webová stránka nenalezena",
    "dnsErrorMessage": "Došlo k chybě DNS.",
    "offlineErrorTitle": "Jste offline",
    "offlineErrorMessage": "Připojte se k internetu a zkuste to znovu.",
    "genericConnectionFail": "Prohlížeč se nemůže připojit k této webové adrese.",
    "sslTimeErrorMessage": "Prohlížeč nemůže s touto stránkou navázat zabezpečené spojení. Prosím zkontrolujte, zda máte v počítači správně nastavený čas.",
    "addressInvalidTitle": "Tato adresa je neplatná.",
    "genericError": "Vyskytla se chyba",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "Tyto stránky by vám mohly ublížit.",
    "phishingErrorMessage": "Tyto webové stránky se mohou pokusit ukrást vaše osobní údaje, například hesla nebo bankovní informace.",
    "phishingErrorVisitAnyway": "Přesto stránky navštívit",
    "phishingErrorLeave": "Opustit tyto stránky",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "Vyskytla se chyba. Prosím zavřete všechny ostatní spuštěné instance a restartujte prohlížeč.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "Vyskytla se chyba",
    "sessionRestoreErrorExplanation": "Vaše uložené karty nelze správně obnovit.",
    "sessionRestoreErrorBackupInfo": "Zálohu vašich dat jsme uložili na tomto místě: %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "Pokud se tato chyba opakuje, založte prosím nový problém <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">zde</a>."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "Nastavení",
    "settingsRestartRequired": "Pro použití změn musíte restartovat aplikaci.",
    "settingsPrivacyHeading": "Blokování obsahu",
    "settingsContentBlockingLevel0": "Povolit všechny reklamy a trackery",
    "settingsContentBlockingLevel1": "Blokovat reklamy třetích stran a trackery",
    "settingsContentBlockingLevel2": "Blokovat všechny reklamy a trackery",
    "settingsContentBlockingExceptions": "Udělit výjimku pro zobrazování reklam těmto stránkám:",
    "settingsBlockScriptsToggle": "Blokovat skripty",
    "settingsBlockImagesToggle": "Blokovat obrázky",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "Prohlížeč dosud zablokoval <strong></strong> reklam a trackerů."
    },
    "settingsCustomBangs": "Vlastní !zkratky",
    "settingsCustomBangsAdd": "Vytvořit novou zkratku",
    "settingsCustomBangsPhrase": "Fráze (Vyžadováno)",
    "settingsCustomBangsSnippet": "Popis (Volitelné)",
    "settingsCustomBangsRedirect": "Adresa pro přesměrování (Vyžadováno)",
    "settingsCustomizeFiltersLink": "Přizpůsobit filtry",
    "settingsAppearanceHeading": "Vzhled",
    "settingsEnableDarkMode": "Zapnout tmavý režim:",
    "settingsDarkModeNever": "Nikdy",
    "settingsDarkModeNight": "Pouze v noci",
    "settingsDarkModeAlways": "Vždy",
    "settingsDarkModeSystem": "Automaticky podle systému",
    "settingsSiteThemeToggle": "Povolit motiv webu",
    "settingsAdditionalFeaturesHeading": "Další funkce",
    "settingsUserscriptsToggle": "Povolit uživatelské skripty",
    "settingsShowDividerToggle": "Zobrazit ohraničení otevřených karet",
    "settingsSeparateTitlebarToggle": "Použít systémové záhlaví okna",
    "settingsAutoplayToggle": "Povolit automatické přehrávání",
    "settingsOpenTabsInForegroundToggle": "Ihned přepínat na nově otevřené karty",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "Uživatelské skripty umožňují upravit chování webových stránek - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">více informací</a>."
    },
    "settingsUserAgentToggle": "Použít vlastní User-Agent řetězec",
    "settingsUpdateNotificationsToggle": "Automaticky kontrolovat aktualizace",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "Zasílat údaje o používání (<a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">Více informací</a>)"
    },
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "Vyhledávač",
    "settingsDefaultSearchEngine": "Zvolte si výchozí vyhledávač:",
    "settingsDDGExplanation": "Nastavte DuckDuckGo jako výchozí vyhledávač pro zobrazování okamžitých odpovědí ve vyhledávacím panelu.",
    "customSearchEngineDescription": "Hledaný výraz nahraďte %s",
    "settingsKeyboardShortcutsHeading": "Klávesové zkratky",
    "settingsKeyboardShortcutsHelp": "Používejte čárky pro oddělení klávesových zkratek.",
    "settingsProxyHeading": "Proxy",
    "settingsNoProxy": "Nepoužívat proxy",
    "settingsManualProxy": "Ruční konfigurace",
    "settingsAutomaticProxy": "Automatická konfigurace",
    "settingsProxyRules": "Pravidla proxy:",
    "settingsProxyBypassRules": "Nepoužívat proxy pro:",
    "settingsProxyConfigurationURL": "Konfigurační adresa URL",
    /* app menu */
    "appMenuFile": "Soubor",
    "appMenuNewTab": "Nová karta",
    "appMenuDuplicateTab": "Duplikovat kartu",
    "appMenuNewPrivateTab": "Nová soukromá karta",
    "appMenuNewTask": "Nová dimenze",
    "appMenuSavePageAs": "Uložit stránku jako...",
    "appMenuPrint": "Vytisknout stránku...",
    "appMenuEdit": "Úpravy",
    "appMenuUndo": "Zpět",
    "appMenuRedo": "Vpřed",
    "appMenuCut": "Vyjmout",
    "appMenuCopy": "Kopírovat",
    "appMenuPaste": "Vložit",
    "appMenuSelectAll": "Označit vše",
    "appMenuFind": "Najít na stránce...",
    "appMenuView": "Zobrazení",
    "appMenuZoomIn": "Přiblížit",
    "appMenuZoomOut": "Oddálit",
    "appMenuActualSize": "Skutečná velikost",
    "appMenuFullScreen": "Celá obrazovka", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "Režim zaměření",
    "appMenuBookmarks": "Záložky",
    "appMenuHistory": "Historie",
    "appMenuDeveloper": "Nástroje pro vývojáře",
    "appMenuReloadBrowser": "Znovu načíst prohlížeč",
    "appMenuInspectBrowser": "Prozkoumat prohlížeč",
    "appMenuInspectPage": "Prozkoumat stránku",
    "appMenuWindow": "Okno",
    "appMenuMinimize": "Minimalizovat",
    "appMenuClose": "Zavřít",
    "appMenuAlwaysOnTop": "Vždy nahoře",
    "appMenuHelp": "Nápověda",
    "appMenuKeyboardShortcuts": "Klávesové zkratky",
    "appMenuReportBug": "Nahlásit chybu",
    "appMenuTakeTour": "Otevřít průvodce",
    "appMenuViewGithub": "Zobrazit na GitHubu",
    "appMenuAbout": "O aplikaci %n", //%n is replaced with app name
    "appMenuPreferences": "Nastavení",
    "appMenuServices": "Služby",
    "appMenuHide": "Skrýt %n",
    "appMenuHideOthers": "Skrýt ostatní",
    "appMenuShowAll": "Zobrazit vše",
    "appMenuQuit": "Ukončit %n",
    "appMenuBringToFront": "Přenést vše do popředí",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "Strana <input type='text'/> z <span id='total'></span>"
    },
    /* Context Reader */
    "buttonReaderSettings": "Nastavení čtečky",
    "buttonReaderLightTheme": "Světlé",
    "buttonReaderSepiaTheme": "Sépie",
    "buttonReaderDarkTheme": "Tmavé",
    "openReaderView": "Vždy otevírat v režimu čtení",
    "autoRedirectBannerReader": "Otevírat články z této stránky vždy v režimu čtení?",
    "buttonReaderRedirectYes": "Ano",
    "buttonReaderRedirectNo": "Ne",
    "articleReaderView": "Původní článek",
    /* Download manager */
    "downloadCancel": "Ukončit",
    "downloadStateCompleted": "Dokončeno",
    "downloadStateFailed": "Selhalo",
    /* Update Notifications */
    "updateNotificationTitle": "Je dostupná nová verze prohlížeče",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "Automatické vkládání hesla",
    "settingsSelectPasswordManager": "Vyberte jeden z podporovaných správců hesel:",
    "keychainViewPasswords": "Zobrazit uložená hesla",
    /* Password manager setup */
    "passwordManagerSetupHeading": "Dokončete nastavení %p pro použití automatického vkládání",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "Nejprve <a id='password-manager-setup-link'></a> a rozbalte archiv pro váš systém."
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "Stáhněte <a id='password-manager-setup-link-installer'></a> a přetáhněte soubor do pole níže:"
    },
    "passwordManagerSetupLink": "stáhněte %p CLI nástroj",
    "passwordManagerSetupLinkInstaller": "%p CLI instalátor",
    "passwordManagerSetupStep2": "Pak přetáhněte nástroj do pole níže:",
    "passwordManagerSetupDragBox": "Přetáhněte nástroj sem",
    "passwordManagerSetupInstalling": "Probíhá instalace...",
    "passwordManagerBitwardenSignIn": "Pro připojení vašeho Bitwarden účtu navštivte vault.bitwarden.com/#/settings/account, srolujte dolů a zvolte \"Zobrazit API klíč\". Tyto hodnoty poté vložte do textových polí níže.",
    "passwordManagerSetupSignIn": "Přihlaste se do vašeho správce hesel, abyste mohli začít používat automatické vkládání. Vaše přihlašovací údaje nebudou v prohlížeči nikde uchovány.",
    "disableAutofill": "Vypnout automatické vkládání",
    "passwordManagerSetupUnlockError": "Selhalo odemčení úložiště hesel: ",
    "passwordManagerSetupRetry": "Ujistěte se, že používáte správný soubor a zadáváte heslo správně. Můžete postup opakovat přetažením nástroje sem.",
    "passwordManagerUnlock": "Zadejte %p hlavní heslo pro odemčení úložiště hesel:",
    /* Password save bar */
    "passwordCaptureSavePassword": "Uložit heslo pro %s?",
    "passwordCaptureSave": "Uložit",
    "passwordCaptureDontSave": "Neukládat",
    "passwordCaptureNeverSave": "Nikdy neukládat",
    /* Password viewer */
    "savedPasswordsHeading": "Uložená hesla",
    "savedPasswordsEmpty": "Žádná uložená hesla",
    "savedPasswordsNeverSavedLabel": "Nikdy neukládat",
    "deletePassword": "Odstranit heslo pro %s?",
    /* Dialogs */
    "loginPromptTitle": "Přihlášení do %h (%r)", //%h is replaced with host, %r with realm (title of protected part of site)
    "dialogConfirmButton": "Potvrdit",
    "dialogSkipButton": "Ukončit",
    "username": "Uživatelské jméno",
    "email": "E-mail",
    "password": "Heslo",
    "secretKey": "Tajný klíč",
    "openExternalApp": "Otevřít v \\\"%s\\\"?",
    "clickToCopy": "Klikněte pro kopírování",
    "copied": "Zkopírováno"
  }
}
