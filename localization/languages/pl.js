export default {
  "name": "Polski",
  "identifier": "pl",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "Dodaj do słownika",
    "pictureInPicture": "Obraz w obrazie",
    "openInNewTab": "Otwórz w nowej karcie",
    "openInNewPrivateTab": "Otwórz w nowej karcie prywatnej",
    "saveLinkAs": "Zapisz link jako...",
    "viewImage": "Zobacz grafikę",
    "openImageInNewTab": "Otwórz grafikę w nowej karcie",
    "openImageInNewPrivateTab": "Otwórz grafikę w nowej karcie prywatnej",
    "saveImageAs": "Zapisz grafikę jako",
    "searchWith": "Szukaj %s", //%s will be replaced with the name of the current search engine
    "copyLink": "Kopiuj link",
    "copyEmailAddress": "Skopiuj adres e-mail",
    "selectAll": "Zaznacz wszystko",
    "undo": "Cofnij",
    "redo": "Przywróć",
    "cut": "Wytnij",
    "copy": "Kopiuj", //this is a verb (as in "copy the currently-selected text")
    "paste": "Wklej",
    "goBack": "Cofnij",
    "goForward": "Dalej",
    "inspectElement": "Sprawdź element",
    /* searchbar */
    "pasteAndGo": "Wklej i idź",
    "DDGAnswerSubtitle": "Odpowiedź", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "Sugerowana strona", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "Wyniki z DuckDuckGo", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "Zadanie %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "Pokaż więcej",
    "viewSettings": "Wyświetl Ustawienia",
    "takeScreenshot": "Zrób zrzut ekranu",
    "clearHistory": "Wyczyść całą historię",
    "enableBlocking": "Włącz blokowanie treści dla tej witryny",
    "disableBlocking": "Wyłącz blokowanie treści dla tej witryny",
    "clearHistoryConfirmation": "Czy wyczyścić całą historię i dane przeglądania?",
    "switchToTask": "Przełącz na zadanie",
    "createTask": "Utwórz zadanie",
    "closeTask": "Zamknij zadanie",
    "moveToTask": "Przenieś tę kartę do zadania",
    "nameTask": "Nazwij to zadanie",
    "addBookmark": "Dodaj zakładkę",
    "searchBookmarks": "Zakładki wyszukiwania",
    "bookmarksAddTag": "Dodaj znacznik...",
    "bookmarksRenameTag": "Zmień nazwę tagu",
    "bookmarksDeleteTag": "Usuń tag",
    "deleteBookmarksWithTag": "Usuń zakładki z tagiem",
    "bookmarksSimilarItems": "Podobne pozycje",
    "searchHistory": "Historia wyszukiwania",
    "importBookmarks": "Importuj zakładki z pliku HTML",
    "exportBookmarks": "Eksportuj zakładki",
    "runUserscript": "Uruchom skrypt użytkownika",
    /* navbar */
    "openMenu": "Otwórz menu", //application menu button on windows
    "enterReaderView": "Otwórz widok czytnika",
    "exitReaderView": "Zamknij widok czytnika",
    "newTabLabel": "Nowa karta", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "Twoje połączenie z tą witryną nie jest bezpieczne.",
    "searchbarPlaceholder": "Wyszukaj lub wprowadź adres",
    "privateTab": "Nowa karta prywatna",
    "newTabAction": "Nowa karta", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "Wyświetl zadania",
    "newTask": "Nowe zadanie", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "Zadanie %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "Zadanie usunięte. <a>Cofnąć?</a>"
    },
    "tasksSearchTabs": "Szukaj w kartach",
    "returnToTask": "Wróć do poprzedniego zadania",
    "taskDescriptionTwo": "%t i %t",
    "taskDescriptionThree": "%t, %t i %n więcej",
    /* find in page toolbar */
    "searchInPage": "Wyszukaj na stronie", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%i z %t dopasowania", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%i z %t dopasowań",
    /* Focus mode */
    "isFocusMode": "Jesteś w trybie ostrości.",
    "closeDialog": "OK", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "W trybie ustawiania ostrości nie można tworzyć nowych kart ani przełączać zadań.",
    "focusModeExplanation2": "Możesz wyjść z trybu ustawiania ostrości, usuwając zaznaczenie \"tryb ustawiania ostrości\" w menu widoku.",
    /* relative dates */
    "timeRangeJustNow": "Przed chwilą",
    "timeRangeMinutes": "Kilka minut temu",
    "timeRangeHour": "W ciągu ostatniej godziny",
    "timeRangeToday": "Dzisiaj",
    "timeRangeYesterday": "Wczoraj",
    "timeRangeWeek": "W poprzednim tygodniu",
    "timeRangeMonth": "W poprzednim miesiącu",
    "timeRangeYear": "W poprzednim roku",
    "timeRangeLongerAgo": "Wcześniej",
    /* pages/error/index.html */
    "crashErrorTitle": "Coś poszło nie tak.",
    "crashErrorSubtitle": "Wystąpił problem podczas wyświetlania tej strony.",
    "errorPagePrimaryAction": "Spróbuj ponownie",
    "serverNotFoundTitle": "Nie znaleziono serwera",
    "serverNotFoundSubtitle": "Min nie może znaleźć tej witryny.",
    "archiveSearchAction": "Wyszukaj na archive.org",
    "sslErrorTitle": "Ta strona internetowa jest niedostępna",
    "sslErrorMessage": "Min nie można bezpiecznie połączyć się z tą witryną.",
    "dnsErrorTitle": "Nie znaleziono strony",
    "dnsErrorMessage": "Wystąpił błąd DNS.",
    "offlineErrorTitle": "Jesteś poza siecią",
    "offlineErrorMessage": "Połącz się z Internetem i spróbuj ponownie.",
    "genericConnectionFail": "Min nie może połączyć się z witryną.",
    "sslTimeErrorMessage": "Min nie może bezpiecznie połączyć się z tą witryną. Upewnij się, że zegar komputera jest ustawiony prawidłowo.",
    "addressInvalidTitle": "Ten adres jest nieprawidłowy.",
    "genericError": "Wystąpił błąd",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "Ta strona nie jest bezpieczna.",
    "phishingErrorMessage": "Ta strona może próbować wykraść twoje dane osobowe, takie jak hasła lub informacje bankowe.",
    "phishingErrorVisitAnyway": "Odwiedź stronę mimo to",
    "phishingErrorLeave": "Opuść tę stronę",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "Wystąpił błąd. Zamknij wszystkie inne otwarte wystąpienia i uruchom ponownie Min.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "Wystąpił błąd",
    "sessionRestoreErrorExplanation": "Nie można przywrócić poprawnie zapisanych kart.",
    "sessionRestoreErrorBackupInfo": "W tej lokalizacji zapisaliśmy kopię zapasową danych: %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "Jeśli błąd nadal występuje, otwórz nowy problem <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">tutaj</a>."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "Preferencje",
    "settingsRestartRequired": "Musisz ponownie uruchomić, aby zastosować te zmiany.",
    "settingsPrivacyHeading": "Blokowanie treści",
    "settingsContentBlockingLevel0": "Zezwalaj na wszystkie reklamy i śledzenie",
    "settingsContentBlockingLevel1": "Blokuj reklamy i śledzenie innych firm",
    "settingsContentBlockingLevel2": "Zablokuj wszystkie reklamy i śledzenie",
    "settingsContentBlockingExceptions": "Zezwalaj na reklamy w tych witrynach:",
    "settingsBlockScriptsToggle": "Zablokuj skrypty",
    "settingsBlockImagesToggle": "Zablokuj obrazy",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "Jak dotąd Min zablokował reklamy i moduły śledzące w ilości: <strong></strong>."
    },
    "settingsCustomBangs": "Niestandardowe bangs",
    "settingsCustomBangsAdd": "Dodaj niestandardowy bang",
    "settingsCustomBangsPhrase": "Wyrażenie (wymagane)",
    "settingsCustomBangsSnippet": "Opis (opcjonalnie)",
    "settingsCustomBangsRedirect": "Adres URL przekierowania (wymagane)",
    "settingsCustomizeFiltersLink": "Dostosuj filtry",
    "settingsAppearanceHeading": "Wygląd",
    "settingsEnableDarkMode": "Włącz tryb ciemny:",
    "settingsDarkModeNever": "Nigdy",
    "settingsDarkModeNight": "W nocy",
    "settingsDarkModeAlways": "Zawsze",
    "settingsDarkModeSystem": "Śledź motyw systemu",
    "settingsSiteThemeToggle": "Włącz motyw witryny",
    "settingsAdditionalFeaturesHeading": "Dodatkowe funkcje",
    "settingsUserscriptsToggle": "Włącz skrypty użytkownika",
    "settingsShowDividerToggle": "Pokaż linię rozdzielającą między zakładkami",
    "settingsSeparateTitlebarToggle": "Użyj osobnego paska tytułu",
    "settingsAutoplayToggle": "Włącz autoodtwarzanie",
    "settingsOpenTabsInForegroundToggle": "Otwórz nowe karty na pierwszym planie",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "Skrypty użytkownika pozwalają modyfikować zachowanie stron internetowych - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">dowiedz się więcej</a>."
    },
    "settingsUserAgentToggle": "Użyj niestandardowego klienta użytkownika",
    "settingsUpdateNotificationsToggle": "Automatycznie sprawdź dostępność aktualizacji",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "Wysyłaj statystyki użytkowania (<a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">Więcej informacji</a>)"
    },
    "settingsStartupOptions": "Podczas uruchamiania Min",
    "settingsStartupCreateTask": "Otwieraj ostatnie karty",
    "settingsStartupNewTaskandBackground": "Przenoś poprzednie karty na drugi plan",
    "settingsStartupNewTaskOnly": "Otwieraj nową, pustą kartę",
    "settingsSearchEngineHeading": "Wyszukiwarka",
    "settingsDefaultSearchEngine": "Wybierz domyślną wyszukiwarkę:",
    "settingsDDGExplanation": "Ustaw DuckDuckGo jako domyślną wyszukiwarkę, aby zobaczyć błyskawiczne odpowiedzi na pasku wyszukiwania.",
    "customSearchEngineDescription": "Zamień wyszukiwane hasło na %s",
    "settingsKeyboardShortcutsHeading": "Skróty klawiszowe",
    "settingsKeyboardShortcutsHelp": "Użyj przecinków, aby oddzielić wiele skrótów.",
    "settingsProxyHeading": "Serwer proxy",
    "settingsNoProxy": "Brak serwera proxy",
    "settingsManualProxy": "Konfiguracja ręczna",
    "settingsAutomaticProxy": "Konfiguracja automatyczna",
    "settingsProxyRules": "Zasady serwera proxy:",
    "settingsProxyBypassRules": "Brak serwera proxy dla:",
    "settingsProxyConfigurationURL": "Adres URL konfiguracji",
    /* app menu */
    "appMenuFile": "Plik",
    "appMenuNewTab": "Nowa karta",
    "appMenuDuplicateTab": "Powielona karta",
    "appMenuNewPrivateTab": "Nowa karta prywatna",
    "appMenuNewTask": "Nowe zadanie",
    "appMenuSavePageAs": "Zapisz stronę jako",
    "appMenuPrint": "Drukuj",
    "appMenuEdit": "Edytuj",
    "appMenuUndo": "Cofnij",
    "appMenuRedo": "Ponów",
    "appMenuCut": "Wytnij",
    "appMenuCopy": "Kopiuj",
    "appMenuPaste": "Wklej",
    "appMenuSelectAll": "Zaznacz wszystko",
    "appMenuFind": "Znajdź",
    "appMenuView": "Widok",
    "appMenuZoomIn": "Powiększ",
    "appMenuZoomOut": "Pomniejsz",
    "appMenuActualSize": "Rzeczywisty rozmiar",
    "appMenuFullScreen": "Pełen ekran", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "Tryb ostrości",
    "appMenuBookmarks": "Zakładki",
    "appMenuHistory": "Historia",
    "appMenuDeveloper": "Programista",
    "appMenuReloadBrowser": "Załaduj ponownie",
    "appMenuInspectBrowser": "Zbadaj przeglądarkę",
    "appMenuInspectPage": "Zbadaj stronę",
    "appMenuWindow": "Okno",
    "appMenuMinimize": "Minimalizuj",
    "appMenuClose": "Zamknij",
    "appMenuAlwaysOnTop": "Zawsze na górze",
    "appMenuHelp": "Pomoc",
    "appMenuKeyboardShortcuts": "Skróty klawiszowe",
    "appMenuReportBug": "Zgłoś błąd",
    "appMenuTakeTour": "Otwórz przewodnik",
    "appMenuViewGithub": "Zobacz na GitHub",
    "appMenuAbout": "O %n", //%n is replaced with app name
    "appMenuPreferences": "Preferencje",
    "appMenuServices": "Usługi",
    "appMenuHide": "Ukryj %n",
    "appMenuHideOthers": "Ukryj pozostałe",
    "appMenuShowAll": "Pokaż wszystko",
    "appMenuQuit": "Zamknij %n",
    "appMenuBringToFront": "Umieść wszystko na wierzchu",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "strona <input type='text'/> z <span id='total'></span>"
    },
    /* Context Reader */
    "buttonReaderSettings": "Ustawienia czytnika",
    "buttonReaderLightTheme": "Jasny",
    "buttonReaderSepiaTheme": "Sepia",
    "buttonReaderDarkTheme": "Ciemny",
    "openReaderView": "Zawsze otwieraj w widoku czytnika",
    "autoRedirectBannerReader": "Czy zawsze otwierać artykuły z tej witryny w widoku czytelnika?",
    "buttonReaderRedirectYes": "Tak",
    "buttonReaderRedirectNo": "Nie",
    "articleReaderView": "Oryginalny artykuł",
    /* Download manager */
    "downloadCancel": "Anuluj pobieranie",
    "downloadStateCompleted": "Pobieranie zakończone",
    "downloadStateFailed": "Błąd pobierania",
    /* Update Notifications */
    "updateNotificationTitle": "Dostępna jest nowa wersja Min",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "Autouzupełnianie hasła",
    "settingsSelectPasswordManager": "Wybierz jeden z obsługiwanych menedżerów haseł:",
    "keychainViewPasswords": "Wyświetl zapisane hasła",
    /* Password manager setup */
    "passwordManagerSetupHeading": "Zakończ konfigurowanie %p aby korzystać z autouzupełniania",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "Najpierw, <a id='password-manager-setup-link'></a> i wypakuj go dla swojego systemu."
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "Pobierz <a id='password-manager-setup-link-installer'></a> i przeciągnij plik do pola poniżej:"
    },
    "passwordManagerSetupLink": "pobierz %p narzędzie wiersza poleceń",
    "passwordManagerSetupLinkInstaller": "instalator wiersza poleceń %p",
    "passwordManagerSetupStep2": "Następnie przeciągnij narzędzie do pola poniżej:",
    "passwordManagerSetupDragBox": "Przeciągnij narzędzie tutaj",
    "passwordManagerSetupInstalling": "Instalowanie...",
    "passwordManagerBitwardenSignIn": "Aby połączyć swoje konto Bitwarden, przejdź do vault.bitwarden.com/#/settings/account, przewiń w dół i wybierz „Wyświetl klucz API”. Następnie wklej wartości w poniższe pola.",
    "passwordManagerSetupSignIn": "Zaloguj się do menedżera haseł, aby rozpocząć korzystanie z autouzupełniania. Twoje dane uwierzytelniające nie będą przechowywane nigdzie w Min.",
    "disableAutofill": "Wyłącz autouzupełnianie",
    "passwordManagerSetupUnlockError": "nie udało się odblokować przechowalni haseł: ",
    "passwordManagerSetupRetry": "Upewnij się, że używasz właściwego pliku i wpisujesz poprawne hasło. Możesz spróbować ponownie, przeciągając tutaj narzędzie.",
    "passwordManagerUnlock": "Wprowadź główne hasło %p, aby odblokować przechowalnię haseł:",
    /* Password save bar */
    "passwordCaptureSavePassword": "Zapisać hasło dla %s?",
    "passwordCaptureSave": "Zapisz",
    "passwordCaptureDontSave": "Nie zapisuj",
    "passwordCaptureNeverSave": "Nigdy nie zapisuj",
    /* Password viewer */
    "savedPasswordsHeading": "Zapisane hasła",
    "savedPasswordsEmpty": "Brak zapisanych haseł.",
    "savedPasswordsNeverSavedLabel": "Nigdy nie zapisano",
    "deletePassword": "Usunąć hasło dla %s?",
    /* Dialogs */
    "loginPromptTitle": "Zaloguj się do %h (%r)",
    "dialogConfirmButton": "Potwierdź",
    "dialogSkipButton": "Anuluj",
    "username": "Nazwa Użytkownika",
    "email": "Email",
    "password": "Hasło",
    "secretKey": "Sekretny klucz",
    "openExternalApp": "Otworzyć w \\\"%s\\\"?",
    "clickToCopy": "Kliknij, aby skopiować",
    "copied": "Skopiowane"
  }
}
