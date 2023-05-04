export default {
  "name": "Français",
  "identifier": "fr",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "Ajouter au dictionnaire",
    "pictureInPicture": "Mini lecteur",
    "openInNewTab": "Ouvrir dans un nouvel onglet",
    "openInNewPrivateTab": "Ouvrir dans un onglet de navigation privée",
    "saveLinkAs": "Enregistrer le lien sous",
    "viewImage": "Voir l'image",
    "openImageInNewTab": "Ouvrir l'image dans un nouvel onglet",
    "openImageInNewPrivateTab": "Ouvrir l'image dans un onglet de navigation privée",
    "saveImageAs": "Enregistrer l'image sous",
    "searchWith": "Rechercher avec %s", //%s will be replaced with the name of the current search engine
    "copyLink": "Copier le lien",
    "copyEmailAddress": "Copier l'adresse e-mail",
    "selectAll": "Tout sélectionner",
    "undo": "Annuler",
    "redo": "Rétablir",
    "cut": "Couper",
    "copy": "Copier", //this is a verb (as in "copy the currently-selected text")
    "paste": "Coller",
    "goBack": "Retour",
    "goForward": "Avancer",
    "inspectElement": "Inspecter l'élément",
    /* searchbar */
    "pasteAndGo": "Coller et suivre",
    "DDGAnswerSubtitle": "Réponse", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "Site suggéré", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "Résultats de DuckDuckGo", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "Tâche %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "Afficher plus de bangs",
    "viewSettings": "Voir les réglages",
    "takeScreenshot": "Prendre une capture d'écran",
    "clearHistory": "Vider l'historique",
    "enableBlocking": "Activer le blocage",
    "disableBlocking": "Désactiver le blocage",
    "clearHistoryConfirmation": "Effacer toutes les données d'historique et de navigation ?",
    "switchToTask": "Changer de tâche",
    "createTask": "Créer une tâche",
    "closeTask": "Fermer cette tâche",
    "moveToTask": "Déplacer cette tâche à cet onglet",
    "nameTask": "Nommer la tâche",
    "addBookmark": "Ajouter un marque-page",
    "searchBookmarks": "Rechercher des signets",
    "bookmarksAddTag": "Ajouter une étiquette de marque-page",
    "bookmarksRenameTag": null, //missing translation
    "bookmarksDeleteTag": null, //missing translation
    "deleteBookmarksWithTag": null, //missing translation
    "bookmarksSimilarItems": "Éléments similaires",
    "searchHistory": "Rechercher dans l'historique",
    "importBookmarks": "Importer les marque-pages",
    "exportBookmarks": "Exporter les marque-pages",
    "runUserscript": "Exécuter un script d'utilisateur",
    /* navbar */
    "openMenu": "Ouvrir le menu", //application menu button on windows
    "enterReaderView": "Entrer en mode lecteur",
    "exitReaderView": "Sortir du mode lecteur",
    "newTabLabel": "Nouvel onglet", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "Votre connexion n'est pas sécurisée.",
    "searchbarPlaceholder": "Recherchez et entrez une adresse",
    "privateTab": "Onglet privé",
    "newTabAction": "Ajouter un onglet", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "Voir les tâches",
    "newTask": "Ouvrir une nouvelle tâche", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "Tâche %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "Tâche supprimée. <a>Annuler ?</a>"
    },
    "tasksSearchTabs": null, //missing translation
    "returnToTask": "Revenir à la tâche précédente",
    "taskDescriptionTwo": "%t et %t",
    "taskDescriptionThree": "%t, %t, et %n",
    /* find in page toolbar */
    "searchInPage": "Rechercher dans la page", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "Occurence %i parmi %t correspondance", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "Occurence %i parmi %t correspondances",
    /* Focus mode */
    "isFocusMode": "Vous êtes en mode Focus.",
    "closeDialog": "D'accord", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "En mode focus vous ne pouvez créer de nouvel onglet ni changer de tâche",
    "focusModeExplanation2": "Vous pouvez quitter le mode Focus en décochant \"Mode Focus\" dans le menu",
    /* relative dates */
    "timeRangeJustNow": "À l'instant",
    "timeRangeMinutes": "Il y a quelques minutes",
    "timeRangeHour": "Il y a quelques heures",
    "timeRangeToday": "Aujourd'hui",
    "timeRangeYesterday": "Hier",
    "timeRangeWeek": "Cette semaine",
    "timeRangeMonth": "Ce mois-ci",
    "timeRangeYear": "Cette année",
    "timeRangeLongerAgo": "Il y a plus longtemps",
    /* pages/error/index.html */
    "crashErrorTitle": "Il y a eu un problème.",
    "crashErrorSubtitle": "Il y a eu un problème en affichant cette page.",
    "errorPagePrimaryAction": "Essayer encore",
    "serverNotFoundTitle": "Serveur non trouvé",
    "serverNotFoundSubtitle": "Min ne peut pas trouver ce site internet.",
    "archiveSearchAction": "Rechercher sur archive.org",
    "sslErrorTitle": "Ce site n'est pas disponible",
    "sslErrorMessage": "Min ne peut pas établir une connexion sécurisée avec ce site.",
    "dnsErrorTitle": "Site non trouvé",
    "dnsErrorMessage": "Il y a eu un problème DNS avec ce site.",
    "offlineErrorTitle": "Vous êtes hors-ligne",
    "offlineErrorMessage": "Reconnectez-vous à internet et réessayez.",
    "genericConnectionFail": "Min ne peut pas se connecter à ce site internet.",
    "sslTimeErrorMessage": "Min ne peux pas établir une connexion sécurisée avec ce site. Merci de vérifier que votre horloge est bien réglée.",
    "addressInvalidTitle": "Cette adresse est invalide.",
    "genericError": "Il y a une erreur",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "Ce site pourrait vous nuire.",
    "phishingErrorMessage": "Ce site peux essayer de vous dérober vos informations personnelles, comme un mot de passe ou des informations bancaires",
    "phishingErrorVisitAnyway": "Visiter quand même",
    "phishingErrorLeave": "Quitter ce site",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "Une erreur a été rencontrée. Veuillez fermer les autres fenêtres et relancer Min.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "Il y a eu une erreur",
    "sessionRestoreErrorExplanation": "Vos onglets sauvegardés n'ont pas pu être restaurés correctement.",
    "sessionRestoreErrorBackupInfo": "Nous avons enregistrés une sauvegarde de vos données à cette endroit : %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "Si cette erreur continue à se produire, merci d'ouvrir un ticket : <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">ici</a>."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "Préférences",
    "settingsRestartRequired": "Vous devrez redémarrer le navigateur pour appliquer les changements.",
    "settingsPrivacyHeading": "Contenu bloqué",
    "settingsContentBlockingLevel0": "Autoriser toutes les publicités et traqueurs",
    "settingsContentBlockingLevel1": "Bloquer les publicités et traqueurs tiers",
    "settingsContentBlockingLevel2": "Bloquer toutes les publicités et traqueurs",
    "settingsContentBlockingExceptions": "Les publicités resteront activées sur les sites suivants :",
    "settingsBlockScriptsToggle": "Scripts bloqués",
    "settingsBlockImagesToggle": "Images bloquées",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "À ce jour, Min a bloqué <strong></strong> publicités et pisteurs"
    },
    "settingsCustomBangs": "Bangs personnalisés",
    "settingsCustomBangsAdd": "Ajouter un bang personnalisé",
    "settingsCustomBangsPhrase": "Phrase (obligatoire)",
    "settingsCustomBangsSnippet": "Description (optionnelle)",
    "settingsCustomBangsRedirect": "URL associée (obligatoire)",
    "settingsCustomizeFiltersLink": "Paramétrer les filtres",
    "settingsAppearanceHeading": "Apparence",
    "settingsEnableDarkMode": "Activer le mode nuit:",
    "settingsDarkModeNever": "Jamais",
    "settingsDarkModeNight": "La nuit",
    "settingsDarkModeAlways": "Toujours",
    "settingsDarkModeSystem": null,
    "settingsSiteThemeToggle": "Activer le thème du site",
    "settingsAdditionalFeaturesHeading": "Fonctionnalités supplémentaires",
    "settingsUserscriptsToggle": "Activer les scripts personnalisés",
    "settingsShowDividerToggle": "Afficher un séparateur entre les onglets",
    "settingsSeparateTitlebarToggle": "Afficher une barre de titre séparée",
    "settingsAutoplayToggle": null, //missing translation 
    "settingsOpenTabsInForegroundToggle": "Ouvrir les nouveaux onglets au premiers plan",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "Les scripts personnalisés vous permettent de modifier le comportement des pages web - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">en savoir plus (en anglais)</a>."
    },
    "settingsUserAgentToggle": "Utiliser un user-agent particulier",
    "settingsUpdateNotificationsToggle": "Vérifier automatiquement pour des mises à jour",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "Envoyer des statistiques d'utilisation - <a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">En savoir plus sur les statistiques envoyées (en anglais)</a>"
    },
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "Moteur de recherche",
    "settingsDefaultSearchEngine": "Choisir un moteur de recherche par défaut :",
    "settingsDDGExplanation": "Définir DuckDuckGo comme moteur de recherche par défaut pour voir instantanément des résulats dans la barre de recherche.",
    "customSearchEngineDescription": "Remplacer la recherche par %s",
    "settingsKeyboardShortcutsHeading": "Raccourcis clavier",
    "settingsKeyboardShortcutsHelp": "Séparer les raccourcis claviers multiples par une virgule.",
    "settingsProxyHeading": "Proxy",
    "settingsNoProxy": "Pas de proxy",
    "settingsManualProxy": "Configuration manuelle",
    "settingsAutomaticProxy": "Configuration automatique",
    "settingsProxyRules": "Règles de proxy",
    "settingsProxyBypassRules": "Pas de proxy pour :",
    "settingsProxyConfigurationURL": "URL de configuration",
    /* app menu */
    "appMenuFile": "Fichier",
    "appMenuNewTab": "Nouvel onglet",
    "appMenuDuplicateTab": "Dupliquer l'onglet",
    "appMenuNewPrivateTab": "Nouvel onglet de navigation privée",
    "appMenuNewTask": "Nouvelle tâche",
    "appMenuSavePageAs": "Enregistrer la page sous",
    "appMenuPrint": "Imprimer",
    "appMenuEdit": "Editer",
    "appMenuUndo": "Retour",
    "appMenuRedo": "Avancer",
    "appMenuCut": "Couper",
    "appMenuCopy": "Copier",
    "appMenuPaste": "Coller",
    "appMenuSelectAll": "Tout sélectionner",
    "appMenuFind": "Trouver",
    "appMenuView": "Voir",
    "appMenuZoomIn": "Zoom avant",
    "appMenuZoomOut": "Zoom arrière",
    "appMenuActualSize": "Taille actuelle",
    "appMenuFullScreen": "Plein écran", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "Mode focus",
    "appMenuBookmarks": "Signets",
    "appMenuHistory": "Historique",
    "appMenuDeveloper": "Développeur",
    "appMenuReloadBrowser": "Recharger le navigateur",
    "appMenuInspectBrowser": "Inspecter le contenu",
    "appMenuInspectPage": "Inspecter la page",
    "appMenuWindow": "Fenêtre",
    "appMenuMinimize": "Réduire",
    "appMenuClose": "Fermer",
    "appMenuAlwaysOnTop": "Toujours en premier",
    "appMenuHelp": "Aide",
    "appMenuKeyboardShortcuts": "Raccourcis claviers",
    "appMenuReportBug": "Reporter un problème",
    "appMenuTakeTour": "Faire un tour",
    "appMenuViewGithub": "Voir sur GitHub",
    "appMenuAbout": "À propos de %n", //%n is replaced with app name
    "appMenuPreferences": "Préférences",
    "appMenuServices": "Services",
    "appMenuHide": "Cacher %n",
    "appMenuHideOthers": "Cacher les autres",
    "appMenuShowAll": "Montrer tout",
    "appMenuQuit": "Quitter %n",
    "appMenuBringToFront": "Tout mettre à l'avant",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "page <input type='text'/> sur <span id='total'></span>"
    },
    /* Context Reader */
    "buttonReaderSettings": "Réglages de lecture",
    "buttonReaderLightTheme": "Clair",
    "buttonReaderSepiaTheme": "Sepia",
    "buttonReaderDarkTheme": "Sombre",
    "openReaderView": "Toujours ouvrir en mode lecture",
    "autoRedirectBannerReader": "Toujours ouvrir les articles de ce site en mode lecture ?",
    "buttonReaderRedirectYes": "Oui",
    "buttonReaderRedirectNo": "Non",
    "articleReaderView": "Article original",
    /* Download manager */
    "downloadCancel": "Annuler",
    "downloadStateCompleted": "Complété",
    "downloadStateFailed": "Échoué",
    /* Update Notifications */
    "updateNotificationTitle": "Une nouvelle version de Min est disponible",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "Remplissage automatique des mots de passe",
    "settingsSelectPasswordManager": "Choisissez l'un des gestionnaires de mots de passe acceptés :",
    "keychainViewPasswords": "Voir les mots de passe enregistrés",
    /* Password manager setup */
    "passwordManagerSetupHeading": "Finir de régler %p pour utiliser le remplissage automatique",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "Premièrement, <a id='password-manager-setup-link'></a> puis l'extraire pour votre système."
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "Télécharger <a id='password-manager-setup-link-installer'></a> puis glisser le fichier dans le cadre ci-dessous :"
    },
    "passwordManagerSetupLink": "Télécharger l'outil d'interface en ligne de commande (CLI) de %p",
    "passwordManagerSetupLinkInstaller": "L'installateur de CLI %p",
    "passwordManagerSetupStep2": "Puis cliquer-glisser l'outil dans le cadre ci-dessous :",
    "passwordManagerSetupDragBox": "Déposer l'outil ici",
    "passwordManagerSetupInstalling": "En cours d'installation...",
    "passwordManagerBitwardenSignIn": null, //missing translation
    "passwordManagerSetupSignIn": "Connectez-vous à votre gestionnaire de mots de pass pour commencer à utiliser le remplissage automatique. Vos informations de connexion ne seront jamais stockées par Min.",
    "disableAutofill": "Désactiver le remplissage automatique",
    "passwordManagerSetupUnlockError": "Échec d'ouverture de la bibliothèque de mots passe : ",
    "passwordManagerSetupRetry": "Assurez-vous d'utiliser le bon fichier et d'entrer le bon mot de passe. Vous pouvez réessayer en déposant à nouveau l'outil ici.",
    "passwordManagerUnlock": "Entrez votre mot de passe maître %p pour débloquer la bibliothèque de mots de passe :",
    /* Password save bar */
    "passwordCaptureSavePassword": "Enregistrer le mot de passe pour %s?",
    "passwordCaptureSave": "Enregistrer",
    "passwordCaptureDontSave": "Ne pas enregistrer",
    "passwordCaptureNeverSave": null, //missing translation
    /* Password viewer */
    "savedPasswordsHeading": "Mots de passe enregistrés",
    "savedPasswordsEmpty": "Pas de mots de passe enregistrés.",
    "savedPasswordsNeverSavedLabel": null, //missing translation
    "deletePassword": "Supprimer le mot de passe pour %s?",
    /* Dialogs */
    "loginPromptTitle": "Connectez-vous à %h (%r)", //%h is replaced with host, %r with realm (title of protected part of site)
    "dialogConfirmButton": "Confirmer",
    "dialogSkipButton": "Annuler",
    "username": "Nom d'utilisateur",
    "email": "Adresse mail",
    "password": "Mot de passe",
    "secretKey": "Clé privée",
    "openExternalApp": null, //missing translation
    "clickToCopy": null, //missing translation
    "copied": null //missing translation
  }
}
