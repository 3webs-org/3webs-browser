export default {
  "name": "한국어",
  "identifier": "ko",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "사전에 추가",
    "pictureInPicture": "화면 속 화면(Picture in Picture)",
    "openInNewTab": "새 작업",
    "openInNewPrivateTab": "새 개인 작업",
    "saveLinkAs": "다른 이름으로 저장",
    "viewImage": "그림 보기",
    "openImageInNewTab": "새 작업에서 그림 열기",
    "openImageInNewPrivateTab": "새 개인 작업에서 그림 열기",
    "saveImageAs": "그림을 다른 이름으로 저장",
    "searchWith": "%s에서 검색", //%s will be replaced with the name of the current search engine
    "copyLink": "주소 복사",
    "copyEmailAddress": "전자우편주소 복사",
    "selectAll": "전체선택",
    "undo": "되돌리기",
    "redo": "재실행",
    "cut": "오리기",
    "copy": "복사하기", //this is a verb (as in "copy the currently-selected text")
    "paste": "붙여넣기",
    "goBack": "뒤로",
    "goForward": "앞으로",
    "inspectElement": "요소 검사",
    /* searchbar */
    "pasteAndGo": "붙여넣기 및 이동",
    "DDGAnswerSubtitle": "응답", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "제안 누리집", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "덕덕고(DuckDuckGo) 검색 결과", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "작업장 %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "더 보기",
    "viewSettings": "설정",
    "takeScreenshot": "갈무리",
    "clearHistory": "기록 삭제",
    "enableBlocking": "이 누리집에 콘텐츠 차단 활성",
    "disableBlocking": "이 누리집에 콘텐츠 차단 비활성",
    "clearHistoryConfirmation": "모든 기록 및 통신망 사용 정보를 삭제 하시겠습니까?",
    "switchToTask": "작업장 변경",
    "createTask": "작업장 생성",
    "closeTask": "작업장 닫기",
    "moveToTask": "작업장으로 작업 이동",
    "nameTask": "작업장 이름",
    "addBookmark": "즐겨찾기 추가",
    "searchBookmarks": "즐겨찾기 검색",
    "bookmarksAddTag": "꼬리표 추가...",
    "bookmarksRenameTag": "꼬리표 이름 변경",
    "bookmarksDeleteTag": "꼬리표 삭제",
    "deleteBookmarksWithTag": "즐겨찾기와 꼬리표 삭제",
    "bookmarksSimilarItems": "비슷한 항목",
    "searchHistory": "기록 검색",
    "importBookmarks": "즐겨찾기 목록 가져오기",
    "exportBookmarks": "즐겨찾기 목록 내보내기",
    "runUserscript": "사용자 명령(스크립트) 실행",
    /* navbar */
    "openMenu": "도구 일람", //application menu button on windows
    "enterReaderView": "읽기 지원",
    "exitReaderView": "읽기 지원 종료",
    "newTabLabel": "새 작업", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "이 누리집에 대한 연결이 안전하지 않습니다.",
    "searchbarPlaceholder": "주소 검색 또는 입력",
    "privateTab": "개인 작업",
    "newTabAction": "새 작업", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "작업장 보기",
    "newTask": "새 작업장", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "작업장 %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "작업장을 제거했습니다. <a>되돌릴까요?</a>"
    },
    "tasksSearchTabs": "작업장 검색",
    "returnToTask": "이전 작업장으로 돌아가기",
    "taskDescriptionTwo": "%t 그리고 %t", //used to describe a task that has two tabs, %t is replaced with the tab title
    "taskDescriptionThree": "%t, %t, 그리고 %n개의 작업", //used to describe a task that has three or more tabs
    /* find in page toolbar */
    "searchInPage": "여기서 검색", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%t 의 %i 일치", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%t 의 %i 일치",
    /* Focus mode */
    "isFocusMode": "집중 지원 상태입니다.",
    "closeDialog": "닫기", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "집중 지원 상태에서는 새 작업을 열거나 다른 작업으로 전환할 수 없습니다.",
    "focusModeExplanation2": "보기 범주에서 \"집중 지원\"을 선택 해제하여 집중 지원을 종료할 수 있습니다.",
    /* relative dates */
    "timeRangeJustNow": "방금",
    "timeRangeMinutes": "몇분 전",
    "timeRangeHour": "몇시간 전",
    "timeRangeToday": "오늘",
    "timeRangeYesterday": "어제",
    "timeRangeWeek": "지난 주",
    "timeRangeMonth": "지난 달",
    "timeRangeYear": "작년",
    "timeRangeLongerAgo": "오래전",
    /* pages/error/index.html */
    "crashErrorTitle": "문제가 발생했습니다.",
    "crashErrorSubtitle": "이 문서를 표시하는 동안 문제가 발생했습니다.",
    "errorPagePrimaryAction": "다시 시도",
    "serverNotFoundTitle": "제공되는 연결망을 찾을 수 없습니다",
    "serverNotFoundSubtitle": "누리집을 찾을 수 없습니다.",
    "archiveSearchAction": "archive.org 에서 검색",
    "sslErrorTitle": "누리집을 사용할 수 없습니다.",
    "sslErrorMessage": "안전한 연결을 할 수 없습니다.",
    "dnsErrorTitle": "누리집을 찾을 수 없습니다.",
    "dnsErrorMessage": "DNS 오류가 발생했습니다.",
    "offlineErrorTitle": "통신망에 연결되지 않은 상태입니다.",
    "offlineErrorMessage": "통신망에 재연결 후에, 다시 시도해주세요.",
    "genericConnectionFail": "누리집에 연결할 수 없습니다.",
    "sslTimeErrorMessage": "안전한 연결을 할 수 없습니다. 사용 장비의 시간 설정을 확인해주세요.",
    "addressInvalidTitle": "유효하지 않은 주소입니다.",
    "genericError": "오류 발생",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "유해한 누리집입니다.",
    "phishingErrorMessage": "이 누리집에서는 암호 또는 은행 정보와 같은 개인 정보가 도용될 수 있습니다.",
    "phishingErrorVisitAnyway": "(그럼에도 불구하고) 들어가기",
    "phishingErrorLeave": "나가기",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "오류가 발생했습니다. 다른 창을 종료 후 재실행해주세요.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "오류 발생",
    "sessionRestoreErrorExplanation": "저장된 작업 자료를 정상적으로 복원할 수 없습니다.",
    "sessionRestoreErrorBackupInfo": "복원용 작업 자료 저장위치: %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "오류가 계속 발생하면 <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">문의</a> 바랍니다."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "환경설정",
    "settingsRestartRequired": "변경 사항을 적용하려면 다시 시작해야 합니다.",
    "settingsPrivacyHeading": "내용물 차단",
    "settingsContentBlockingLevel0": "모든 광고와 추적 허용",
    "settingsContentBlockingLevel1": "타사 광고와 추적 차단",
    "settingsContentBlockingLevel2": "모든 광고와 추적 차단",
    "settingsContentBlockingExceptions": "다음의 누리집에서 광고 허용",
    "settingsBlockScriptsToggle": "명령(스크립트) 차단",
    "settingsBlockImagesToggle": "그림 차단",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "지금까지 민(Min)은 <strong></strong> 광고 및 추적기를 차단했습니다."
    },
    "settingsCustomBangs": "사용자 정의 연결 명령",
    "settingsCustomBangsAdd": "사용자 정의 연결 명령 추가",
    "settingsCustomBangsPhrase": "명령어 (필수)",
    "settingsCustomBangsSnippet": "설명 (선택)",
    "settingsCustomBangsRedirect": "연결할 URL (필수)",
    "settingsCustomizeFiltersLink": "사용자 정의 필터",
    "settingsAppearanceHeading": "외형",
    "settingsEnableDarkMode": "어두운 외형(Dark Mode) 사용:",
    "settingsDarkModeNever": "사용하지 않음",
    "settingsDarkModeNight": "밤에만 사용",
    "settingsDarkModeAlways": "항상 사용",
    "settingsDarkModeSystem": "시스템 색상 설정을 따름",
    "settingsSiteThemeToggle": "누리집 색상 설정 사용",
    "settingsAdditionalFeaturesHeading": "추가 기능",
    "settingsUserscriptsToggle": "사용자 명령(스크립트) 사용",
    "settingsShowDividerToggle": "작업 사이에 구분선 표시",
    "settingsSeparateTitlebarToggle": "제목 표시줄과 도구 표시줄 사용",
    "settingsAutoplayToggle": "자동재생 활성화",
    "settingsOpenTabsInForegroundToggle": "작업을 열 때 전면(Foreground)으로 열기",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "사용자 명령(스크립트)을 사용하면 누리집의 행동을 수정할 수 있습니다. - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">더보기</a>."
    },
    "settingsUserAgentToggle": "사용자 정의 에이전트(UserAgent) 사용",
    "settingsUpdateNotificationsToggle": "판올림 자동 확인",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "사용량 현황 데이터 수집 사용 (<a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">자세히 보기</a>)"
    },
    "settingsStartupOptions": "민(Min)을 실행할 때: ",
    "settingsStartupCreateTask": "마지막 작업 열기",
    "settingsStartupNewTaskandBackground": "마지막 작업을 백그라운드로 이동",
    "settingsStartupNewTaskOnly": "새 작업장 열기",
    "settingsSearchEngineHeading": "검색 도구",
    "settingsDefaultSearchEngine": "기본 검색 도구:",
    "settingsDDGExplanation": "덕덕고(DuckDuckGo)를 기본 검색 도구로 설정하여 검색 창에서 바로 검색해 보세요.",
    "customSearchEngineDescription": "검색어 변경: %s",
    "settingsKeyboardShortcutsHeading": "단축키",
    "settingsKeyboardShortcutsHelp": "여러 개의 단축키는 쉼표로 구분됩니다.",
    "settingsProxyHeading": "프록시",
    "settingsNoProxy": "사용하지 않음",
    "settingsManualProxy": "수동 설정",
    "settingsAutomaticProxy": "자동 설정",
    "settingsProxyRules": "프록시 규칙:",
    "settingsProxyBypassRules": "다음에서 프록시를 사용하지 않음:",
    "settingsProxyConfigurationURL": "URL 설정",
    /* app menu */
    "appMenuFile": "작업",
    "appMenuNewTab": "새 작업",
    "appMenuDuplicateTab": "작업 복제",
    "appMenuNewPrivateTab": "새 개인 작업",
    "appMenuNewTask": "새 작업장",
    "appMenuSavePageAs": "문서를 다른 이름으로 저장",
    "appMenuPrint": "인쇄",
    "appMenuEdit": "편집",
    "appMenuUndo": "되돌리기",
    "appMenuRedo": "재실행",
    "appMenuCut": "오려두기",
    "appMenuCopy": "복사하기",
    "appMenuPaste": "붙여넣기",
    "appMenuSelectAll": "전체 선택",
    "appMenuFind": "찾기",
    "appMenuView": "보기",
    "appMenuZoomIn": "확대",
    "appMenuZoomOut": "축소",
    "appMenuActualSize": "실제 크기",
    "appMenuFullScreen": "전체 화면", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "집중 지원",
    "appMenuBookmarks": "즐겨찾기",
    "appMenuHistory": "기록",
    "appMenuDeveloper": "개발자",
    "appMenuReloadBrowser": "새로고침",
    "appMenuInspectBrowser": "검사",
    "appMenuInspectPage": "문서 검사",
    "appMenuWindow": "창",
    "appMenuMinimize": "최소화",
    "appMenuClose": "닫기",
    "appMenuAlwaysOnTop": "상단에 고정",
    "appMenuHelp": "도움말",
    "appMenuKeyboardShortcuts": "단축키",
    "appMenuReportBug": "오류 전송",
    "appMenuTakeTour": "둘러보기",
    "appMenuViewGithub": "깃허브 방문",
    "appMenuAbout": "%n 정보", //%n is replaced with app name
    "appMenuPreferences": "환경설정",
    "appMenuServices": "서비스",
    "appMenuHide": "%n 숨기기",
    "appMenuHideOthers": "다른것 숨기기",
    "appMenuShowAll": "모두 보기",
    "appMenuQuit": "%n 종료",
    "appMenuBringToFront": "맨 앞으로",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "전체 <span id='total'></span> 쪽 중 <input type='text'/> 쪽"
    },
    /* Context Reader */
    "buttonReaderSettings": "읽기 지원 설정",
    "buttonReaderLightTheme": "밝게",
    "buttonReaderSepiaTheme": "흑갈색",
    "buttonReaderDarkTheme": "어둡게",
    "openReaderView": "항상 읽기 지원으로 열기",
    "autoRedirectBannerReader": "이 누리집의 문서를 항상 읽기 지원으로 여시겠습니까?",
    "buttonReaderRedirectYes": "네",
    "buttonReaderRedirectNo": "아니오",
    "articleReaderView": "원본 문서",
    /* Download manager */
    "downloadCancel": "취소",
    "downloadStateCompleted": "완료됨",
    "downloadStateFailed": "실패함",
    /* Update Notifications */
    "updateNotificationTitle": "새롭게 판올림된 민(Min) 사용 가능",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "비밀번호 자동완성",
    "settingsSelectPasswordManager": "지원하는 비밀번호 관리자 중에서 하나를 선택하세요:",
    "keychainViewPasswords": "저장된 비밀번호 표시",
    /* Password manager setup */
    "passwordManagerSetupHeading": "자동완성을 사용하려면 %p 설정을 완료하세요.",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "우선, <a id='password-manager-setup-link'></a>를 방문해 시스템에 내려받으세요."
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "<a id='password-manager-setup-link-installer'></a> 설치 파일을 내려받고 아래 박스 안에 끌어다 놓습니다:"
    },
    "passwordManagerSetupLink": "%p CLI 도구를 내려받으세요.",
    "passwordManagerSetupLinkInstaller": "%p CLI 설치 프로그램",
    "passwordManagerSetupStep2": "그 다음 도구를 아래 박스 안에 끌어다 놓습니다:",
    "passwordManagerSetupDragBox": "도구를 여기에 끌어다 놓으세요.",
    "passwordManagerSetupInstalling": "설치하는 중...",
    "passwordManagerBitwardenSignIn": "당신의 비트워든(Bitwarden) 계정에 연결하려면 vault.bitwarden.com/#/settings/account URL에 접속해 스크롤을 아래로 내려 \"View API Key\"를 선택한 후 아래 필드에 값을 붙여넣으세요.",
    "passwordManagerSetupSignIn": "자동완성을 사용하려면 비밀번호 관리자에 로그인하세요. 귀하의 자격증명은 민(Min)의 그 어디에도 저장되지 않습니다.",
    "disableAutofill": "자동완성 비활성화",
    "passwordManagerSetupUnlockError": "비밀번호 저장소를 여는데 실패했습니다: ",
    "passwordManagerSetupRetry": "올바른 파일과 비밀번호를 사용하세요. 도구를 여기로 다시 끌어다 놓고 재시도할 수 있습니다.",
    "passwordManagerUnlock": "비밀번호 저장소 사용을 위해 %p 비밀번호를 입력하세요:",
    /* Password save bar */
    "passwordCaptureSavePassword": "%s 비밀번호를 저장할까요?",
    "passwordCaptureSave": "저장",
    "passwordCaptureDontSave": "저장하지 않음",
    "passwordCaptureNeverSave": "절대 저장하지 않음",
    /* Password viewer */
    "savedPasswordsHeading": "저장된 비밀번호",
    "savedPasswordsEmpty": "저장된 비밀번호 없음",
    "savedPasswordsNeverSavedLabel": "저장하지 않았음",
    "deletePassword": "%s 비밀번호를 삭제할까요?",
    /* Dialogs */
    "loginPromptTitle": "%h (%r)로 로그인",
    "dialogConfirmButton": "확인",
    "dialogSkipButton": "취소",
    "username": "사용자 이름",
    "email": "전자우편주소(E-Mail)",
    "password": "비밀번호",
    "secretKey": "비밀 보안 키",
    "openExternalApp": "\\\"%s\\\"에서 열까요?",
    "clickToCopy": "클릭하여 복사",
    "copied": "복사됨"
  }
}
