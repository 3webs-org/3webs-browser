export default {
  "name": "Uzbek",
  "identifier": "uz",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": null, //missing translation
    "pictureInPicture": "Rasmda rasm",
    "openInNewTab": "Havolani yangi varaqda ochish",
    "openInNewPrivateTab": "Havolani yangi maxfiy oynada ochish",
    "saveLinkAs": null, //missing translation
    "viewImage": "Rasmni ko'rish",
    "openImageInNewTab": "Rasmni yangi varaqda ochish",
    "openImageInNewPrivateTab": "Rasmni yangi maxfiy varaqda ochish",
    "saveImageAs": "Rasmni saqlash",
    "searchWith": "%s bilan izlash", //%s will be replaced with the name of the current search engine
    "copyLink": "Havoladan nusxa olish",
    "copyEmailAddress": null, //missing translation
    "selectAll": "Barchasini tanlash",
    "undo": "Bekor qilish",
    "redo": "Qayta qilish",
    "cut": "Kesish",
    "copy": "Nusxa olish", //this is a verb (as in "copy the currently-selected text")
    "paste": "Qo'yish",
    "goBack": "Ortga qaytish",
    "goForward": "",
    "inspectElement": "Elementni kuzatish",
    /* searchbar */
    "pasteAndGo": null, //missing translation
    "DDGAnswerSubtitle": "Javob", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "Taklif qilingan sahifa", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "DuckDuckGo dan javoblar", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "Vazifa %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "Ko'proq ko'rsatish",
    "viewSettings": "Sozlamarni ko'rish",
    "takeScreenshot": "Skrinshot olish",
    "clearHistory": "Barcha tarixni o'chirish",
    "enableBlocking": "Ushbu sahifaga kontent bloklashni yoqish",
    "disableBlocking": "Ushbu sahifaga kontent bloklashni o'chirish",
    "clearHistoryConfirmation": "Barcha tarix va ma'lumotlar o'chirilsinmi?",
    "switchToTask": "Boshqa vazifaga o'tish",
    "createTask": "Yangi vazifa",
    "closeTask": "Vazifani yopish",
    "moveToTask": "Ushbu varaqni vazifa o'tkazish",
    "nameTask": "Vazifaga nom berish",
    "addBookmark": "Xatcho'pga qo'shish",
    "searchBookmarks": "Xatcho'plarni izlash",
    "bookmarksAddTag": "Teg qo'shish...",
    "bookmarksRenameTag": null, //missing translation
    "bookmarksDeleteTag": null, //missing translation
    "deleteBookmarksWithTag": null, //missing translation
    "bookmarksSimilarItems": "Bir xil elementlar",
    "searchHistory": "Tarixdan qidirish",
    "importBookmarks": "Xatcho'plarni HTML fayldan import qilish",
    "exportBookmarks": "Xatcho'plarni export qilish",
    "runUserscript": null, //missing translation
    /* navbar */
    "openMenu": "Menyuni ochish", //application menu button on windows
    "enterReaderView": "O'quvchi ko'rinishiga kirish",
    "exitReaderView": "O'quvchi ko'rinishidan chiqish",
    "newTabLabel": "Yangi varaq", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "Bu sahifa bilan aloqa xavfsiz emas",
    "searchbarPlaceholder": "Qidirin yoki manzilni kiriting",
    "privateTab": "Maxfiy varaq",
    "newTabAction": "Yangi varaq", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "Vazifalarni ko'rish",
    "newTask": "Yangi vazfa", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "Vazifa %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "Vazifa o'chirildi. <a>Bekor qilasizmi?</a>"
    },
    "tasksSearchTabs": null, //missing translation
    "returnToTask": "Oldingi vazifaga qaytish",
    "taskDescriptionTwo": "%t va %t", //used to describe a task that has two tabs, %t is replaced with the tab titles
    "taskDescriptionThree": "%t, %t, va yana %n", //used to describe a task that has three or more tabs
    /* find in page toolbar */
    "searchInPage": "Sahifadan qidirish", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%i dan %t topildi", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%i dan %t topildi",
    /* Focus mode */
    "isFocusMode": "Siz Fokus Rejimidasiz",
    "closeDialog": "OK", //used as a label for the button that closes the dialog
    "focusModeExplanation1": null, //missing translation "In focus mode, you can't create new tabs or switch tasks."
    "focusModeExplanation2": null, //missing translation "You can leave focus mode by unchecking \"focus mode\" in the view menu."
    /* relative dates */
    "timeRangeJustNow": "Hozirgina",
    "timeRangeMinutes": "Bir necha daqiqa oldin",
    "timeRangeHour": "O'tgan soatda",
    "timeRangeToday": "Bugun",
    "timeRangeYesterday": "Kecha",
    "timeRangeWeek": "O'tgan hafta",
    "timeRangeMonth": "O'tgan oy",
    "timeRangeYear": "O'tgan yil",
    "timeRangeLongerAgo": "Ancha oldin",
    /* pages/error/index.html */
    "crashErrorTitle": "Nimadir noto'g'ro bajarildi.",
    "crashErrorSubtitle": "Muammo shu sahifani ko'rsatayotganda sodir build.",
    "errorPagePrimaryAction": "Yana urinib ko'ring",
    "serverNotFoundTitle": "Server topilmadi",
    "serverNotFoundSubtitle": "Min bu sahifani topa olmadi.",
    "archiveSearchAction": "archive.org da qidirish",
    "sslErrorTitle": "Bu sahifa mabjud emas",
    "sslErrorMessage": "Min bu sahifaga xavfsiz ulana olmadi.",
    "dnsErrorTitle": "Sahifa topilmadi",
    "dnsErrorMessage": "DNS muammo yuz berdi",
    "offlineErrorTitle": "Siz oflaynsiz",
    "offlineErrorMessage": "Internetga qayta ulaning va yana urinib ko'ring.",
    "genericConnectionFail": "Min sahifaga ulana olamadi.",
    "sslTimeErrorMessage": "Min bu sahifaga xavfsiz ulana olmadi. Iltimos, kompyuter soati to'g'ri sozlanganiga ishonch hosil qiling.",
    "addressInvalidTitle": "Bu manzil yaroqsiz.",
    "genericError": "Muammo yuz berdi",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "Bu sahifa sizga ziyon yetkazishi mumkin.",
    "phishingErrorMessage": "Ushbu sahifa sizning shaxsiy ma'lumotlaringizni, masalan, parollar yoki bank ma'lumotlarini o'g'irlashga urinayotgan bo'lishi mumkin.",
    "phishingErrorVisitAnyway": "Baribir sahifaga kirish",
    "phishingErrorLeave": "Sahifani tark etish",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "Muammo yuz berdi. Iltimos, barcha ochiq namunalarni yopib Minni qaytadan oching.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "Muammo yuz berdi",
    "sessionRestoreErrorExplanation": "Sizning saqlangan varaqlaringizni to'g'ri tiklab bo'lmadi",
    "sessionRestoreErrorBackupInfo": "Biz sizning ma'lumotlaringizni ushbu manzilga saqlab qo'yganmiz: %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "Agar bu muammo yuz berishni davom etsa, iltimos yangi masala oching <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">here</a>."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "Parametlar",
    "settingsRestartRequired": "Ozgarishlar qo'llanishi uchun qayta ishga tushirishingiz kerak.",
    "settingsPrivacyHeading": "Kontent Bloklash",
    "settingsContentBlockingLevel0": "Barcha reklama va kuzatuvchilarga ruxsat berish",
    "settingsContentBlockingLevel1": "Uchini-partiya reklama va kuzatuvchilarni bloklash",
    "settingsContentBlockingLevel2": "Barcha reklama va kuzatuvchilarni bloklash",
    "settingsContentBlockingExceptions": "Reklamalar ushbu sahifalarda ruxsat beriladi:",
    "settingsBlockScriptsToggle": "Skriptlarni bloklash",
    "settingsBlockImagesToggle": "Rasmlarni bloklash",
    "settingsBlockedRequestCount": {
      "unsafeHTML": null //missing translation
    },
    "settingsCustomBangs": null, // missing translation
    "settingsCustomBangsAdd": null, // missing translation
    "settingsCustomBangsPhrase": null, // missing translation
    "settingsCustomBangsSnippet": null, // missing translation
    "settingsCustomBangsRedirect": null, // missing translation
    "settingsCustomizeFiltersLink": null, //missing translation
    "settingsEnableDarkMode": "Ko'rinish:",
    "settingsDarkModeNever": null, //"Never" missing translation
    "settingsDarkModeNight": null, //"At night" missing translation
    "settingsDarkModeAlways": null, //"Always" missing translation
    "settingsDarkModeSystem": null,
    "settingsDarkModeToggle": "Qorong'u rejimini yoqish",
    "settingsSiteThemeToggle": "Sahifa mavzusini yoqish",
    "settingsAdditionalFeaturesHeading": "Qo'shimcha xususiyatlar",
    "settingsUserscriptsToggle": "Foydalanuvchi skriptlarini yoqish",
    "settingsShowDividerToggle": null, //missing translation
    "settingsSeparateTitlebarToggle": "Alohida sarlavha paneli ishlatish",
    "settingsAutoplayToggle": null, //missing translation 
    "settingsOpenTabsInForegroundToggle": null, //missing translation
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "Foydalanuvchi skriptlari sahifa ishlashini o'zgartirishga yordam beradi - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">qo'shimcha ma'lumot</a>."
    },
    "settingsUserAgentToggle": "Maxsus foydalanvuchi agentidan foydalanish",
    "settingsUpdateNotificationsToggle": " Yangilanishlarni avtomatik ravishda tekshirish",
    "settingsUsageStatisticsToggle": null, //missing translation
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "Qidiruv Tizimi",
    "settingsDefaultSearchEngine": "Standart qidiruv tizimini tanlang:",
    "settingsDDGExplanation": "Qidiruv panelida tezkor javoblarni ko'rish uchun DuckDuckGo ni standart qidiruv tizimi sifatida o'rnating.",
    "customSearchEngineDescription": "Qidiruv so'zini %s bilan almashtirish",
    "settingsKeyboardShortcutsHeading": "Klaviatura yorliqlari",
    "settingsKeyboardShortcutsHelp": "Yorliqlarni vergul bilan ajrating.",
    "settingsProxyHeading": null, //missing translation
    "settingsNoProxy": null, //missing translation
    "settingsManualProxy": null, //missing translation
    "settingsAutomaticProxy": null, //missing translation
    "settingsProxyRules": null, //missing translation
    "settingsProxyBypassRules": null, //missing translation
    "settingsProxyConfigurationURL": null, //missing translation
    /* app menu */
    "appMenuFile": "Fayl",
    "appMenuNewTab": "Yangi varaq",
    "appMenuDuplicateTab": "Duplikat varaq",
    "appMenuNewPrivateTab": "Yangi maxfiy varaq",
    "appMenuNewTask": "Yangi vazifa",
    "appMenuSavePageAs": "Sahifani saqlash",
    "appMenuPrint": "Chop etish",
    "appMenuEdit": "O'zgartirish",
    "appMenuUndo": "Bekor qilish",
    "appMenuRedo": "Qayta qilish",
    "appMenuCut": "Kesish",
    "appMenuCopy": "Nusxa olish",
    "appMenuPaste": "Qo'yish",
    "appMenuSelectAll": "Barchasini tanlash",
    "appMenuFind": "Izlash",
    "appMenuView": "Ko'rinish",
    "appMenuZoomIn": "Kattalashtirish",
    "appMenuZoomOut": "Kichiklashtirish",
    "appMenuActualSize": "Haqiqiy hajmi",
    "appMenuFullScreen": "To'liq ekran", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "Fokus Rejimi",
    "appMenuBookmarks": "Xatcho'plar",
    "appMenuHistory": "Tarix",
    "appMenuDeveloper": "Dasturchi",
    "appMenuReloadBrowser": "Brauzerni qayta ochish",
    "appMenuInspectBrowser": "Brauzerni kuzatish",
    "appMenuInspectPage": "Sahifani kuzatish",
    "appMenuWindow": "Oyna",
    "appMenuMinimize": "Kichraytirish",
    "appMenuClose": "Yopish",
    "appMenuAlwaysOnTop": "Har doim tepada",
    "appMenuHelp": "Yordam",
    "appMenuKeyboardShortcuts": "Klaviatura yorliqlari",
    "appMenuReportBug": "Xato haqida xabar berish",
    "appMenuTakeTour": "Sayohat qilish",
    "appMenuViewGithub": "GitHub-da ko'rish",
    "appMenuAbout": "%n haqida", //%n is replaced with app name
    "appMenuPreferences": "Parametlar",
    "appMenuServices": "Xizmatlar",
    "appMenuHide": "%n berkitish",
    "appMenuHideOthers": "Boshqalarni yashirin",
    "appMenuShowAll": "Barchasini ko'rsatish",
    "appMenuQuit": "%n chiqish",
    "appMenuBringToFront": "Barchasini oldinga olib kelish",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "Sahifa <input type='text'/> of <span id='total'></span>"
    },
    /* Context Reader */
    "buttonReaderSettings": null, //missing translation "Reader Settings"
    "buttonReaderLightTheme": null, //missing translation "Light"
    "buttonReaderSepiaTheme": null, //missing translation "Sepia"
    "buttonReaderDarkTheme": null, //missing translation "Dark"
    "openReaderView": null, //missing translation "Always open in reader view"
    "autoRedirectBannerReader": null, //missing translation "Always open articles from this site in reader view?"
    "buttonReaderRedirectYes": null, //missing translation "Yes"
    "buttonReaderRedirectNo": null, //missing translation "No"
    "articleReaderView": null, //missing translation "Original Article"
    /* Download manager */
    "downloadCancel": "Bekor qilish",
    "downloadStateCompleted": "Yakunlangan",
    "downloadStateFailed": "Muvaffaqiyatsiz",
    /* Update Notifications */
    "updateNotificationTitle": "Minning yangi versiyasi mavjud",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "Parolni avtomatik to'ldirish",
    "settingsSelectPasswordManager": "Parol menejerlardan birini tanlang:",
    "keychainViewPasswords": null, //missing translation
    /* Password manager setup */
    "passwordManagerSetupHeading": "Avtomatik to'ldirishni ishlatish uchun %p ni sozlashni tugating",
    "passwordManagerSetupStep1": {
      "unsafeHTML": " Birinchi, <a id='password-manager-setup-link'></a> va o'z tizimingizga chiqarib oling."
    },
    "passwordManagerSetupLink": "%p CLI vositasini yuklab oling",
    "passwordManagerSetupStep2": "Keyin vositani quyidagi maydonchaga torting:",
    "passwordManagerSetupDragBox": "Vositani bu yerga torting",
    "passwordManagerSetupInstalling": "O'rnatilmoqda...",
    "passwordManagerBitwardenSignIn": null, //missing translation
    "passwordManagerSetupSignIn": "Avtomatik to'ldirishni ishlatish uchun parol menejeringiz tizimiga kiring. Sizning ma'lumotlaringiz Minni hech qanday joyida saqlanmaydi.",
    "disableAutofill": "Avtomatik to'ldirishni o'chirish",
    "passwordManagerSetupUnlockError": "Parollar do'konini ochish muvaffaqiyatsiz bo'ldi: ",
    "passwordManagerSetupRetry": "To'g'ri fayl va parol kiritayotganingizga ishonch hosil qiling. Qayta urinib ko'rish uchun vositani bu yerga torting.",
    "passwordManagerUnlock": "Parol do'konini ochish uchun usta parolni kiriting:",
    /* Password save bar */
    "passwordCaptureSavePassword": null, //missing translation
    "passwordCaptureSave": null, //missing translation
    "passwordCaptureDontSave": null, //missing translation
    "passwordCaptureNeverSave": null, //missing translation
    /* Password viewer */
    "savedPasswordsHeading": null, //missing translation
    "savedPasswordsEmpty": null, //missing translation
    "savedPasswordsNeverSavedLabel": null, //missing translation
    "deletePassword": null, //missing translation
    /* Dialogs */
    "loginPromptTitle": "%h (%r) tizimiga kirish", //%h is replaced with host, %r with realm (title of protected part of site)
    "dialogConfirmButton": "Tasdiqlash",
    "dialogSkipButton": "Bekor qilish",
    "username": "Foydalanuvchi ismi",
    "email": "Elektron pochta",
    "password": "Parol",
    "secretKey": "Maxfiy kalit",
    "openExternalApp": null, //missing translation
    "clickToCopy": null, //missing translation
    "copied": null //missing translation
  }
}
