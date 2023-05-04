module.exports = {
  "name": "Tiếng Việt",
  "identifier": "vi",
  "translations": {
    /* Context menu items
    these are the items displayed in the menu when you right-click on a page
    */
    "addToDictionary": "Thêm vào từ điển",
    "pictureInPicture": "Chế độ Ảnh trong Ảnh",
    "openInNewTab": "Mở trong tab mới",
    "openInNewPrivateTab": "Mở trong tab riêng tư mới",
    "saveLinkAs": "Lưu đường dẫn dưới dạng",
    "viewImage": "Xem ảnh",
    "openImageInNewTab": "Mở ảnh trong tab mới",
    "openImageInNewPrivateTab": "Mở ảnh trong tab riêng tư mới",
    "saveImageAs": "Lưu ảnh thành",
    "searchWith": "Tìm kiếm với %s", //%s will be replaced with the name of the current search engine
    "copyLink": "Chép liên kết",
    "copyEmailAddress": "Sao chép địa chỉ email",
    "selectAll": "Chọn tất cả",
    "undo": "Hoàn tác",
    "redo": "Làm lại",
    "cut": "Cắt",
    "copy": "Sao chép", //this is a verb (as in "copy the currently-selected text")
    "paste": "Dán",
    "goBack": "Quay lại trang trước",
    "goForward": "Đi tiếp trang sau",
    "inspectElement": "Kiểm tra thành phần",
    /* searchbar */
    "pasteAndGo": "Dán và truy cập",
    "DDGAnswerSubtitle": "Kết quả", //this is a noun - it is used as a subtitle when displaying Instant Answers from DuckDuckGo in the searchbar
    "suggestedSite": "Các đề xuất", //this is used to label suggested websites from the DuckDuckGo API,
    "resultsFromDDG": "Kết quả từ DuckDuckGo", //this is used as a label to indicate which results come from DuckDuckGo's API
    "taskN": "Tác vụ %n", //this is used as a way to identify which tab a task is in "task 1", "task 2", ...
    /* custom !bangs
    these are some of the items that show up when you press ! in the searchbar.
    Each one of these strings describes what the command will do when you run it. */
    "showMoreBangs": "Xem nhiều hơn",
    "viewSettings": "Xem cài đặt",
    "takeScreenshot": "Chụp màn hình",
    "clearHistory": "Xóa lịch sử",
    "enableBlocking": "Mở chặn",
    "disableBlocking": "Tắt chặn",
    "clearHistoryConfirmation": "Xóa các lịch sử và dữ liệu duyệt?",
    "switchToTask": "Đổi sang tác vụ",
    "createTask": "Tạo tác vụ",
    "closeTask": "Kết thúc tác vụ",
    "moveToTask": "Chuyển tab này sang tác vụ khác",
    "nameTask": "Ghi tên tác vụ này",
    "addBookmark": "Đánh dấu trang này",
    "searchBookmarks": "Tìm trong các trang được đánh dấu",
    "bookmarksAddTag": "Thêm thẻ",
    "bookmarksRenameTag": null, //missing translation
    "bookmarksDeleteTag": null, //missing translation
    "deleteBookmarksWithTag": null, //missing translation
    "bookmarksSimilarItems": "Các mục tương tự",
    "searchHistory": "Tìm kiếm trong lịch sử",
    "importBookmarks": "Nhập dấu trang từ tệp HTML",
    "exportBookmarks": "Xuất dấu trang",
    "runUserscript": "Chạy câu lệnh từ người dùng",
    /* navbar */
    "openMenu": "Mở menu", //application menu button on windows
    "enterReaderView": "Vào chế độ đọc",
    "exitReaderView": "Thoát chế độ đọc",
    "newTabLabel": "Tab mới", //this is a noun, used for tabs that don't have a page loaded in them yet
    "connectionNotSecure": "Kết nối đến trang không an toàn.",
    "searchbarPlaceholder": "Tìm kiếm hoặc nhập địa chỉ",
    "privateTab": "Tab riêng tư",
    "newTabAction": "Mở tab mới", //this is a verb, used to label a button that adds a tab to the tabstrip when clicked
    /* task overlay */
    "viewTasks": "Xem tác vụ",
    "newTask": "Tạo tác vụ", //"new" is a verb - it is used for a button at the bottom of the task overlay
    "defaultTaskName": "tác vụ %n", //this is the name used for newly-created tasks; %n is replaced with a number ("task 1", "task 2", etc)
    /* find in page toolbar */
    "searchInPage": "Tìm kiếm trong trang", //this is used as the placeholder text for the textbox in the find in page toolbar
    "findMatchesSingular": "%i của %t", //this and the next label are used to indicate which match is currently highlighted
    "findMatchesPlural": "%i của %t",
    /* Focus mode */
    "isFocusMode": "Bạn trong chế độ tập trung.",
    "closeDialog": "OK", //used as a label for the button that closes the dialog
    "focusModeExplanation1": "Khi bật, bạn sẽ không thể tạo tab mới hoặc chuyển tác vụ", 
    "focusModeExplanation2": "Bạn có thể tắt bằng cách bỏ chọn \"focus mode\" trong menu",
    /* relative dates */
    "timeRangeJustNow": "Vừa nãy",
    "timeRangeMinutes": "Vài phút trước",
    "timeRangeHour": "Trong giờ trước",
    "timeRangeToday": "Hôm nay",
    "timeRangeYesterday": "Hôm qua",
    "timeRangeWeek": "Trong tuần trước",
    "timeRangeMonth": "Trong tháng trước",
    "timeRangeYear": "Trong năm trước",
    "timeRangeLongerAgo": "Lâu hơn",
    /* pages/error/index.html */
    "crashErrorTitle": "Có gì không ổn.",
    "crashErrorSubtitle": "Đã xảy ra sự cố khi hiển thị trang web này.",
    "errorPagePrimaryAction": "Thử lại",
    "serverNotFoundTitle": "Không tìm thấy máy chủ",
    "serverNotFoundSubtitle": "Min không thể tìm trang web này.",
    "archiveSearchAction": "Tìm kiếm trên archive.org",
    "sslErrorTitle": "Trang web này không có sẵn",
    "sslErrorMessage": "Min không thể kết nối an toàn đến trang web này.",
    "dnsErrorTitle": "Không tìm thấy trang web",
    "dnsErrorMessage": "Đã xảy ra lỗi DNS.",
    "offlineErrorTitle": "Bạn đang ngoại tuyến",
    "offlineErrorMessage": "Kết nối lại với internet và thử lại.",
    "genericConnectionFail": "Min không thể kết nối với trang web.",
    "sslTimeErrorMessage": "Min không thể kết nối an toàn đến trang web này. Hãy kiểm tra đồng hồ máy tính của bạn được cài đặt đúng.",
    "addressInvalidTitle": "Địa chỉ này không hợp lệ.",
    "genericError": "Đã xảy ra lỗi",
    /* pages/phishing/index.html */
    "phishingErrorTitle": "Trang web này có thể nguy hiểm.",
    "phishingErrorMessage": "Trang web này có thể cố gắng ăn cắp thông tin cá nhân của bạn, ví dụ: mật khẩu hoặc thông tin ngân hàng.",
    "phishingErrorVisitAnyway": "Vẫn truy cập",
    "phishingErrorLeave": "Rời trang web này",
    /* multiple instances alert */
    "multipleInstancesErrorMessage": "Đã xảy ra lỗi. Hãy thoát trường hợp khác đang mở và khởi chạy Min lại.",
    /* pages/sessionRestoreError/index.html */
    "sessionRestoreErrorTitle": "Đã xảy ra lỗi",
    "sessionRestoreErrorExplanation": "Tab bạn đã lưu không thể khôi phục được.",
    "sessionRestoreErrorBackupInfo": "Chúng tôi đã sao lưu một bản sao dữ liệu của bạn tại đây: %l.", //%l will be replaced with a path to a file
    "sessionRestoreErrorLinkInfo": {
      "unsafeHTML": "Nếu lỗi này vẫn còn xảy ra, hãy tạo báo cáo về lỗi <a href=\"https://github.com/minbrowser/min\" target=\"_blank\">tại đây</a>."
    },
    /* pages/settings/index.html */
    "settingsPreferencesHeading": "Cài đặt",
    "settingsRestartRequired": "Bạn cần khởi chạy lại để áp dụng các thay đổi.",
    "settingsPrivacyHeading": "Lời chặn nội dung",
    "settingsContentBlockingLevel0": "Cho phép các quảng cáo và bộ theo dõi",
    "settingsContentBlockingLevel1": "Chặn các quảng cáo và bộ theo dõi bên thứ ba",
    "settingsContentBlockingLevel2": "Chặn các quảng cáo và bộ theo dõi",
    "settingsContentBlockingExceptions": "Quảng cáo vẫn còn cho phép trên trang web này:",
    "settingsBlockScriptsToggle": "Chặn mã script",
    "settingsBlockImagesToggle": "Chặn ảnh",
    "settingsBlockedRequestCount": {
      "unsafeHTML": "Đến hiện tại, Min đã chặn <strong></strong> quảng cáo và bộ theo dõi"
    },
    "settingsCustomBangs": "Lệnh tùy chỉnh",
    "settingsCustomBangsAdd": "Thêm mới",
    "settingsCustomBangsPhrase": "Cú pháp (Bắt buộc)",
    "settingsCustomBangsSnippet": "Mô tả (Tùy chọn)",
    "settingsCustomBangsRedirect": "Đường dẫn chuyển hướng (Bắt buộc)",
    "settingsCustomizeFiltersLink": "Tùy chỉnh bộ lọc",
    "settingsAppearanceHeading": "Giao diện",
    "settingsEnableDarkMode": "Bật chế độ tối:",
    "settingsDarkModeNever": "Không bao giờ",
    "settingsDarkModeNight": "Chỉ vào buổi tối",
    "settingsDarkModeAlways": "Luôn luôn",
    "settingsDarkModeSystem": "Theo cài đặt hệ thống",
    "settingsSiteThemeToggle": "Bật chủ đề trang",
    "settingsAdditionalFeaturesHeading": "Đặc tính nâng cao",
    "settingsUserscriptsToggle": "Bật mã script người dùng",
    "settingsShowDividerToggle": "Bật phân chia giữa các tab",
    "settingsSeparateTitlebarToggle": "Sử dụng title bả tách rời",
    "settingsAutoplayToggle": "Bật Autoplay", 
    "settingsOpenTabsInForegroundToggle": "Mở các tab mới ở nền trước",
    "settingsUserscriptsExplanation": {
      "unsafeHTML": "Mã script người dùng có thể cho bạn thay đổi hành vi trang web - <a href=\"https://github.com/minbrowser/min/wiki/userscripts\">Xem thêm</a>."
    },
    "settingsUserAgentToggle": "Sử dụng tác nhân người dùng tùy chỉnh",
    "settingsUpdateNotificationsToggle": "Tự động kiểm tra cập nhật",
    "settingsUsageStatisticsToggle": {
      "unsafeHTML": "Gửi thống kê sử dụng (<a href=\"https://github.com/minbrowser/min/blob/master/docs/statistics.md\">Xem thêm</a>)"
    },
    "settingsStartupOptions": null, //missing translation
    "settingsStartupCreateTask": null, //missing translation
    "settingsStartupNewTaskandBackground": null, //missing translation
    "settingsStartupNewTaskOnly": null, //missing translation
    "settingsSearchEngineHeading": "Công cụ tìm kiếm",
    "settingsDefaultSearchEngine": "Chọn công cụ tìm kiếm mặc định:",
    "settingsDDGExplanation": "Đặt DuckDuckGo thành công cụ tìm kiếm mặc định để xem câu trả lời ngay trong thanh tìm kiếm.",
    "customSearchEngineDescription": "Thay thế thuật ngữ tìm kiếm bằng with %s",
    "settingsKeyboardShortcutsHeading": "Phím tắt",
    "settingsKeyboardShortcutsHelp": "Sử dụng dấu phẩy để phân tách phím tắt khác nhau.",
    "settingsProxyHeading": "Proxy",
    "settingsNoProxy": "No Proxy",
    "settingsManualProxy": "Cấu hình thủ công",
    "settingsAutomaticProxy": "Cấu hình tự động",
    "settingsProxyRules": "Quy tắc proxy:",
    "settingsProxyBypassRules": "Không cấu hình proxy cho:",
    "settingsProxyConfigurationURL": "Cấu hình URL",
    /* app menu */
    "appMenuFile": "Tệp",
    "appMenuNewTab": "Tab Mới",
    "appMenuDuplicateTab": "Nhân bản Tab",
    "appMenuNewPrivateTab": "Tab riêng tư mới",
    "appMenuNewTask": "Tác vụ mới",
    "appMenuSavePageAs": "Lưu trang thành",
    "appMenuPrint": "In",
    "appMenuEdit": "Sửa",
    "appMenuUndo": "Hoàn tác",
    "appMenuRedo": "Làm lại",
    "appMenuCut": "Cắt",
    "appMenuCopy": "Sao chép",
    "appMenuPaste": "Dán",
    "appMenuSelectAll": "Chọn tất cả",
    "appMenuFind": "Tìm kiếm trong trang",
    "appMenuView": "Xem",
    "appMenuZoomIn": "Phóng to",
    "appMenuZoomOut": "Thu nhỏ",
    "appMenuActualSize": "Cỡ thường",
    "appMenuFullScreen": "Toàn màn hình", //on some platforms, this string is replaced with one built-in to the OS
    "appMenuFocusMode": "Chế độ tập trung",
    "appMenuBookmarks": "Trang đã đánh dấu",
    "appMenuHistory": "Lịch sử",
    "appMenuDeveloper": "Phát triển",
    "appMenuReloadBrowser": "Tải lại trình duyệt",
    "appMenuInspectBrowser": "Mở bộ kiểm tra cho trình duyệt",
    "appMenuInspectPage": "Mở bộ kiểm tra cho trang",
    "appMenuWindow": "Cửa sổ",
    "appMenuMinimize": "Thu nhỏ",
    "appMenuClose": "Đóng",
    "appMenuAlwaysOnTop": "Luôn hiện trên đầu",
    "appMenuHelp": "Trợ giúp",
    "appMenuKeyboardShortcuts": "Phím tắt",
    "appMenuReportBug": "Báo cáo lỗi",
    "appMenuTakeTour": "Xem hướng dẫn",
    "appMenuViewGithub": "Xem trên GitHub",
    "appMenuAbout": "Giới thiệu về %n", //%n is replaced with app name
    "appMenuPreferences": "Cài đặt",
    "appMenuServices": "Dịch vụ",
    "appMenuHide": "Ẩn %n",
    "appMenuHideOthers": "Ẩn các mục khác",
    "appMenuShowAll": "Hiển thị tất cả",
    "appMenuQuit": "Thoát %n",
    "appMenuBringToFront": "Đưa tất cả trên trước",
    /* PDF Viewer */
    "PDFPageCounter": {
      "unsafeHTML": "trang <input type='text'/> của <span id='total'></span>"
    },
    /* Context Reader */
    "buttonReaderSettings": "Cài đặt chế độ đọc",
    "buttonReaderLightTheme": "Sáng",
    "buttonReaderSepiaTheme": "Sepia",
    "buttonReaderDarkTheme": "Tối",
    "openReaderView": "Luôn mở trong chế độ đọc",
    "autoRedirectBannerReader": "Luôn mở nội dung trong trang này ở chế độ đọc?",
    "buttonReaderRedirectYes": "Xác nhận",
    "buttonReaderRedirectNo": "Không",
    "articleReaderView": "Nội dung gốc",
    /* Download manager */
    "downloadCancel": "Hủy",
    "downloadStateCompleted": "Hoàn tất",
    "downloadStateFailed": "Thất bại",
    /* Update Notifications */
    "updateNotificationTitle": "Phiên bản mới cho Min có sẵn",
    /* Autofill settings */
    "settingsPasswordAutoFillHeadline": "Tự động điền mật khẩu",
    "settingsSelectPasswordManager": "Chọn trình quản lý mật khẩu",
    "keychainViewPasswords": "Xem mật khẩu đã lưu",
    /* Password manager setup */
    "passwordManagerSetupHeading": "Hoàn thành cài đặt tại %p để sử dụng chức năng tự động điền",
    "passwordManagerSetupStep1": {
      "unsafeHTML": "Đầu tiên, <a id='password-manager-setup-link'></a> và cài đặt vào thiết bị của bạn."
    },
    "passwordManagerInstallerSetup": {
      "unsafeHTML": "Tải <a id='password-manager-setup-link-installer'></a> và kéo công cụ vào khung bên dưới:"
    },
    "passwordManagerSetupLink": "tải công cụ CLI của %p",
    "passwordManagerSetupLinkInstaller": "%p CLI installer",
    "passwordManagerSetupStep2": "Sau đó kéo và thả vào khung bên dưới:",
    "passwordManagerSetupDragBox": "Kéo vào đây",
    "passwordManagerSetupInstalling": "Đang cài đặt...",
    "passwordManagerBitwardenSignIn": "Để liên kết với tài khoản Bitwarden, truy cập vault.bitwarden.com/#/settings/account, cuộn xuống cuối, sau đó chọn \"View API Key\". Sau đó copy và dán giá thông số vào trường bên dưới.",
    "passwordManagerSetupSignIn": "Đăng nhập vào trình quản lý mật khẩu của bạn để bắt đầu sử dụng tính năng tự động điền. Mật khẩu của bạn sẽ không được lưu trữ trong Min",
    "disableAutofill": "Tắt tính năng tự động điền",
    "passwordManagerSetupUnlockError": "Mở khóa kho mật khẩu thất bại: ",
    "passwordManagerSetupRetry": "Vui lòng xác nhận bạn đã sử dụng đúng file và mật khẩu. Bạn có thể thử lại bằng cách kéo thả công cụ vào đây.",
    "passwordManagerUnlock": "Nhập mật khẩu tổng của %p để mở khóa kho mật khẩu",
    /* Password save bar */
    "passwordCaptureSavePassword": "Lưu mật khẩu tại %s?",
    "passwordCaptureSave": "Lưu mật khẩu",
    "passwordCaptureDontSave": "Không lưu",
    "passwordCaptureNeverSave": "Không bao giờ lưu mật khẩu",
    /* Password viewer */
    "savedPasswordsHeading": "Mật khẩu đã lưu",
    "savedPasswordsEmpty": "Không có mật khẩu lưu trước",
    "savedPasswordsNeverSavedLabel": "Không bao giờ",
    "deletePassword": "Xóa mật khẩu tại %s?",
    /* Dialogs */
    "loginPromptTitle": "Đăng nhập vào %h (%r)",
    "dialogConfirmButton": "Xác nhận",
    "dialogSkipButton": "Hủy",
    "username": "Username",
    "email": "Email",
    "password": "Password",
    "secretKey": "Secret key",
    "openExternalApp": "Mở trong \\\"%s\\\"?",
    "clickToCopy": "Bấm để sao chép",
    "copied": "Đã sao chép"
  }
}