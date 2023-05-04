export default {
  "name": "日本語",
  "identifier": "ja",
  "translations": {
    /* Context menu items
        these are the items displayed in the menu when you right-click on a page
        */
    "addToDictionary": "辞書に追加",
    "pictureInPicture": "ピクチャーインピクチャー",
    "openInNewTab": "新規タブで開く",
    "openInNewPrivateTab": "新規プライベートタブで開く",
    "saveLinkAs": "リンクを名前を付けて保存...",
    "viewImage": "画像を表示",
    "openImageInNewTab": "画像を新規タブで開く",
    "openImageInNewPrivateTab": "画像を新規プライベートタブで開く",
    "saveImageAs": "画像を別名で保存",
    "searchWith": "%s で検索", //%s will be replaced with the name of the current search engine
    "copyLink": "リンクをコピー",
    "copyEmailAddress": "メールアドレスをコピー",
    "selectAll": "すべて表示する",
    "undo": "アンドゥ",
    "redo": "やり直し",
    "cut": "カット",
    "copy": "コピー", //this is a verb (as in "copy the currently-selected text")
    "paste": "ペースト",
    "goBack": "戻る",
    "goForward": "進む",
    "inspectElement": "要素を検証",
    /* searchbar */
    "pasteAndGo": "貼り付けて移動",
    "DDGAnswerSubtitle": "インスタントアンサー", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "おすすめサイト", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "DuckDuckGoからの結果", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "タスク %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
        these are some of the items that show up when you press ! in the searchbar.
        Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "すべて表示する",
    "viewSettings": "設定を表示",
    "takeScreenshot": "スクリーンショットを撮る",
    "clearHistory": "すべての履歴をクリア",
    "enableBlocking": "このサイトのコンテンツブロックを有効にする",
    "disableBlocking": "このサイトのコンテンツブロックを無効にする",
    "clearHistoryConfirmation": "履歴をクリアしてもよろしいですか？",
    "switchToTask": "タスクに切り替える",
    "createTask": "タスクを作成",
    "closeTask": "タスクを閉じる",
    "moveToTask": "このタブをタスクに移動",
    "nameTask": "このタスクの名前",
    "addBookmark": "ブックマークを追加",
    "searchBookmarks": "ブックマークを検索",
    "bookmarksAddTag": "タグを追加...",
    "bookmarksRenameTag": null, //missing translation
    "bookmarksDeleteTag": null, //missing translation
    "deleteBookmarksWithTag": null, //missing translation
    "bookmarksSimilarItems": "類似アイテム",
    "searchHistory": "検索履歴",
    "importBookmarks": "HTMLファイルからブックマークをインポートする",
    "exportBookmarks": "ブックマークをエクスポート",
    "runUserscript": "ユーザースクリプトを実行",
    /* navbar */
    "openMenu": "メニューを開く",
    "enterReaderView": "リーダービューを開始",
    "exitReaderView": "リーダービューを終了",
    "newTabLabel": "新しいタブ", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "このウェブサイトへの接続は保護されていません。",
    "searchbarPlaceholder": "検索ワードまたはアドレスを入力",
    "privateTab": "プライベートタブ",
    "newTabAction": "新規タブを開く", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "タスクを表示",
    "newTask": "新規タスク", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "タスク %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    "taskDeleteWarning": {
      "unsafeHTML": "タスクは削除されます。 <a>キャンセル?</a>"
    },
    "tasksSearchTabs": "検索タブ",
    "returnToTask": "前のタスクに戻る",
    "taskDescriptionTwo": "％tと％t",
    "taskDescriptionThree": "％t, ％t, ％n以上",
    /* find in page toolbar */
    "searchInPage": "ページ内を検索", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%t 件中 %i 件目", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%t 件中 %i 件目",
    /* Focus mode */
    "isFocusMode": "フォーカスモード中です",
    "closeDialog": "OK", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "フォーカスモードでは、新しいタブを作成したり、タスクを切り替えたりすることはできません。",
    "focusModeExplanation2": "表示メニューの「フォーカスモード」のチェックを外すと、フォーカスモードを終了できます。",
    /* relative dates */
    "timeRangeJustNow": "ちょうど今",
    "timeRangeMinutes": "数分前に",
    "timeRangeHour": "過去1時間に",
    "timeRangeToday": "今日",
    "timeRangeYesterday": "昨日",
    "timeRangeWeek": "先週",
    "timeRangeMonth": "先月",
    "timeRangeYear": "昨年は",
    "timeRangeLongerAgo": "ずっと前",
    /* pages/error/index.html */
    "crashErrorTitle": "予期しない問題が発生しました",
    "crashErrorSubtitle": "ページの表示中に問題が発生しました。",
    "errorPagePrimaryAction": "再試行する",
    "serverNotFoundTitle": "サーバーが見つかりません",
    "serverNotFoundSubtitle": "Minはこのウェブサイトを見つけることができませんでした。",
    "archiveSearchAction": "archive.orgで検索する",
    "sslErrorTitle": "このウェブサイトは利用できません",
    "sslErrorMessage": "Minはこのウェブサイトとの安全な接続を行えませんでした。",
    "dnsErrorTitle": "ウェブサイトが見つかりません",
    "dnsErrorMessage": "DNSエラーが発生しました。",
    "offlineErrorTitle": "オフラインです",
    "offlineErrorMessage": "インターネットに再接続してからもう一度お試しください。",
    "genericConnectionFail": "Minはウェブサイトに接続できませんでした。",
    "sslTimeErrorMessage": "Minはこのウェブサイトとの安全な接続を行えませんでした。お使いのコンピューターの時刻が正しく設定されているか確認してください。",
    "addressInvalidTitle": "このアドレスは無効です。",
    "genericError": "エラーが発生しました",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "このサイトは安全ではない可能性があります。",
    "phishingErrorMessage": "このウェブサイトは、あなたのパスワードや口座情報などの個人情報を盗もうとしている可能性があります。",
    "phishingErrorVisitAnyway": "それでもこのサイトを訪問する",
    "phishingErrorLeave": "このサイトから離れる",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "エラーが発生しました。 他の開いているインスタンスを閉じてMinを再起動してください。",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "エラーが発生しました",
    "sessionRestoreErrorExplanation": "保存したタブを正しく復元できませんでした。",
    "sessionRestoreErrorBackupInfo": "次の場所にデータのバックアップを保存しました: %l", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "もしこのエラーが立て続けに発生する場合は、<a href=\"https://github.com/minbrowser/min\" target=\"_blank\">こちら</a>から新しいissueを開いてください。"
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "環境設定",
    "settingsRestartRequired": "これらの変更を適用するには再起動が必要です。",
    "settingsPrivacyHeading": "コンテンツブロッカー",
    "settingsContentBlockingLevel0": "すべての広告とトラッカーを許可します",
    "settingsContentBlockingLevel1": "第三者の広告やトラッカーをブロックする",
    "settingsContentBlockingLevel2": "すべての広告とトラッカーをブロックする",
    "settingsContentBlockingExceptions": "これらのウェブサイトでは広告は引き続き許可されます:",
    "settingsBlockScriptsToggle": "スクリプトをブロック",
    "settingsBlockImagesToggle": "画像をブロック",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "これまでのところ、Minは<strong></strong>の広告とトラッカーをブロックしています。"
    },
    "settingsCustomBangs": "bangsのカスタム",
    "settingsCustomBangsAdd": "カスタムbangを追加",
    "settingsCustomBangsPhrase": "フレーズ（必須）",
    "settingsCustomBangsSnippet": "説明（オプション）",
    "settingsCustomBangsRedirect": "リダイレクトURL（必須）",
    "settingsCustomizeFiltersLink": "フィルターをカスタマイズする",
    "settingsAppearanceHeading": "外観",
    "settingsEnableDarkMode": "ダークモードを使用:",
    "settingsDarkModeNever": "決して",
    "settingsDarkModeNight": "夜に",
    "settingsDarkModeAlways": "常に",
    "settingsDarkModeSystem": "システムテーマに従う",
    "settingsSiteThemeToggle": "サイトテーマを有効にする",
    "settingsAdditionalFeaturesHeading": "追加機能",
    "settingsUserscriptsToggle": "ユーザースクリプトを有効にする",
    "settingsShowDividerToggle": "タブ間の仕切りを表示",
    "settingsSeparateTitlebarToggle": "別のタイトルバーを使用する",
    "settingsAutoplayToggle": "自動再生を有効にする",
    "settingsOpenTabsInForegroundToggle": "フォアグラウンドで新しいタブを開く",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "ユーザースクリプトを使用して、Webサイトの動作を変更できます -  <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">詳細</a>。"
    },
    "settingsUserAgentToggle": "カスタムユーザーエージェントを使用する",
    "settingsUpdateNotificationsToggle": "アップデートを自動的に確認する",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "使用統計を送信する (<a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">より詳しい情報</a>)"
    },
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "検索エンジン",
    "settingsDefaultSearchEngine": "デフォルトの検索エンジン:",
    "settingsDDGExplanation": "検索バーにインスタントアンサーを表示するには、DuckDuckGoをデフォルトの検索エンジンに設定してください。",
    "customSearchEngineDescription": "検索語を％sに置き換えます",
    "settingsKeyboardShortcutsHeading": "キーボードショートカット",
    "settingsKeyboardShortcutsHelp": "カンマ区切りで複数のショートカットを登録できます。",
    "settingsProxyHeading": "プロキシ",
    "settingsNoProxy": "プロキシなし",
    "settingsManualProxy": "手動設定",
    "settingsAutomaticProxy": "自動構成",
    "settingsProxyRules": "プロキシルール：",
    "settingsProxyBypassRules": "プロキシなし：",
    "settingsProxyConfigurationURL": "構成URL",
    /* app menu */
    "appMenuFile": "ファイル",
    "appMenuNewTab": "新規タブ",
    "appMenuDuplicateTab": "重複タブ",
    "appMenuNewPrivateTab": "新規プライベートタブ",
    "appMenuNewTask": "新規タスク",
    "appMenuSavePageAs": "ページを別名で保存",
    "appMenuPrint": "プリント",
    "appMenuEdit": "編集",
    "appMenuUndo": "取り消す",
    "appMenuRedo": "やり直す",
    "appMenuCut": "カット",
    "appMenuCopy": "コピー",
    "appMenuPaste": "ペースト",
    "appMenuSelectAll": "すべて選択",
    "appMenuFind": "検索",
    "appMenuView": "表示",
    "appMenuZoomIn": "拡大",
    "appMenuZoomOut": "縮小",
    "appMenuActualSize": "実際のサイズ",
    "appMenuFullScreen": "フルスクリーン", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "フォーカスモード",
    "appMenuBookmarks": "ブックマーク",
    "appMenuHistory": "歴史",
    "appMenuDeveloper": "開発",
    "appMenuReloadBrowser": "ブラウザを再読み込み",
    "appMenuInspectBrowser": "ブラウザを検証",
    "appMenuInspectPage": "ページを検証",
    "appMenuWindow": "ウインドウ",
    "appMenuMinimize": "最小化",
    "appMenuClose": "閉じる",
    "appMenuAlwaysOnTop": "常にトップに",
    "appMenuHelp": "ヘルプ",
    "appMenuKeyboardShortcuts": "キーボードショートカット",
    "appMenuReportBug": "バグを報告",
    "appMenuTakeTour": "ツアーを見る",
    "appMenuViewGithub": "GitHubで表示",
    "appMenuAbout": "%nについて", //%n is replaced with app name
    "appMenuPreferences": "環境設定",
    "appMenuServices": "サービス",
    "appMenuHide": "%nを隠す",
    "appMenuHideOthers": "ほかを隠す",
    "appMenuShowAll": "すべてを表示",
    "appMenuQuit": "%nを終了",
    "appMenuBringToFront": "すべてを最前面に移動",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "<span id='total'></span> ページ中 <input type='text'/> ページ目"
    },
    /* Context Reader */
    "buttonReaderSettings": "読み取りモードの設定",
    "buttonReaderLightTheme": "光",
    "buttonReaderSepiaTheme": "セピア",
    "buttonReaderDarkTheme": "闇",
    "openReaderView": "常にリーダーモードで開く",
    "autoRedirectBannerReader": "このサイトの記事を常にリーダーモードで開きますか？",
    "buttonReaderRedirectYes": "はい",
    "buttonReaderRedirectNo": "いいえ",
    "articleReaderView": "原著",
    /* Download manager */
    "downloadCancel": "キャンセル",
    "downloadStateCompleted": "完了しました",
    "downloadStateFailed": "フェイル",
    /* Update Notifications */
    "updateNotificationTitle": "Minの新しいバージョンが利用可能です。",
    /* Password settings */
    "settingsPasswordAutoFillHeadline": "パスワードの自動入力",
    "settingsSelectPasswordManager": "サポートされているパスワードマネージャのいずれかを選択します。",
    "keychainViewPasswords": "保存したパスワードを表示する",
    /* Password manager setup */
    "passwordManagerSetupHeading": "自動入力を使用するための％pの設定を完了してください",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "最初に <a id='password-manager-setup-link'></a> 、システムに展開します。"
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "<a id='password-manager-setup-link-installer'></a>をダウンロードして、ファイルを下のボックスにドラッグします。"
    },
    "passwordManagerSetupLink": "％p CLIツールをダウンロード",
    "passwordManagerSetupLinkInstaller": "％pインストーラーCLI",
    "passwordManagerSetupStep2": "次に、ツールを下のボックスにドラッグします。",
    "passwordManagerSetupDragBox": "ここにツールをドラッグ",
    "passwordManagerSetupInstalling": "インストールしています...",
    "passwordManagerBitwardenSignIn": "Bitwardenアカウントに接続するには、vault.bitwarden.com/#/settings/accountにアクセスし、一番下までスクロールして、「APIキーを表示」を選択します。 次に、値を下のフィールドに貼り付けます。",
    "passwordManagerSetupSignIn": "パスワードマネージャーにログインして、自動入力の使用を開始します。 資格情報はMin内のどこにも保存されません。",
    "disableAutofill": "自動入力を無効にする",
    "passwordManagerSetupUnlockError": "パスワードストアのロック解除に失敗しました： ",
    "passwordManagerSetupRetry": "正しいファイルを使用し、正しいパスワードを入力していることを確認してください。 ここにツールをもう一度ドラッグすると、再試行できます。",
    "passwordManagerUnlock": "％pマスターパスワードを入力して、パスワードストアのロックを解除します。",
    /* Password save bar */
    "passwordCaptureSavePassword": "％sのパスワードを保存しますか？",
    "passwordCaptureSave": "保存する",
    "passwordCaptureDontSave": "保存しないで",
    "passwordCaptureNeverSave": "保存しない",
    /* Password viewer */
    "savedPasswordsHeading": "保存されたパスワード",
    "savedPasswordsEmpty": "保存されたパスワードはありません。",
    "savedPasswordsNeverSavedLabel": "保存されなかった",
    "deletePassword": "％sのパスワードを削除しますか？",
    /* Dialogs */
    "loginPromptTitle": "％hにサインイン（％r）",
    "dialogConfirmButton": "確認する",
    "dialogSkipButton": "キャンセル",
    "username": "ユーザー名",
    "email": "Eメール",
    "password": "パスワード",
    "secretKey": "秘密鍵",
    "openExternalApp": "\\\"%s\\\"で開きますか？",
    "clickToCopy": "クリックしてコピー",
    "copied": "コピー"
  }
}
