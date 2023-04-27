declare module 'electron-as-browser';

type BrowserLikeWindow = {
    new (options: {
        controlHeight: number;
        controlPanel: string;
        startPage: string;
        blankTitle: string;
        debug: boolean;
    }): BrowserLikeWindow;
    on(event: 'closed', callback: () => void): void;
    loadURL(url: string): void;
    close(): void;
    show(): void;
    hide(): void;
    toggleDevTools(): void;
    send(channel: string, ...args: any[]): void;

    on(event: 'message', callback: (channel: string, ...args: any[]) => void): void;
    on(event: 'ready', callback: () => void): void;
    on(event: 'closed', callback: () => void): void;
    on(event: 'devtools-opened', callback: () => void): void;
    on(event: 'devtools-closed', callback: () => void): void;
    on(event: 'devtools-focused', callback: () => void): void;
    on(event: 'controlpanel-ready', callback: () => void): void;
    on(event: 'controlpanel-closed', callback: () => void): void;
    on(event: 'controlpanel-focused', callback: () => void): void;
    on(event: 'controlpanel-blurred', callback: () => void): void;
    on(event: 'controlpanel-devtools-opened', callback: () => void): void;
    on(event: 'controlpanel-devtools-closed', callback: () => void): void;
    on(event: 'controlpanel-devtools-focused', callback: () => void): void;
    on(event: 'controlpanel-devtools-blurred', callback: () => void): void;
    on(event: 'controlpanel-message', callback: (channel: string, ...args: any[]) => void): void;
    on(event: 'controlpanel-ready', callback: () => void): void;

    once(event: 'message', callback: (channel: string, ...args: any[]) => void): void;
    once(event: 'ready', callback: () => void): void;
    once(event: 'closed', callback: () => void): void;
    once(event: 'devtools-opened', callback: () => void): void;
    once(event: 'devtools-closed', callback: () => void): void;
    once(event: 'devtools-focused', callback: () => void): void;
    once(event: 'controlpanel-ready', callback: () => void): void;
    once(event: 'controlpanel-closed', callback: () => void): void;
    once(event: 'controlpanel-focused', callback: () => void): void;
    once(event: 'controlpanel-blurred', callback: () => void): void;
    once(event: 'controlpanel-devtools-opened', callback: () => void): void;
    once(event: 'controlpanel-devtools-closed', callback: () => void): void;
    once(event: 'controlpanel-devtools-focused', callback: () => void): void;
    once(event: 'controlpanel-devtools-blurred', callback: () => void): void;
    once(event: 'controlpanel-message', callback: (channel: string, ...args: any[]) => void): void;
    once(event: 'controlpanel-ready', callback: () => void): void;
}
