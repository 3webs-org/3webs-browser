declare module 'electron-as-browser/control' {
    export function sendEnterURL(url: string): void;
    export function sendChangeURL(url: string): void;
    export function sendGoBack(): void;
    export function sendGoForward(): void;
    export function sendReload(): void;
    export function sendStop(): void;
    export function sendNewTab(urls?: { 0?: string } | undefined): void;
    export function sendSwitchTab(index: number): void;
    export function sendCloseTab(index: number): void;
}
