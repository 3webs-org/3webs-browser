export default {
  "name": "Spanish",
  "identifier": "es",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "Agregar al Diccionario",
    "pictureInPicture": null, //using original English name for the feature
    "openInNewTab": "Abrir en una nueva pestaña",
    "openInNewPrivateTab": "Abrir en una nueva pestaña privada",
    "saveLinkAs": "Guardar enlace como...",
    "viewImage": "Ver imagen",
    "openImageInNewTab": "Abrir imagen en una nueva pestaña",
    "openImageInNewPrivateTab": "Abrir imagen en una nueva pestaña privada",
    "saveImageAs": "Guardar imagen como",
    "searchWith": "Buscar con %s", //%s will be replaced with the name of the current search engine
    "copyLink": "Copiar enlace",
    "copyEmailAddress": "Copiar dirección de correo",
    "selectAll": "Seleccionar todo",
    "undo": "Deshacer",
    "redo": "Rehacer",
    "cut": "Cortar",
    "copy": "Copiar", //this is a verb (as in "copy the currently-selected text")
    "paste": "Pegar",
    "goBack": "Ir atrás",
    "goForward": "Ir adelante",
    "inspectElement": "Inspeccionar elemento",
    /* searchbar */
    "pasteAndGo": null, //using original English name for the feature. "Pegar e ir/buscar" doesn't sound quite right
    "DDGAnswerSubtitle": "Respuesta", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "Sitio sugerido", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "Resultados de DuckDuckGo", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "Tarea %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "Mostrar más",
    "viewSettings": "Ver ajustes",
    "takeScreenshot": "Hacer una captura de pantalla",
    "clearHistory": "Limpiar todo el historial",
    "enableBlocking": "Activar bloqueo de contenido",
    "disableBlocking": "Desactivar bloqueo de contenido",
    "clearHistoryConfirmation": "¿Borrar todo el historial y los datos de navegación?", 
    "switchToTask": "Cambiar a la tarea",
    "createTask": "Crear una tarea",
    "closeTask": "Cerrar una tarea",
    "moveToTask": "Mover esta pestaña a una tarea",
    "nameTask": "Nombrar esta tarea",
    "addBookmark": "Agregar marcador",
    "searchBookmarks": "Buscar marcadores",
    "bookmarksAddTag": "Agregar etiqueta...",
    "bookmarksRenameTag": null, //missing translation
    "bookmarksDeleteTag": null, //missing translation
    "deleteBookmarksWithTag": null, //missing translation
    "bookmarksSimilarItems": "Elementos similares",
    "searchHistory": "Historial de búsqueda",  //noun?
    "importBookmarks": "Importar marcadores",
    "exportBookmarks": "Exportar marcadores",
    "runUserscript": "Correr userscript", //userscript doesn't have a Spanish translation, afaik maybe "script de usuario"
    /* navbar */
    "openMenu": "Abrir menú",
    "enterReaderView": "Entrar en la vista de lectura",
    "exitReaderView": "Salir de la vista de lectura",
    "newTabLabel": "Nueva pestaña", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "Tu conexión con este sitio web no es segura.",
    "searchbarPlaceholder": "Buscar o introducir dirección",
    "privateTab": "Pestaña privada",
    "newTabAction": "Nueva pestaña", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "Ver tareas",
    "newTask": "Nueva tarea", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "Tarea %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "Tarea eliminada. <a>¿Deshacer?</a>"
    },
    "tasksSearchTabs": null, //missing translation
    "returnToTask": "Volver a su tarea anterior",
    "taskDescriptionTwo": "%t y %t", //used to describe a task that has two tabs, %t is replaced with the tab titles
    "taskDescriptionThree": "%t, %t, y %n más", //used to describe a task that has three or more tabs
    /* find in page toolbar */
    "searchInPage": "Buscar en la página", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%i de %t coincidencia", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%i de %t coincidencias",
    /* Focus mode */
    "isFocusMode": "Estás en el modo de enfoque.",
    "closeDialog": "Aceptar", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "En el modo de enfoque no puedes crear nuevas pestañas o cambiar entre tareas.",
    "focusModeExplanation2": "Puedes salir del modo de enfoque desmarcando \"Modo de enfoque\" en el menú Ver.",
    /* relative dates */
    "timeRangeJustNow": "Ahora mismo",
    "timeRangeMinutes": "Hace unos minutos",
    "timeRangeHour": "En la última hora",
    "timeRangeToday": "Hoy",
    "timeRangeYesterday": "Ayer",
    "timeRangeWeek": "En la semana pasada",
    "timeRangeMonth": "En el mes pasado",
    "timeRangeYear": "En el año pasado",
    "timeRangeLongerAgo": "Hace más tiempo",
    /* pages/error/index.html */
    "crashErrorTitle": "Algo salió mal.",
    "crashErrorSubtitle": "Se ha producido un problema al mostrar este sitio web.",
    "errorPagePrimaryAction": "Inténtalo de nuevo",
    "serverNotFoundTitle": "Servidor no encontrado",
    "serverNotFoundSubtitle": "Min no puede encontrar este sitio web.",
    "archiveSearchAction": "Buscar en archive.org",
    "sslErrorTitle": "Esta página web no está disponible",
    "sslErrorMessage": "Min no pudo conectarse de forma segura a este sitio web.",
    "dnsErrorTitle": "Sitio web no encontrado",
    "dnsErrorMessage": "Se ha producido un error de DNS.",
    "offlineErrorTitle": "Estás desconectado",
    "offlineErrorMessage": "Vuelva a conectarse a Internet e inténtelo de nuevo.",
    "genericConnectionFail": "Min no pudo conectarse al sitio web.",
    "sslTimeErrorMessage": "Min no pudo conectarse de forma segura a este sitio web. Por favor asegúrese de que el reloj de su ordenador está configurado correctamente.",
    "addressInvalidTitle": "Esta dirección no es válida.",
    "genericError": "Ha ocurrido un error",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "Este sitio podría dañarte.",
    "phishingErrorMessage": "Este sitio web podría estar tratando de robar su información personal, como contraseñas o información bancaria.",
    "phishingErrorVisitAnyway": "Visitar este sitio de todos modos",
    "phishingErrorLeave": "Salir de este sitio",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "Ha ocurrido un error. Por favor, cierre cualquier otra instancia y reinicie.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "Ha ocurrido un error",
    "sessionRestoreErrorExplanation": "Tus pestañas guardadas no se pudieron restaurar correctamente.",
    "sessionRestoreErrorBackupInfo": "Hemos guardado una copia de seguridad de sus datos en esta ubicación: %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "Si este error continúa, abra un nuevo reporte <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">aquí</a>."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "Preferencias",
    "settingsRestartRequired": "Debe reiniciar para aplicar estos cambios.",
    "settingsPrivacyHeading": "Bloqueo de contenido",
    "settingsContentBlockingLevel0": "Permitir todos los anuncios y rastreadores.",
    "settingsContentBlockingLevel1": "Bloquear anuncios y rastreadores de terceros.",
    "settingsContentBlockingLevel2": "Bloquear todos los anuncios y rastreadores.",
    "settingsContentBlockingExceptions": "Se seguirán permitiendo anuncios en los siguientes sitios:",
    "settingsBlockScriptsToggle": "Bloquear scripts",
    "settingsBlockImagesToggle": "Bloquear imágenes",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "Hasta ahora, ha bloqueado <strong></strong> anuncios y rastreadores."
    },
    "settingsCustomBangs": "Bangs personalizados",
    "settingsCustomBangsAdd": "Agregar bang personalizado",
    "settingsCustomBangsPhrase": "Frase (Requerido)",
    "settingsCustomBangsSnippet": "Descripción (Opcional)",
    "settingsCustomBangsRedirect": "URL de redirección (Requerido)",
    "settingsCustomizeFiltersLink": "Personalizar filtros",
    "settingsAppearanceHeading": "Apariencia",
    "settingsEnableDarkMode": "Habilitar modo oscuro:",
    "settingsDarkModeNever": "Nunca", // googled
    "settingsDarkModeNight": "Por la noche", // googled
    "settingsDarkModeAlways": "Siempre", // googled
    "settingsDarkModeSystem": null,
    "settingsSiteThemeToggle": "Habilitar tema del sitio",
    "settingsAdditionalFeaturesHeading": "Características adicionales",
    "settingsUserscriptsToggle": "Habilitar userscripts", //userscript doesn't have a Spanish translation, afaik maybe "script de usuario"
    "settingsShowDividerToggle": "Mostrar divisor de pestañas",
    "settingsSeparateTitlebarToggle": "Separar barra de título", //"Usar barra de título separada"
    "settingsOpenTabsInForegroundToggle": "Abrir nuevas pestañas en primer plano",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "Los userscripts te permiten modificar el comportamiento de los sitios web - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">Más información</a>."
    }, //"learn more" was translated to "más información" (more info)
    "settingsUserAgentToggle": "usar Agente de usuario personalizado",
    "settingsUpdateNotificationsToggle": "Buscar actualizaciones automáticamente",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "Enviar estadísticas de uso (<a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">Más información</a>)"
    },
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "Motor de búsqueda",
    "settingsDefaultSearchEngine": "Elija un motor de búsqueda predeterminado:",
    "settingsDDGExplanation": "Establezca DuckDuckGo como motor de búsqueda predeterminado para ver respuestas instantáneas en la barra de búsqueda.",
    "customSearchEngineDescription": "Reemplazar el término de búsqueda por %s",
    "settingsKeyboardShortcutsHeading": "Atajos de teclado",
    "settingsKeyboardShortcutsHelp": "Use comas para separar múltiples atajos.",
    "settingsProxyHeading": "Proxy",
    "settingsNoProxy": "Sin proxy", //or "Ningún proxy"
    "settingsManualProxy": "Configuración manual",
    "settingsAutomaticProxy": "Configuración automática",
    "settingsProxyRules": "Reglas proxy:",
    "settingsProxyBypassRules": "Sin proxy para:",
    "settingsProxyConfigurationURL": "URL de configuración:",
    /* app menu */
    "appMenuFile": "Archivo",
    "appMenuNewTab": "Nueva pestaña",
    "appMenuDuplicateTab": "Duplicar pestaña",
    "appMenuNewPrivateTab": "Nueva pestaña privada",
    "appMenuNewTask": "Nueva tarea",
    "appMenuSavePageAs": "Guardar página como",
    "appMenuPrint": "Imprimir",
    "appMenuEdit": "Editar",
    "appMenuUndo": "Deshacer",
    "appMenuRedo": "Rehacer",
    "appMenuCut": "Cortar",
    "appMenuCopy": "Copiar",
    "appMenuPaste": "Pegar",
    "appMenuSelectAll": "Seleccionar todo",
    "appMenuFind": "Buscar",
    "appMenuView": "Ver",
    "appMenuZoomIn": "Ampliar",
    "appMenuZoomOut": "Reducir",
    "appMenuActualSize": "Tamaño real",
    "appMenuFullScreen": "Pantalla completa", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "Modo de enfoque",
    "appMenuBookmarks": "Marcadores",
    "appMenuHistory": "Historial",
    "appMenuDeveloper": "Desarrollador",
    "appMenuReloadBrowser": "Recargar navegador",
    "appMenuInspectBrowser": "Inspeccionar navegador",
    "appMenuInspectPage": "Inspeccionar página",
    "appMenuWindow": "Ventana",
    "appMenuMinimize": "Minimizar",
    "appMenuClose": "Cerrar",
    "appMenuAlwaysOnTop": "Siempre encima",
    "appMenuHelp": "Ayuda",
    "appMenuKeyboardShortcuts": "Atajos de teclado",
    "appMenuReportBug": "Reportar un error",
    "appMenuTakeTour": "Hacer una visita guiada",
    "appMenuViewGithub": "Ver en GitHub",
    "appMenuAbout": "Sobre %n", //%n is replaced with app name
    "appMenuPreferences": "Preferencias",
    "appMenuServices": "Servicios",
    "appMenuHide": "Ocultar %n",
    "appMenuHideOthers": "Ocultar otros",
    "appMenuShowAll": "Mostrar todos",
    "appMenuQuit": "Salir de %n",
    "appMenuBringToFront": "Traer todo al frente",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "página <input type='text'/> de <span id='total'></span>"
    },
    /* Context Reader */
    "buttonReaderSettings": "Configuración del Lector",
    "buttonReaderLightTheme": "Claro",
    "buttonReaderSepiaTheme": "Sepia",
    "buttonReaderDarkTheme": "Oscuro",
    "openReaderView": "Abrir siempre en modo lector",
    "autoRedirectBannerReader": "¿Abrir siempre los articulos de este sitio en modo lector?",
    "buttonReaderRedirectYes": "Sí",
    "buttonReaderRedirectNo": "No",
    "articleReaderView": "Artículo original",
    /* Download manager */
    "downloadCancel": "Cancelar",
    "downloadStateCompleted": "Completado",
    "downloadStateFailed": "Fallido",
    /* Update Notifications */
    "updateNotificationTitle": "Una nueva versión se encuentra disponible.",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "Auto-llenado de contraseña", //Autofill is not the same as autocomplete (autocompletar)
    "settingsSelectPasswordManager": "Elije uno de los gestores de contraseñas soportados:",
    "keychainViewPasswords": "Ver contraseñas guardadas",
    /* Password manager setup */
    "passwordManagerSetupHeading": "Termine de configurar %p para usar el Auto-llenado",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "Primero, <a id='password-manager-setup-link'></a> y extráelo para tu sistema."
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "Descarga <a id='password-manager-setup-link-installer'></a> y arrastra el archivo en el cuadro de abajo:"
    },
    "passwordManagerSetupLink": "descarga la herramienta CLI de %p",
    "passwordManagerSetupLinkInstaller": "el instalador de CLI de %p",
    "passwordManagerSetupStep2": "Luego arrastra la herramienta hasta el cuadro de abajo:",
    "passwordManagerSetupDragBox": "Arrastra la herramienta hasta aquí",
    "passwordManagerSetupInstalling": "Instalando...",
    "passwordManagerBitwardenSignIn": null, //missing translation
    "passwordManagerSetupSignIn": "Inicia sesión en tu gestor de contraseñas para empezar a usar el Auto-llenado. Tus credenciales no serán almacenadas en ningún lugar dentro .",
    "disableAutofill": "Desactivar Auto-llenado",
    "passwordManagerSetupUnlockError": "No se pudo desbloquear el almacén de contraseñas:",
    "passwordManagerSetupRetry": "Asegúrate de estar usando el archivo correcto e ingresando una contraseña correcta. Puedes reintentar arrastrando nuevamente la herramienta hasta aquí.",
    "passwordManagerUnlock": "Ingresa tu contraseña maestra %p para desbloquear el almacén de contraseñas:",
    /* Password save bar */
    "passwordCaptureSavePassword": "¿Guardar contraseña para %s?",
    "passwordCaptureSave": "Guardar",
    "passwordCaptureDontSave": "No guardar",
    "passwordCaptureNeverSave": null, //missing translation
    /* Password viewer */
    "savedPasswordsHeading": "Contraseñas guardadas",
    "savedPasswordsEmpty": "No hay contraseñas guardadas.",
    "savedPasswordsNeverSavedLabel": null, //missing translation
    "deletePassword": "¿Borrar contraseña para %s?",
    /* Dialogs */
    "loginPromptTitle": "Inicia sesión en %h (%r)", //%h is replaced with host, %r with realm (title of protected part of site)
    "dialogConfirmButton": "Confirmar",
    "dialogSkipButton": "Cancelar",
    "username": "Nombre de usuario",
    "email": "Dirección de correo",
    "password": "Contraseña",
    "secretKey": "Clave secreta",
    "openExternalApp": "Abrir en \\\"%s\\\"?", // %s is the name of an app
    "clickToCopy": "Haz clic para copiar",
    "copied": "Copiado"
  }
}
