export default {
  "name": "Arabic",
  "identifier": "ar",
  "rtl": true,
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "أضف إلى القاموس", 
    "pictureInPicture": "صورة داخل صورة", 
    "openInNewTab": "فتح الرابط في علامة تبويب جديدة",
    "openInNewPrivateTab": "فتح الرابط في التصفح المتخفي",
    "saveLinkAs": "حفظ الرابط باسم",
    "viewImage": "مشاهدة الصورة",
    "openImageInNewTab": "فتح الصورة في علامة تبويب جديدة",
    "openImageInNewPrivateTab": "فتح الصورة في التصفح المتخفي",
    "saveImageAs": "حفظ الصورة باسم",
    "searchWith": "%s بحث مع", //%s will be replaced with the name of the current search engine
    "copyLink": "نسخ الرابط",
    "copyEmailAddress": "نسخ عنوان البريد الإلكتروني",
    "undo": "تراجع",
    "redo": "إعادة",
    "cut": "قص",
    "copy": "نسخ", //this is a verb (as in "copy the currently-selected text")
    "paste": "لصق",
    "goBack": "الرجوع الى الوراء",
    "goForward": "تقدم للامام",
    "inspectElement": "فحص العنصر",
    /* searchbar */
    "pasteAndGo": "ألصق و انتقل",
    "DDGAnswerSubtitle": "جواب", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "الموقع المقترح", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "DuckDuckGo نتائج من", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "%n مهمة", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "عرض المزيد من الإختصارات",
    "viewSettings": "عرض الاعدادات",
    "takeScreenshot": "خذ لقطة شاشة",
    "clearHistory": "مسح السجل",
    "enableBlocking": "تفعيل منع المحتوى لهذا الموقع",
    "disableBlocking": "إلغاء منع المحتوى لهذا الموقع",
    "clearHistoryConfirmation": "إمسح كل السجل و بيانات التصفح",
    "switchToTask": "تحويل الى مهام",
    "createTask": "انشاء مهمة",
    "closeTask": "غلق مهمة ",
    "moveToTask": "نقل التبويب الى المهام",
    "nameTask": "سمّ المهمة",
    "addBookmark": "أضف إشارة",
    "searchBookmarks": "البحث عن الإشارات",
    "bookmarksAddTag": "أضف علامة",
    "bookmarksRenameTag": null, //missing translation
    "bookmarksDeleteTag": null, //missing translation
    "deleteBookmarksWithTag": null, //missing translation
    "bookmarksSimilarItems": "عناصرة مشابهة",
    "searchHistory": "البحث في السجل",
    "importBookmarks": "إسترد إشارات",
    "exportBookmarks": "صدّر إشارات",
    "runUserscript": "شغّل سكريبت من طرف المستخدم",
    /* navbar */
    "openMenu": "فتح القائمة", //application menu button on windows
    "enterReaderView": "دخول وضع القراءة",
    "exitReaderView": "خروج وضع القراءة",
    "newTabLabel": "تبويب جديد", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "اتصالك مع هدا الموقع غير محمي.",
    "searchbarPlaceholder": "ابحث او ادخل الرابط",
    "privateTab": "تبويب متخفي",
    "newTabAction": "تبويب جديد", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "عرض المهام",
    "newTask": "مهمة جديدة", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": " %n مهمة رقم", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "<a>تراجع؟</a> .تم حذف المهمة"
    },
    "tasksSearchTabs": "البحث في التبويبات",
    "returnToTask": "عد إلى المهمة السابقة",
    "taskDescriptionTwo": "%t و %t",
    "taskDescriptionThree": "أخرى %n و %t ,%t",
    /* find in page toolbar */
    "searchInPage": "ابحث في الصفحة", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "مطابق %i من %t", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "مطابق %i من %t",
    /* Focus mode */
    "isFocusMode": "أنت في وضع التركيز.",
    "closeDialog": "تم", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "في وضع التركيز لا يمكنك فتح تبويب جديد أو تغيير المهمة ",
    "focusModeExplanation2": "يمكنك مغادرة وضع التركيز عن طريق الضغط على  وضع التركيز في قائمة المشاهدة",
    /* relative dates */
    "timeRangeJustNow": "الآن",
    "timeRangeMinutes": "قبل عدة دقائق",
    "timeRangeHour": "قبل عدة ساعات",
    "timeRangeToday": "اليوم",
    "timeRangeYesterday": "الأمس",
    "timeRangeWeek": "في الاسبوع الماضي",
    "timeRangeMonth": "في الشهر الماضي",
    "timeRangeYear": "في السنة الماضية",
    "timeRangeLongerAgo": "قديما",
    /* pages/error/index.html */
    "crashErrorTitle": "حدث خطأ ما.",
    "crashErrorSubtitle": "حدثت مشكلة أثناء عرض هذه الصفحة.",
    "errorPagePrimaryAction": "اعد المحاولة",
    "serverNotFoundTitle": "الخادم غير موجود",
    "serverNotFoundSubtitle": "لم يستطع الحصول على هذا الموقع",
    "archiveSearchAction": "archive.org البحث في",
    "sslErrorTitle": "هذا الموقع لا يوجد ",
    "sslErrorMessage": "لا يستطيع الاتصال الامن مع هذا الموقع",
    "dnsErrorTitle": "الموقع غير موجود",
    "dnsErrorMessage": "حدث خطأ في DNS",
    "offlineErrorTitle": "انت خارج الاتصال",
    "offlineErrorMessage": "اعد الاتصال مع الانترنيت تم اعد المحاولة",
    "genericConnectionFail": "لا يستطيع الاتصال مع الموقع",
    "sslTimeErrorMessage": " لا يستطيع الاتصال الامن مع هذا الموقع تأكد من ان التوقيت صحيح",
    "addressInvalidTitle": "هذا العنوان غير صحيح",
    "genericError": "حدث خطأ ما",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "هذا الموقع يمكن ان يضرك",
    "phishingErrorMessage": "هذا الموقع يمكن ان يحاول ان يسرق معلوماتك الشخصية . كلمات مرور و معلوماتك البنكية",
    "phishingErrorVisitAnyway": "متابعة على اية حال",
    "phishingErrorLeave": "مغادرة الموقع",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "حدث خطأ. الرجاء إغلاق أي نوافد مفتوحة أخرى وإعادة تشغيل",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "حدث خطأ ما",
    "sessionRestoreErrorExplanation": "لم نستطيع اعادة فتح التبويبات المحفوظة بشكل صحيح",
    "sessionRestoreErrorBackupInfo": " %l حفظنا نسخة احتياطية لمعلوماتك. وسوف تجدها في المسار التالي", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">هنا</a> ادا ظهر لك \"هذا المشكل مرة اخرى.قم بفتح مشكلة "
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "تفضيلات",
    "settingsRestartRequired": "قم بأعادة تشغيل المتصفح لتطبيق هده التغيرات",
    "settingsPrivacyHeading": "منع المحتوى",
    "settingsContentBlockingLevel0": "السماح لجميع الاعلانات و المتعقبين",
    "settingsContentBlockingLevel1": "حظر اعلانات الطرف الثالت و المتعقبين",
    "settingsContentBlockingLevel2": "حظر جميع الاعلانات و المتعقبين",
    "settingsContentBlockingExceptions": "سيظل مسموحًا بعرض الاعلانات على هده المواقع",
    "settingsBlockScriptsToggle": "منع السكريبت",
    "settingsBlockImagesToggle": "منع الصور",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "قام المتصفح بحظر <strong></strong> إعلان و متعقب"
    },
    "settingsCustomBangs": "إختصارات bangs",
    "settingsCustomBangsAdd": "أضف إختصار",
    "settingsCustomBangsPhrase": "جملة (ضرورية)",
    "settingsCustomBangsSnippet": "وصف (إختياري)",
    "settingsCustomBangsRedirect": "الرابط (ضروري)",
    "settingsCustomizeFiltersLink": "تعديل المرشحات",
    "settingsAppearanceHeading": "تفضيلات",
    "settingsEnableDarkMode": "تفعيل الوضع الداكن",
    "settingsDarkModeNever": "لا",
    "settingsDarkModeNight": "في الليل",
    "settingsDarkModeAlways": "دائما",
    "settingsDarkModeSystem": "استخدم اعدادت النظام",
    "settingsSiteThemeToggle": "تفعيل سمة الموقع",
    "settingsShowDividerToggle": "عرض الفاصل بين علامات التبويب",
    "settingsAdditionalFeaturesHeading": "مميزات اضافية",
    "settingsUserscriptsToggle": "تمكين سكريبت المستخدم",
    "settingsSeparateTitlebarToggle": "إستعمل شريط عنوان منفصل",
    "settingsAutoplayToggle": "تفعيل التشغيل التلقائي",
    "settingsOpenTabsInForegroundToggle": "الإنتقال إلى  التبويب الجديد عند فتحه",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "يمكن سكريبت المستخدم من  تغير سلوك المواقع - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">معرفة المزيد</a>."
    },
    "settingsUserAgentToggle": "خاص user-agent إستخدم",
    "settingsUpdateNotificationsToggle": "إبحث تلقائيا عن التحديثات",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML":"إرسال إحصائيات المستخدم - <a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">معرفة المزيد</a>"
    },
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "محرك بحث",
    "settingsDefaultSearchEngine": "اختر محرك بحث اساسي",
    "settingsDDGExplanation": "كمحرك بحث اساسي لرؤية النتائج الآنية في مربع البحث DuckDuckGo ",
    "customSearchEngineDescription": "%s غير كلمة البحث ب",
    "settingsKeyboardShortcutsHeading": "اختصار لوحة مفاتيح",
    "settingsKeyboardShortcutsHelp": "اسعمل الفاصلة للفصل بين الاختصارات",
    "settingsProxyHeading": "وسيط",
    "settingsNoProxy": "غير مستعمل",
    "settingsManualProxy": "إعداد الوسيط يدويا",
    "settingsAutomaticProxy": "تعرف تلقائيا على إعدادات الوسيط",
    "settingsProxyRules": "إعدادات الوسيط",
    "settingsProxyBypassRules": "لا وسيط ل",
    "settingsProxyConfigurationURL": "رابط الوسيط",
    /* app menu */
    "appMenuFile": "ملف",
    "appMenuNewTab": "تبويب جديد",
    "appMenuDuplicateTab": "تكرير التبويب",
    "appMenuNewPrivateTab": "التصفح الخفي",
    "appMenuNewTask": "مهمة جديدة",
    "appMenuSavePageAs": "حفظ الصفحة باسم",
    "appMenuPrint": "طباعة",
    "appMenuEdit": "تعديل",
    "appMenuUndo": "تراجع",
    "appMenuRedo": "اعادة",
    "appMenuCut": "قص",
    "appMenuCopy": "نسخ",
    "appMenuPaste": "لصق",
    "appMenuSelectAll": "تحديد الكل",
    "appMenuFind": "بحث",
    "appMenuView": "مشاهدة",
    "appMenuZoomIn": "تكبير",
    "appMenuZoomOut": "تصغير",
    "appMenuActualSize": "حجم حقيقي",
    "appMenuFullScreen": "ملء الشاشة", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "وضع التركيز",
    "appMenuBookmarks": "اشارة",
    "appMenuHistory": "سجل",
    "appMenuDeveloper": "مطور",
    "appMenuReloadBrowser": "اعادة تحميل المتصفح",
    "appMenuInspectBrowser": "فحص المتصفح",
    "appMenuInspectPage": "فحص الصفحة",
    "appMenuWindow": "نافذة",
    "appMenuMinimize": "تصغير",
    "appMenuClose": "اغلاق",
    "appMenuAlwaysOnTop": "دائما في الفوق",
    "appMenuHelp": "مساعدة",
    "appMenuKeyboardShortcuts": "اختصار لوحة مفاتيح",
    "appMenuReportBug": "الابلاغ عن الخطأ",
    "appMenuTakeTour": "خذ جولة",
    "appMenuViewGithub": "GitHub مشاهدة قي",
    "appMenuAbout": "%n حول", //%n is replaced with app name
    "appMenuPreferences": "تفضيلات",
    "appMenuServices": "خدمات",
    "appMenuHide": "%n اخفاء",
    "appMenuHideOthers": "اخفاء الباقي",
    "appMenuShowAll": "عرض الكل",
    "appMenuQuit": "%n انهاء",
    "appMenuBringToFront": "جلب الكل الى المقدمة",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "<span id='total'></span> صفخة <input type='text'/> من"
    },
    /* Context Reader */
    "buttonReaderSettings": "إعدادات القارئ",
    "buttonReaderLightTheme": "فاتح",
    "buttonReaderSepiaTheme": "بني داكن",
    "buttonReaderDarkTheme": "داكن",
    "openReaderView": "دائما إفتح  في وضع القارئ",
    "autoRedirectBannerReader": "دائما إفتح مقالات هذا الموقع في وضع القارئ",
    "buttonReaderRedirectYes": "نعم",
    "buttonReaderRedirectNo": "لا",
    "articleReaderView": "المقال الأصلي",
    /* Download manager */
    "downloadCancel": "الغاء",
    "downloadStateCompleted": "تم بنجاح",
    "downloadStateFailed": "فشل",
    /* Update Notifications */
    "updateNotificationTitle": "نسخة جديدة من المتصفح متوفرة",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "ملء تلقائي لكلمة المرور",
    "settingsSelectPasswordManager": "إختر واحد من مسيري كلمات المرور",
    "keychainViewPasswords": "عرض كلمات المرور المحفوظة",
    /* Password manager setup */
    "passwordManagerSetupHeading": "تم الإنتهاء من %p لاستخدام الملء التلقائي",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "أولاً، <a id='password-manager-setup-link'></a> وقم باستخراجه إلى نظامك الحالي"
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "حمل <a id='password-manager-setup-link-installer'></a> ثم قم بجر الملف للصندوق بالأسفل:"
    },
    "passwordManagerSetupLink": "حمل أداة الطرفية %p",
    "passwordManagerSetupLinkInstaller":  "ملف تثبيت الطرفية %p",
    "passwordManagerSetupStep2": "ثم قم بجر الأداة للصندوق بالأسفل", 
    "passwordManagerSetupDragBox": "جر الأداة هنا", 
    "passwordManagerSetupInstalling": "يتم التثبيت", 
    "passwordManagerBitwardenSignIn": "لتوصيل حساب Bitwarden الخاص بك إذهب إلى vault.bitwarden.com/#/settings/account، ثم اذهب الى اسفل الصفحة، واختر \"View API Key\" بعدها ألصقه في الحقل بالأسفل.", 
    "passwordManagerSetupSignIn": "قم بتسجيل الدخول إلى مدير كلمات المرور الخاص بك لإستخدم الملء التلقائي، معلومات الدخول لن يتم تخزينها في اي مكان داخل", 
    "disableAutofill": "إلغاء تفعيل الملء التلقائي", 
    "passwordManagerSetupUnlockError": "فشل في فتح مخزن كلمات المرور: ", 
    "passwordManagerSetupRetry": "تأكد من إستخدامك الملف الصحيح وإدخال كلمة مرور صحيحة. يمكنك المحاولة عن طريق جر الأداة هنا مجدداً.", 
    "passwordManagerUnlock": "أدخل كلمة المرور الرئيسية الخاصة بـ %p لفتح مخزن كلمات المرور:", 
    /* Password save bar */
    "passwordCaptureSavePassword": "؟%s حقظ كلمة المرور ل",
    "passwordCaptureSave": " حفظ",
    "passwordCaptureDontSave": "لا تحفظ",
    "passwordCaptureNeverSave": "لا تحفظ أبدا ",
    /* Password viewer */
    "savedPasswordsHeading": "كلمات المرور المحفوظة",
    "savedPasswordsEmpty": "لا توجد كلمات مرور محفوظة",
    "savedPasswordsNeverSavedLabel": "لم يتم حفطها",
    "deletePassword": "؟%s حذف كلمة المرور ل",

    /* Dialogs */
    "loginPromptTitle": "(%r) %h تسجيل الدخول إلى",
    "dialogConfirmButton": "موافقة",
    "dialogSkipButton": "إلغاء",
    "username": "إسم المستخدم",
    "email": "البريد الإلكتروني",
    "password": "كلمة المرور",
    "secretKey": "المفتاح السري",
    "openExternalApp": " ؟\\\"%s\\\" إفتح في ",
    "clickToCopy": "إنسخ", 
    "copied": "تم النسخ" 
  }
}
