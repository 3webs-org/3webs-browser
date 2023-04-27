import React from 'react';
import ReactDOM from 'react-dom/client';
import cx from 'classnames';
import useConnect from 'electron-as-browser/useConnect';
import * as action from 'electron-as-browser/control';
import { KeyboardEventHandler, ChangeEventHandler, MouseEventHandler } from 'react';

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

const IconLoading = () => (
  <svg
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
  </svg>
);

const IconClose = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="close"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
  </svg>
);

const IconPlus = () => (
  <svg
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
);

const IconReload = () => (
  <svg
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
);

const IconLeft = () => (
  <svg
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
);

const IconRight = () => (
  <svg
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
);

function Control() {
  const { tabs, tabIDs, activeID } = useConnect();

  const { url, canGoForward, canGoBack, isLoading } = tabs[activeID] || {};

  const onUrlChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    // Sync to tab config
    const v = (e.target as HTMLInputElement).value;
    action.sendChangeURL(v);
  };
  const onPressEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key !== 'Enter') return;
    const v = (e.target as HTMLInputElement).value.trim();
    if (!v) return;

    let href = v;
    if (!/^.*?:\/\//.test(v)) {
      href = `http://${v}`;
    }
    action.sendEnterURL(href);
  };
  const close = (e: Parameters<MouseEventHandler<HTMLDivElement>>[0], id: number) => {
    e.stopPropagation();
    action.sendCloseTab(id);
  };
  const newTab = () => {
    action.sendNewTab();
  };
  const switchTab = (id: number) => {
    action.sendSwitchTab(id);
  };

  return (
    <div className="container">
      <Css />
      <div className="tabs">
        <>
          {tabIDs.map((id: number) => {
            // eslint-disable-next-line no-shadow
            const { title, isLoading, favicon } = tabs[id] || {};
            return (
              <div
                key={id}
                className={cx('tab', { active: id === activeID })}
                onClick={() => switchTab(id)}
              >
                {isLoading ? <IconLoading /> : !!favicon && <img src={favicon} width="16" alt="" />}
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
              onClick={canGoBack ? action.sendGoBack : undefined}
            >
              <IconLeft />
            </div>
            <div
              className={cx('action', { disabled: !canGoForward })}
              onClick={canGoForward ? action.sendGoForward : undefined}
            >
              <IconRight />
            </div>
            <div className={cx('action')} onClick={isLoading ? action.sendStop : action.sendReload}>
              {isLoading ? <IconClose /> : <IconReload />}
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