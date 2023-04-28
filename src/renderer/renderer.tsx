import React from 'react';
import ReactDOM from 'react-dom/client';
import cx from 'classnames';
import { KeyboardEventHandler, ChangeEventHandler, MouseEventHandler } from 'react';
import { EventEmitter } from 'events';
import { v4 as uuid } from 'uuid';
import { WebContents, ipcRenderer } from 'electron';

let tabs: { [key: number]: WebContents } = {};
let tabData: { [key: number]: {
	url: string;
	title: string;
	favicons: string[];
	focused: boolean;
	loading: boolean;
	loadingMainFrame: boolean;
	waitingForResponse: boolean;
	canGoBack: boolean;
	canGoForward: boolean;
	allowableOffsetMinus: number;
	allowableOffsetPlus: number;
	audioMuted: boolean;
	currentlyAudible: boolean;
	zoomFactor: number;
	zoomLevel: number;
	beingCaptured: boolean;
	devToolsOpened: boolean;
	devToolsFocused: boolean;
	offscreen: boolean;
	painting: boolean;
	userAgent: string;
} } = {};
let activeTab: number = 0;

async function newTab() {
	let key = uuid();
	ipcRenderer.send('new-tab', key);
	return await new Promise((resolve, reject) => {
		ipcRenderer.once('new-tab-created', (event, key2, id) => {
			if (key !== key2) return;
			resolve(id);
		});
		ipcRenderer.once('new-tab-error', (event, key2, error) => {
			if (key !== key2) return;
			reject(error);
		});
	});
}

async function selectTab(id: number) {
	let key = uuid();
	ipcRenderer.send('select-tab', key, id);
	return await new Promise<void>((resolve, reject) => {
		ipcRenderer.once(`selected-tab-${id}`, (event, key2) => {
			if (key !== key2) return;
			resolve();
		});
		ipcRenderer.once(`select-tab-error-${id}`, (event, key2, error) => {
			if (key !== key2) return;
			reject(error);
		});
	});
}

ipcRenderer.on('update-contents', (event, id, data) => {
	if (!tabs[id]) {
		// Make fake WebContents, that acts like a real one
		// TODO: Enforce concurrency with nonces
		tabs[id] = (new EventEmitter()) as WebContents;
		tabData[id] = {} as any;
		tabs[id].loadURL = async (url, options) => {
			let key = uuid();
			ipcRenderer.send('load-url', id, key, url, options);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`loaded-url-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`load-url-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		};
		tabs[id].loadFile = async (url, options) => {
			let key = uuid();
			ipcRenderer.send('load-file', id, key, url, options);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`loaded-file-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`load-file-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].downloadURL = async (url) => {
			let key = uuid();
			ipcRenderer.send('download-url', id, key, url);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`downloaded-url-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`download-url-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].getTitle = () => {
			return tabData[id].title;
		}
		tabs[id].isDestroyed = () => {
			return false;
		}
		tabs[id].close = async (opts) => {
			let key = uuid();
			ipcRenderer.send('close-tab', id, key, opts);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`closed-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					delete tabs[id];
					resolve();
				});
				ipcRenderer.once(`close-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].focus = async () => {
			let key = uuid();
			ipcRenderer.send('focus-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`focused-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					tabData[id].focused = true;
					resolve();
				});
				ipcRenderer.once(`focus-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].isFocused = () => {
			return tabData[id].focused;
		}
		tabs[id].isLoading = () => {
			return tabData[id].loading;
		}
		tabs[id].isLoadingMainFrame = () => {
			return tabData[id].loadingMainFrame;
		}
		tabs[id].isWaitingForResponse = () => {
			return tabData[id].waitingForResponse;
		}
		tabs[id].stop = async () => {
			let key = uuid();
			ipcRenderer.send('stop-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`stopped-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`stop-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].reload = async () => {
			let key = uuid();
			ipcRenderer.send('reload-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`reloaded-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`reload-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].reloadIgnoringCache = async () => {
			let key = uuid();
			ipcRenderer.send('reload-ignoring-cache-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`reloaded-ignoring-cache-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`reload-ignoring-cache-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].canGoBack = () => {
			return tabData[id].canGoBack;
		}
		tabs[id].canGoForward = () => {
			return tabData[id].canGoForward;
		}
		tabs[id].canGoToOffset = (offset) => {
			return offset >= tabData[id].allowableOffsetMinus && offset <= tabData[id].allowableOffsetPlus;
		}
		tabs[id].clearHistory = async () => {
			let key = uuid();
			ipcRenderer.send('clear-history-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`cleared-history-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`clear-history-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].goBack = async () => {
			let key = uuid();
			ipcRenderer.send('go-back-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`went-back-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`go-back-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].goForward = async () => {
			let key = uuid();
			ipcRenderer.send('go-forward-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`went-forward-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`go-forward-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].goToIndex = async (index) => {
			let key = uuid();
			ipcRenderer.send('go-to-index-tab', id, key, index);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`went-to-index-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`go-to-index-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].goToOffset = async (offset) => {
			let key = uuid();
			ipcRenderer.send('go-to-offset-tab', id, key, offset);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`went-to-offset-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`go-to-offset-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].isCrashed = () => {
			return false;
		}
		tabs[id].forcefullyCrashRenderer = async () => {
			throw new Error('Not implemented: forcefullyCrashRenderer');
		}
		tabs[id].setUserAgent = async (userAgent) => {
			let key = uuid();
			ipcRenderer.send('set-user-agent-tab', id, key, userAgent);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`set-user-agent-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					tabData[id].userAgent = userAgent;
					resolve();
				});
				ipcRenderer.once(`set-user-agent-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].getUserAgent = () => {
			return tabData[id].userAgent;
		}
		tabs[id].insertCSS = async (css, options) => {
			let key = uuid();
			ipcRenderer.send('insert-css-tab', id, key, css, options);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`inserted-css-tab-${id}`, (event, key2, key3) => {
					if (key !== key2) return;
					resolve(key3);
				});
				ipcRenderer.once(`insert-css-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].removeInsertedCSS = async (key3) => {
			let key = uuid();
			ipcRenderer.send('remove-inserted-css-by-key-tab', id, key, key3);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`removed-inserted-css-by-key-tab-${id}`, (event, key2, key3) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`remove-inserted-css-by-key-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].executeJavaScript = async (code, userGesture) => {
			let key = uuid();
			ipcRenderer.send('execute-javascript-tab', id, key, code, userGesture);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`executed-javascript-tab-${id}`, (event, key2, result) => {
					if (key !== key2) return;
					resolve(result);
				});
				ipcRenderer.once(`execute-javascript-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].executeJavaScriptInIsolatedWorld = async (worldId, scripts, userGesture) => {
			let key = uuid();
			ipcRenderer.send('execute-javascript-in-isolated-world-tab', id, key, worldId, scripts, userGesture);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`executed-javascript-in-isolated-world-tab-${id}`, (event, key2, result) => {
					if (key !== key2) return;
					resolve(result);
				});
				ipcRenderer.once(`execute-javascript-in-isolated-world-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].setIgnoreMenuShortcuts = async (ignore) => {
			let key = uuid();
			ipcRenderer.send('set-ignore-menu-shortcuts-tab', id, key, ignore);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`set-ignore-menu-shortcuts-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`set-ignore-menu-shortcuts-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].setWindowOpenHandler = async (handler) => {
			throw new Error('Not implemented: setWindowOpenHandler');
		}
		tabs[id].setAudioMuted = async (muted) => {
			let key = uuid();
			ipcRenderer.send('set-audio-muted-tab', id, key, muted);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`set-audio-muted-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					tabData[id].audioMuted = muted;
					resolve();
				});
				ipcRenderer.once(`set-audio-muted-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].isAudioMuted = () => {
			return tabData[id].audioMuted;
		}
		tabs[id].isCurrentlyAudible = () => {
			return tabData[id].currentlyAudible;
		}
		tabs[id].setZoomFactor = async (factor) => {
			let key = uuid();
			ipcRenderer.send('set-zoom-factor-tab', id, key, factor);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`set-zoom-factor-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					tabData[id].zoomFactor = factor;
					resolve();
				});
				ipcRenderer.once(`set-zoom-factor-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].getZoomFactor = () => {
			return tabData[id].zoomFactor;
		}
		tabs[id].setZoomLevel = async (level) => {
			let key = uuid();
			ipcRenderer.send('set-zoom-level-tab', id, key, level);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`set-zoom-level-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					tabData[id].zoomLevel = level;
					resolve();
				});
				ipcRenderer.once(`set-zoom-level-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].getZoomLevel = () => {
			return tabData[id].zoomLevel;
		}
		tabs[id].setVisualZoomLevelLimits = async (minimumLevel, maximumLevel) => {
			let key = uuid();
			ipcRenderer.send('set-visual-zoom-level-limits-tab', id, key, minimumLevel, maximumLevel);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`set-visual-zoom-level-limits-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`set-visual-zoom-level-limits-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].undo = async () => {
			let key = uuid();
			ipcRenderer.send('undo-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`undo-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`undo-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].redo = async () => {
			let key = uuid();
			ipcRenderer.send('redo-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`redo-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`redo-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].cut = async () => {
			let key = uuid();
			ipcRenderer.send('cut-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`cut-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`cut-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].copy = async () => {
			let key = uuid();
			ipcRenderer.send('copy-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`copy-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`copy-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].copyImageAt = async (x, y) => {
			let key = uuid();
			ipcRenderer.send('copy-image-at-tab', id, key, x, y);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`copy-image-at-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`copy-image-at-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].paste = async () => {
			let key = uuid();
			ipcRenderer.send('paste-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`paste-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`paste-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].pasteAndMatchStyle = async () => {
			let key = uuid();
			ipcRenderer.send('paste-and-match-style-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`paste-and-match-style-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`paste-and-match-style-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].delete = async () => {
			let key = uuid();
			ipcRenderer.send('edit-delete-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`edit-deleted-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`edit-delete-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].selectAll = async () => {
			let key = uuid();
			ipcRenderer.send('select-all-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`select-all-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`select-all-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].unselect = async () => {
			let key = uuid();
			ipcRenderer.send('unselect-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`unselect-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`unselect-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].replace = async (text) => {
			let key = uuid();
			ipcRenderer.send('replace-tab', id, key, text);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`replace-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`replace-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].replaceMisspelling = async (text) => {
			let key = uuid();
			ipcRenderer.send('replace-misspelling-tab', id, key, text);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`replace-misspelling-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`replace-misspelling-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].insertText = async (text) => {
			let key = uuid();
			ipcRenderer.send('insert-text-tab', id, key, text);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`insert-text-tab-${id}`, (event, key2) => {
					if (key !== key2) return;
					resolve();
				});
				ipcRenderer.once(`insert-text-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].findInPage = (text, options) => {
			throw new Error('Not implemented: findInPage');
		}
		tabs[id].stopFindInPage = (action) => {
			throw new Error('Not implemented: stopFindInPage');
		}
		tabs[id].capturePage = async (rect) => {
			let key = uuid();
			ipcRenderer.send('capture-page-tab', id, key, rect);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`capture-page-tab-${id}`, (event, key2, image) => {
					if (key !== key2) return;
					resolve(image);
				});
				ipcRenderer.once(`capture-page-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].isBeingCaptured = () => {
			return tabData[id].beingCaptured;
		}
		tabs[id].getPrintersAsync = async () => {
			let key = uuid();
			ipcRenderer.send('get-printers-tab', id, key);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`get-printers-tab-${id}`, (event, key2, printers) => {
					if (key !== key2) return;
					resolve(printers);
				});
				ipcRenderer.once(`get-printers-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].print = (options, callback) => {
			let key = uuid();
			ipcRenderer.send('print-tab', id, key, options);
			ipcRenderer.once(`print-tab-${id}`, (event, key2) => {
				if (key !== key2) return;
				callback(true, null);
			});
			ipcRenderer.once(`print-tab-error-${id}`, (event, key2, error) => {
				if (key !== key2) return;
				callback(false, error);
			});
		}
		tabs[id].printToPDF = async (options) => {
			let key = uuid();
			ipcRenderer.send('print-to-pdf-tab', id, key, options);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`print-to-pdf-tab-${id}`, (event, key2, data) => {
					if (key !== key2) return;
					resolve(data);
				});
				ipcRenderer.once(`print-to-pdf-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].addWorkSpace = (workspace) => {
			throw new Error('Not implemented: addWorkSpace');
		}
		tabs[id].removeWorkSpace = (workspace) => {
			throw new Error('Not implemented: removeWorkSpace');
		}
		tabs[id].setDevToolsWebContents = (webContents) => {
			throw new Error('Not implemented: setDevToolsWebContents');
		}
		tabs[id].openDevTools = (options) => {
			let key = uuid();
			ipcRenderer.send('open-dev-tools-tab', id, key, options);
			// ignore response, hope it works
		}
		tabs[id].isDevToolsOpened = () => {
			return tabData[id].devToolsOpened;
		}
		tabs[id].isDevToolsFocused = () => {
			return tabData[id].devToolsFocused;
		}
		tabs[id].toggleDevTools = () => {
			let key = uuid();
			ipcRenderer.send('toggle-dev-tools-tab', id, key);
			// ignore response, hope it works
		}
		tabs[id].closeDevTools = () => {
			let key = uuid();
			ipcRenderer.send('close-dev-tools-tab', id, key);
			// ignore response, hope it works
		}
		tabs[id].inspectElement = (x, y) => {
			let key = uuid();
			ipcRenderer.send('inspect-element-tab', id, key, x, y);
			// ignore response, hope it works
		}
		tabs[id].inspectServiceWorker = () => {
			let key = uuid();
			ipcRenderer.send('inspect-service-worker-tab', id, key);
			// ignore response, hope it works
		}
		tabs[id].getAllSharedWorkers = () => {
			throw new Error('Not implemented: getAllSharedWorkers');
		}
		tabs[id].inspectServiceWorker = () => {
			let key = uuid();
			ipcRenderer.send('inspect-service-worker-tab', id, key);
			// ignore response, hope it works
		}
		tabs[id].send = (channel, ...args) => {
			ipcRenderer.send('send-tab', id, channel, ...args);
		}
		tabs[id].sendToFrame = (frameId, channel, ...args) => {
			ipcRenderer.send('send-to-frame-tab', id, frameId, channel, ...args);
		}
		tabs[id].postMessage = (message, targetOrigin, transfer) => {
			ipcRenderer.send('post-message-tab', id, message, targetOrigin, transfer);
		}
		tabs[id].enableDeviceEmulation = (parameters) => {
			throw new Error('Not implemented: enableDeviceEmulation');
		}
		tabs[id].disableDeviceEmulation = () => {
			throw new Error('Not implemented: disableDeviceEmulation');
		}
		tabs[id].sendInputEvent = (event) => {
			throw new Error('Not implemented: sendInputEvent');
		}
		tabs[id].beginFrameSubscription = (onlyDirty, callback = null) => {
			if (callback == null) {
				callback = onlyDirty;
				onlyDirty = false;
			}
			let key = uuid();
			ipcRenderer.send('begin-frame-subscription-tab', id, key, onlyDirty);
			ipcRenderer.on(`begin-frame-subscription-tab-${id}`, (event, key2, image, dirtyRect) => {
				if (key !== key2) return;
				(callback as any)(image, dirtyRect);
			});
			ipcRenderer.once(`begin-frame-subscription-tab-error-${id}`, (event, key2, error) => {
				if (key !== key2) return;
				throw error;
			});
		}
		tabs[id].endFrameSubscription = () => {
			let key = uuid();
			ipcRenderer.send('end-frame-subscription-tab', id, key);
			// ignore response, hope it works
		}
		tabs[id].startDrag = () => {
			throw new Error('Not implemented: startDrag');
		}
		tabs[id].savePage = async (fullPath, saveType) => {
			let key = uuid();
			ipcRenderer.send('save-page-tab', id, key, fullPath, saveType);
			return await new Promise((resolve, reject) => {
				ipcRenderer.once(`save-page-tab-${id}`, (event, key2, data) => {
					if (key !== key2) return;
					resolve(data);
				});
				ipcRenderer.once(`save-page-tab-error-${id}`, (event, key2, error) => {
					if (key !== key2) return;
					reject(error);
				});
			});
		}
		tabs[id].isOffscreen = () => {
			return tabData[id].offscreen;
		}
		tabs[id].startPainting = () => {
			throw new Error('Not implemented: startPainting');
		}
		tabs[id].stopPainting = () => {
			throw new Error('Not implemented: stopPainting');
		}
		tabs[id].isPainting = () => {
			return tabData[id].painting;
		}
		tabs[id].setFrameRate = (fps) => {
			throw new Error('Not implemented: setFrameRate');
		}
		tabs[id].getFrameRate = () => {
			throw new Error('Not implemented: getFrameRate');
		}
		tabs[id].invalidate = () => {
			let key = uuid();
			ipcRenderer.send('invalidate-tab', id, key);
			// ignore response, hope it works
		}
		tabs[id].getWebRTCIPHandlingPolicy = () => {
			throw new Error('Not implemented: getWebRTCIPHandlingPolicy');
		}
		tabs[id].setWebRTCIPHandlingPolicy = (policy) => {
			throw new Error('Not implemented: setWebRTCIPHandlingPolicy');
		}
		tabs[id].getMediaSourceId = (requestWebContents) => {
			throw new Error('Not implemented: getMediaSourceId');
		}
		tabs[id].getProcessId = () => {
			throw new Error('Not implemented: getProcessId');
		}
		tabs[id].getOSProcessId = () => {
			throw new Error('Not implemented: getOSProcessId');
		}
		tabs[id].takeHeapSnapshot = (filePath) => {
			throw new Error('Not implemented: takeHeapSnapshot');
		}
		tabs[id].getBackgroundThrottling = () => {
			throw new Error('Not implemented: getBackgroundThrottling');
		}
		tabs[id].setBackgroundThrottling = (allowed) => {
			let key = uuid();
			ipcRenderer.send('set-background-throttling-tab', id, key, allowed);
			// ignore response, hope it works
		}
		tabs[id].getType = () => {
			return "browserView";
		}
		tabs[id].setImageAnimationPolicy = (policy) => {
			throw new Error('Not implemented: setImageAnimationPolicy');
		}
	}
	for (let key of Object.keys(data)) {
		(tabs as any)[id][key] = data[key];
	}
});

ipcRenderer.on('emit-contents', (event, id, name, ...args) => {
	if (tabs[id]) {
		tabs[id].emit(name, ...args);
	}
	// Handle special events, to update tabData
	if (name === 'did-finish-load') {
		tabData[id].loading = false;
		tabData[id].loadingMainFrame = false;
	}
	if (name === 'did-fail-load') {
		tabData[id].loading = false;
		tabData[id].loadingMainFrame = false;
	}
	if (name === 'did-fail-provisional-load') {
		tabData[id].loading = false;
		tabData[id].loadingMainFrame = false;
	}
	if (name === 'did-start-loading') {
		tabData[id].loading = true;
		tabData[id].loadingMainFrame = true;
	}
	if (name === 'did-stop-loading') {
		tabData[id].loading = false;
		tabData[id].loadingMainFrame = false;
	}
	if (name === 'will-navigate') {
		if (!args[3]) {
			tabData[id].loading = true;
		}
	}
	if (name === 'did-frame-navigate') {
		tabData[id].loading = false;
	}
	if (name === 'page-title-updated') {
		tabData[id].title = args[0];
	}
	if (name === 'page-favicon-updated') {
		tabData[id].favicons = args[0];
	}
	if (name == 'blur') {
		tabData[id].focused = false;
	}
	if (name == 'focus') {
		tabData[id].focused = true;
	}
});

ipcRenderer.on('update-tab-data', (event, id: number, data) => {
	for (let key of Object.keys(data)) {
		(tabData[id] as any)[key] = data[key];
	}
});

ipcRenderer.on('set-active-tab', (event, id: number) => {
	activeTab = id;
});

const Css = () => {
	const css = `
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		background: #eef2f6;
		font-size: 14px;
	}
	.container {
		height: 100vh;
		padding-top: 10px;
		overflow: hidden;
		user-select: none;
	}
	.tabs {
		display: flex;
		align-items: center;
		height: 32px;
		margin-left: 90px;
		margin-right: 32px;
		overflow: auto;
	}
	.tab {
		flex: 1 1 0;
		display: flex;
		align-items: center;
		padding: 0 10px 0 15px;
		max-width: 185px;
		border-left: 1px solid #999;
		cursor: default;
	}
	.tab:first-child {
		border-left: none;
	}
	.tab:last-of-type {
		border-right: 1px solid #999;
	}
	.tab:not(.active):hover .title {
		color: #999;
	}
	.tab.active {
		height: 100%;
		border-radius: 4px 4px 0px 0px;
		border-left-color: transparent;
		border-right-color: transparent;
		background: #fff;
	}
	.tab.active + .tab {
		border-left: none;
	}
	.title {
		flex-grow: 1;
		display: flex;
		margin: 0 5px 0 10px;
		overflow: hidden;
	}
	.title-content {
		flex-shrink: 0;
	}
	.close {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		padding: 5px;
		margin-top: 2px;
		border-radius: 100%;
		font-size: 10px;
	}
	.close:hover {
		background: #ddd;
	}
	.bars {
		padding: 10px 18px;
		background: #fff;
	}
	.bars .address {
		width: 100%;
		height: 32px;
		padding: 4px 11px;
		border: 1px solid #d9d9d9;
		border-radius: 4px;
		background: #eceff2;
		outline: none;
		font-size: 12px;
	}
	.bars .address:focus {
		background: #fff;
	}
	.bar {
		display: flex;
		align-items: center;
	}
	.actions {
		flex-shrink: 0;
		display: flex;
		justify-content: space-evenly;
		width: 118px;
		margin-right: 18px;
	}
	.action {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 36px;
		height: 36px;
		border-radius: 100%;
		color: #333;
		font-size: 16px;
	}
	.action.disabled {
		color: #ccc;
	}
	.action:not(.disabled):hover {
		background: #eee;
	}
	`;
	return <style>
	{css}
	</style>;
}

const IconLoading = () => {
	return <svg
	viewBox="0 0 1024 1024"
	focusable="false"
	className="anticon-spin"
	data-icon="loading"
	width="1em"
	height="1em"
	fill="currentColor"
	aria-hidden="true"
	>
	<path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" />
	</svg>;
}

const IconClose = () => {
	return <svg
	viewBox="64 64 896 896"
	focusable="false"
	data-icon="close"
	width="1em"
	height="1em"
	fill="currentColor"
	aria-hidden="true"
	>
	<path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
	</svg>;
}

const IconPlus = () => {
	return <svg
	viewBox="64 64 896 896"
	focusable="false"
	data-icon="plus"
	width="1em"
	height="1em"
	fill="currentColor"
	aria-hidden="true"
	>
	<path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
	<path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
	</svg>
};

const IconReload = () => {
	return <svg
	viewBox="64 64 896 896"
	focusable="false"
	data-icon="reload"
	width="1em"
	height="1em"
	fill="currentColor"
	aria-hidden="true"
	>
	<path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z" />
	</svg>
};

const IconLeft = () => {
	return <svg
	viewBox="64 64 896 896"
	focusable="false"
	data-icon="left"
	width="1em"
	height="1em"
	fill="currentColor"
	aria-hidden="true"
	>
	<path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" />
	</svg>
};

const IconRight = () => {
	return <svg
	viewBox="64 64 896 896"
	focusable="false"
	data-icon="right"
	width="1em"
	height="1em"
	fill="currentColor"
	aria-hidden="true"
	>
	<path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" />
	</svg>
};

function Control() {
	const onUrlChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		// Sync to tab config
		const v = (e.target as HTMLInputElement).value;
		tabs[activeTab].loadURL(v);
	};
	const onPressEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key !== 'Enter') return;
		const v = (e.target as HTMLInputElement).value.trim();
		if (!v) return;
		
		let href = v;
		if (!/^.*?:\/\//.test(v)) {
		href = `http://${v}`;
	}
	tabs[activeTab].loadURL(href);
};
const close = (e: Parameters<MouseEventHandler<HTMLDivElement>>[0], id: number) => {
	e.stopPropagation();
	tabs[id].close();
};
const newTab = () => {
	newTab();
};
const switchTab = (id: number) => {
	switchTab(id);
};
const { url, canGoBack, canGoForward, loading } = tabData[activeTab] || {};

return (
	<div className="container">
	<Css />
	<div className="tabs">
	<>
	{Object.keys(tabs).map(e => parseInt(e)).map((id) => {
		const { isLoading } = tabs[id] || {};
		const { title, favicons } = tabData[id] || {};
		return (
			<div
			key={id}
			className={cx('tab', { active: id === activeTab })}
			onClick={() => switchTab(id)}
			>
			{isLoading ? <IconLoading /> : !!favicons[0] && <img src={favicons[0]} width="16" alt="" />}
			<div className="title">
			<div className="title-content">{title}</div>
			</div>
			<div className="close" onClick={e => close(e, id)}>
			<IconClose />
			</div>
			</div>
			);
		})}
		<span style={{ marginLeft: 10 }} onClick={newTab}>
		<IconPlus />
		</span>
		</>
		</div>
		<div className="bars">
		<div className="bar address-bar">
		<div className="actions">
		<div
		className={cx('action', { disabled: !canGoBack })}
		onClick={canGoBack ? tabs[activeTab].goBack : undefined}
		>
		<IconLeft />
		</div>
		<div
		className={cx('action', { disabled: !canGoForward })}
		onClick={canGoForward ? tabs[activeTab].goForward : undefined}
		>
		<IconRight />
		</div>
		<div className={cx('action')} onClick={loading ? tabs[activeTab].stop : tabs[activeTab].reload}>
		{loading ? <IconClose /> : <IconReload />}
		</div>
		</div>
		<input
		className="address"
		value={url || ''}
		onChange={onUrlChange}
		onKeyDown={onPressEnter}
		/>
		</div>
		</div>
		</div>
		);
	}
	
	// eslint-disable-next-line no-undef
	const rootDiv = document.createElement('div');
	document.body.appendChild(rootDiv);
	const root = ReactDOM.createRoot(rootDiv);
	root.render(<Control />);
	