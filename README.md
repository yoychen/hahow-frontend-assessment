# hahow-frontend-assessment

## 如何執行

本專案使用 [Create React App](https://github.com/facebook/create-react-app) 來建置 React 的開發環境，以省去花時間在設定 webpack、babel 等開發環境上，更多如何開發、建置專案的細節請看 [CONTRIBUTING.md](./CONTRIBUTING.md)。

由於 Create React App 提供的基礎配置稍微有些簡陋，缺少開發時常用的 Hot ReLoad 以及 eslint 規則等設定，本專案使用 react 社群中提供的第三方套件 `react-app-rewired` 來做到無需 eject 內部的設定檔來進行額外 webpack 邏輯的調整與擴充，開發者一樣是使用 Create React App 所提供的指令進行專案的開發與建置

### Quick Start

```shell
npm i
npm start
```

## 架構規劃

### 目錄結構設計

主要實作的程式碼位於 `/src` 目錄中。

- `/api`
  - 包裝專案中需要使用的外部 api 呼叫
  - `$` 結尾是 RxJS 的 Observable 資料型態的命名慣例
- `/components`
  - React components
  - 負責專案的畫面的呈現與使用者交互的處理
- `/pages`
  - Page-level React components
  - 負責頁面層級的畫面渲染與 routing 相關邏輯的處理
- `/slices`
  - Redux 相關的邏輯 (action creators、reducers、epics)
  - 負責專案的狀態管理與狀態相關的副作用邏輯描述
- `/utils`
  - helper 方法
- `/tests`
  - `/components`
    - React components 的測試
  - `/slices`
    - redusers 與 epics 的測試

### Components

盡量以 dump components 的策略 ([Dumb Components and Smart Components](https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43)) 撰寫專案的 React components，將應用的狀態與狀態相關的邏輯抽離，僅專注於定義資料的畫面呈現與使用者交互的處理。

本專案 Smart Components 的定義：使用 `react-redux` 的 `connect()` 所定義的 HOC 節點。

### Redux

本專案使用 Redux 來管理應用的狀態，開發上有別於以往以 Redux 中的角色做為檔案的切分方式 (如 `/reducers`, `/actions`)，本專案使用資源的類型作為檔案的切分方式 (見 `/slices` 目錄)。

- 使用 redux-toolkit 的 `createSlice()` 來定義不同資源的 reducer 與 action creators
  - 透過 redux-toolkit 提供的 `createReducer()`，reducer 可用 mutation 的方式描述狀態的變化，並能保持狀態之間仍是 immutable (背後原理是使用 `immer.js`，詳見 [Redux Toolkit - createReducer()](https://redux-toolkit.js.org/api/createReducer#direct-state-mutation))
- 每個資源檔案皆會 export 出該資源的 root reducer 與 action creators

### 副作用/非同步邏輯

本專案使用 [`redux-observable`](https://redux-observable.js.org/) 來描述狀態相關的非同步邏輯，與常見的 `redux-thunk` 的 imperative 開發方式相比，透過使用 RxJS 提供的高抽象層級的 API，以 declarative 的方式定義非同步邏輯，可以使程式碼更佳簡潔並可以更優雅處理複雜的非同步行為。

### Routing 策略

### 測試策略

- 一個 test case 只測試一個關注點，各個 test case 皆可以獨立執行
- 使用 AAA (Arrange, Act & Assert) 模式描述 test case
- 使用工廠方法建立待測項目，避免濫用全域狀態與 beforeEach
- 使用專屬的 data-testid 定位元素，而非直接相依 CSS selector，以避免重構時若改動到 CSS 結構而影響測試穩定度
- 盡量使用 stub 來隔離外部相依，並盡量以測試待測對象的外部行為與狀態為主，以避免過度濫用 mock 而造成 overspecification

## 第三方 library 的使用及功能簡介
