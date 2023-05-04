export default {
  "name": "Portuguese (Portugal)",
  "identifier": "pt-PT",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "Adicionar ao dicionário",
    "pictureInPicture": "Picture in Picture",
    "openInNewTab": "Abrir em novo separador",
    "openInNewPrivateTab": "Abrir em novo separador privado",
    "saveLinkAs": "Guardar ligação como",
    "viewImage": "Ver imagem",
    "openImageInNewTab": "Abrir imagem em novo separador",
    "openImageInNewPrivateTab": "Abrir imagem em novo separador privado",
    "saveImageAs": "Guardar imagem como",
    "searchWith": "Pesquisar com %s", //%s will be replaced with the name of the current search engine
    "copyLink": "Copiar ligação",
    "copyEmailAddress": "Copiar endereço de e-mail",
    "selectAll": "Selecionar tudo",
    "undo": "Desfazer",
    "redo": "Refazer",
    "cut": "Cortar",
    "copy": "Copiar", //this is a verb (as in "copy the currently-selected text")
    "paste": "Colar",
    "goBack": "Recuar",
    "goForward": "Avançar",
    "inspectElement": "Inspecionar elemento",
    /* searchbar */
    "pasteAndGo": "Colar e ir",
    "DDGAnswerSubtitle": "Resposta", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "Site sugerido", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "Resultados em DuckDuckGo", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "Tarefa %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "Mostrar mais",
    "viewSettings": "Ver definições",
    "takeScreenshot": "Obter captura de ecrã",
    "clearHistory": "Limpar todo o histórico",
    "enableBlocking": "Ativar bloqueio de conteúdo para este site",
    "disableBlocking": "Desativar bloqueio de conteúdo para este site",
    "clearHistoryConfirmation": "Limpar histórico e dados de navegação?",
    "switchToTask": "Trocar para a tarefa",
    "createTask": "Criar tarefa",
    "closeTask": "Fechar tarefa",
    "moveToTask": "Mover este separador para uma tarefa",
    "nameTask": "Dar nome a esta tarefa",
    "addBookmark": "Adicionar marcador",
    "searchBookmarks": "Pesquisar nos marcadores",
    "bookmarksAddTag": "Adicionar etiqueta",
    "bookmarksRenameTag": "Mudar nome",
    "bookmarksDeleteTag": "Eliminar etiqueta",
    "deleteBookmarksWithTag": "Eliminar marcador e etiqueta",
    "bookmarksSimilarItems": "Itens semelhantes",
    "searchHistory": "Pesquisar no histórico",
    "importBookmarks": "Importar marcadores de ficheiro HTML",
    "exportBookmarks": "Exportar marcadores",
    "runUserscript": "Executar script",
    /* navbar */
    "openMenu": "Abrir menu", //application menu button on windows
    "enterReaderView": "Ativar modo de leitura",
    "exitReaderView": "Desativar modo de leitura",
    "newTabLabel": "Novo separador", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "A ligação a este site não é segura.",
    "searchbarPlaceholder": "Pesquisar ou digitar endereço",
    "privateTab": "Separador privado",
    "newTabAction": "Novo separador", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "Ver tarefas",
    "newTask": "Nova tarefa", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "Tarefa %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "Tarefa eliminada. <a>Desfazer</a>?"
    },
    "tasksSearchTabs": "Pesquisar separadores",
    "returnToTask": "Retornar à tarefa anterior",
    "taskDescriptionTwo": "%t e %t", //used to describe a task that has two tabs, %t is replaced with the tab titles
    "taskDescriptionThree": "%t, %t e %n mais", //used to describe a task that has three or more tabs
    /* find in page toolbar */
    "searchInPage": "Pesquisar na página", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%i de %t ocorrência", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%i de %t ocorrências",
    /* Focus mode */
    "isFocusMode": "Está no modo de foco.",
    "closeDialog": "OK", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "No modo de foco, não é possível abrir novos separadores nem trocar de tarefas.",
    "focusModeExplanation2": "Pode sair do modo de foco desmarcando a opção \"Modo de foco\" existente no menu Ver.",
    /* relative dates */
    "timeRangeJustNow": "Agora mesmo",
    "timeRangeMinutes": "Há alguns minutos",
    "timeRangeHour": "Na última hora",
    "timeRangeToday": "Hoje",
    "timeRangeYesterday": "Ontem",
    "timeRangeWeek": "Na última semana",
    "timeRangeMonth": "No último mês",
    "timeRangeYear": "No último ano",
    "timeRangeLongerAgo": "Mais antigo",
    /* pages/error/index.html */
    "crashErrorTitle": "Algo errado aconteceu.",
    "crashErrorSubtitle": "Ocorreu um erro ao tentar mostrar esta página.",
    "errorPagePrimaryAction": "Tentar novamente",
    "serverNotFoundTitle": "Servidor não encontrado",
    "serverNotFoundSubtitle": "O Min não conseguiu encontrar este site.",
    "archiveSearchAction": "Pesquisar em archive.org",
    "sslErrorTitle": "Este site não está disponível",
    "sslErrorMessage": "O Min não conseguiu estabelecer uma ligação segura a este site.",
    "dnsErrorTitle": "Site não encontrado",
    "dnsErrorMessage": "Ocorreu um erro de DNS.",
    "offlineErrorTitle": "Está no modo off-line",
    "offlineErrorMessage": "Ative o modo on-line e tente novamente.",
    "genericConnectionFail": "O Min não conseguiu estabelecer a ligação ao site.",
    "sslTimeErrorMessage": "O Min não conseguiu estabelecer uma ligação segura a este site. Verifique se a hora do computador está correta.",
    "addressInvalidTitle": "Este endereço não é válido.",
    "genericError": "Ocorreu um erro",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "Este site pode ser perigoso.",
    "phishingErrorMessage": "Este site pode estar a tentar obter informações pessoais, tais como palavras-passe ou dados bancários.",
    "phishingErrorVisitAnyway": "Aceder na mesma",
    "phishingErrorLeave": "Sair do site",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "Ocorreu um erro. Feche todas as instâncias e reinicie o navegador.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "Ocorreu um erro",
    "sessionRestoreErrorExplanation": "Não foi possível restaurar os separadores guardados.",
    "sessionRestoreErrorBackupInfo": "Criámos um backup dos seus dados em: %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "Se este erro persistir, crie um relatório de erro <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">aqui</a>."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "Preferências",
    "settingsRestartRequired": "Tem que reiniciar o navegador para aplicar as alterações.",
    "settingsPrivacyHeading": "Bloqueio de conteúdo",
    "settingsContentBlockingLevel0": "Permitir todos os anúncios e 'trackers'",
    "settingsContentBlockingLevel1": "Bloquear anúncios e trackers de terceiros",
    "settingsContentBlockingLevel2": "Bloquear todos os anúncios e 'trackers'",
    "settingsContentBlockingExceptions": "Permitir anúncios nestes sites:",
    "settingsBlockScriptsToggle": "Bloquear scripts",
    "settingsBlockImagesToggle": "Bloquear imagens",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "Até agora, Min bloqueou <strong></strong> anúncios e rastreadores."
    },
    "settingsCustomBangs": "Bangs personalizados",
    "settingsCustomBangsAdd": "Adicionar bang",
    "settingsCustomBangsPhrase": "Texto (obrigatório)",
    "settingsCustomBangsSnippet": "Descrição (opcional)",
    "settingsCustomBangsRedirect": "URL de encaminhamento (obrigatório)",
    "settingsCustomizeFiltersLink": "Personalizar filtros",
    "settingsAppearanceHeading": "Aparência",
    "settingsEnableDarkMode": "Ativar modo escuro:",
    "settingsDarkModeNever": "Nunca",
    "settingsDarkModeNight": "De noite",
    "settingsDarkModeAlways": "Sempre",
    "settingsDarkModeSystem": "Seguir tema do sistema",
    "settingsSiteThemeToggle": "Ativar tema do site",
    "settingsAdditionalFeaturesHeading": "Outras funcionalidades",
    "settingsUserscriptsToggle": "Ativar scripts de utilizador",
    "settingsShowDividerToggle": "Mostrar divisor entre os separadores",
    "settingsSeparateTitlebarToggle": "Utilizar barra de título separada",
    "settingsAutoplayToggle": "Ativar reprodução automática",
    "settingsOpenTabsInForegroundToggle": "Abrir novos separadores em primeiro plano",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "Os scripts permitem-lhe alterar o comportamento dos sites - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">Saber mais</a>."
    },
    "settingsUserAgentToggle": "Utilizar agente de utilizador personalizado",
    "settingsUpdateNotificationsToggle": "Procurar atualizações automaticamente",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "Enviar estatísticas de utilização (<a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">Mais informação</a>)"
    },
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "Motor de pesquisa",
    "settingsDefaultSearchEngine": "Escolha o motor de pesquisa padrão:",
    "settingsDDGExplanation": "Defina DuckDuckGo como motor de pesquisa padrão para poder obter sugestões imediatas na barra de pesquisa.",
    "customSearchEngineDescription": "Substituir termo de pesquisa por %s",
    "settingsKeyboardShortcutsHeading": "Teclas de atalho",
    "settingsKeyboardShortcutsHelp": "Utilize vírgulas para separar os diversos atalhos",
    "settingsProxyHeading": "Proxy",
    "settingsNoProxy": "Sem proxy",
    "settingsManualProxy": "Configuração manual",
    "settingsAutomaticProxy": "Configuração automática",
    "settingsProxyRules": "Regras do proxy:",
    "settingsProxyBypassRules": "Não usar proxy para:",
    "settingsProxyConfigurationURL": "URL de configuração",
    /* app menu */
    "appMenuFile": "Ficheiro",
    "appMenuNewTab": "Novo separador",
    "appMenuDuplicateTab": "Duplicar separador",
    "appMenuNewPrivateTab": "Novo separador privado",
    "appMenuNewTask": "Nova tarefa",
    "appMenuSavePageAs": "Guardar página como",
    "appMenuPrint": "Imprimir",
    "appMenuEdit": "Editar",
    "appMenuUndo": "Desfazer",
    "appMenuRedo": "Refazer",
    "appMenuCut": "Cortar",
    "appMenuCopy": "Copiar",
    "appMenuPaste": "Colar",
    "appMenuSelectAll": "Selecionar tudo",
    "appMenuFind": "Localizar",
    "appMenuView": "Ver",
    "appMenuZoomIn": "Ampliar",
    "appMenuZoomOut": "Reduzir",
    "appMenuActualSize": "Tamanho real",
    "appMenuFullScreen": "Ecrã completo", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "Modo de foco",
    "appMenuBookmarks": "Marcadores",
    "appMenuHistory": "Histórico",
    "appMenuDeveloper": "Programador",
    "appMenuReloadBrowser": "Recarregar navegador",
    "appMenuInspectBrowser": "Inspecionar navegador",
    "appMenuInspectPage": "Inspecionar página",
    "appMenuWindow": "Janela",
    "appMenuMinimize": "Minimizar",
    "appMenuClose": "Fechar",
    "appMenuAlwaysOnTop": "Sempre na frente",
    "appMenuHelp": "Ajuda",
    "appMenuKeyboardShortcuts": "Teclas de atalho",
    "appMenuReportBug": "Reporte de erros",
    "appMenuTakeTour": "Visão geral",
    "appMenuViewGithub": "Ver em GitHub",
    "appMenuAbout": "Acerca de %n", //%n is replaced with app name
    "appMenuPreferences": "Preferências",
    "appMenuServices": "Serviços",
    "appMenuHide": "Ocultar %n",
    "appMenuHideOthers": "Ocultar outras",
    "appMenuShowAll": "Mostrar tudo",
    "appMenuQuit": "Sair de %n",
    "appMenuBringToFront": "Trazer tudo para a frente",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "página <input type='text'/> de <span id='total'></span>"
    },
    /* Context Reader */
    "buttonReaderSettings": "Definições do leitor",
    "buttonReaderLightTheme": "Claro",
    "buttonReaderSepiaTheme": "Sépia",
    "buttonReaderDarkTheme": "Escuro",
    "openReaderView": "Abrir sempre no modo de leitura",
    "autoRedirectBannerReader": "Abrir todo os artigos deste site no modo de leitura?",
    "buttonReaderRedirectYes": "Sim",
    "buttonReaderRedirectNo": "Não",
    "articleReaderView": "Artigo original",
    /* Download manager */
    "downloadCancel": "Cancelar",
    "downloadStateCompleted": "Terminada",
    "downloadStateFailed": "Falhada",
    /* Update Notifications */
    "updateNotificationTitle": "Está disponível uma uma nova versão",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "Preenchimento automático de palavras-passe",
    "settingsSelectPasswordManager": "Escolha uma das seguintes aplicações:",
    "keychainViewPasswords": "Ver palavras-passe guardadas",
    /* Password manager setup */
    "passwordManagerSetupHeading": "Terminar configuração de %p para usar o preenchimento automático",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "Primeiro, <a id='password-manager-setup-link'></a> e extraia para o seu sistema."
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "Descarregue <a id='password-manager-setup-link-installer'></a> e arraste o ficheiro para a caixa abaixo:"
    },
    "passwordManagerSetupLink": "descarregue a ferramenta CLI %p",
    "passwordManagerSetupLinkInstaller": "o instalador da ferramenta %p CLI",
    "passwordManagerSetupStep2": "Depois, arraste a ferramenta para a caixa abaixo:",
    "passwordManagerSetupDragBox": "Arraste a ferramenta para aqui",
    "passwordManagerSetupInstalling": "A instalar...",
    "passwordManagerBitwardenSignIn": "Para estabelecer ligação à sua conta Bitwarden, aceda a vault.bitwarden.com/#/settings/account e escolha \"View API Key\". Depois, cole os valores nos campos abaixo.",
    "passwordManagerSetupSignIn": "Inicie sessão no gestor de palavras-passe para utilizar o preenchimento automático. As suas credenciais não serão guardadas no Min.",
    "disableAutofill": "Desativar preenchimento automático",
    "passwordManagerSetupUnlockError": "Falha ao desbloquear: ",
    "passwordManagerSetupRetry": "Certifique-se de que está a utilizar o ficheiro e a palavra-passe corretas. Pode tentar novamente arrastando a ferramenta para aqui.",
    "passwordManagerUnlock": "Digite a palavra-passe mestre para %p para desbloquear o armazenamento de palavras-passe:",
    /* Password save bar */
    "passwordCaptureSavePassword": "Guardar palavras passe para %s?",
    "passwordCaptureSave": "Sim",
    "passwordCaptureDontSave": "Não",
    "passwordCaptureNeverSave": "Nunca",
    /* Password viewer */
    "savedPasswordsHeading": "Palavras-passe guardadas",
    "savedPasswordsEmpty": "Não há palavras-passe guardadas",
    "savedPasswordsNeverSavedLabel": "Nunca guardadas",
    "deletePassword": "Eliminar palavra-passe para %s?",
    /* Dialogs */
    "loginPromptTitle": "Iniciar sessão em %h (%r)", //%h is replaced with host, %r with realm (title of protected part of site)
    "dialogConfirmButton": "Confirmar",
    "dialogSkipButton": "Cancelar",
    "username": "Nome de utilizador",
    "email": "E-mail",
    "password": "Palavra-passe",
    "secretKey": "Chave secreta",
    "openExternalApp": "Abrir em \\\"%s\\\"?", // %s is the name of an app
    "clickToCopy": "Clique para copiar",
    "copied": "Copiado"
  }
}
