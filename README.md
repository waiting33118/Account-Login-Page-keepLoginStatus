# 手刻登入頁面

使用 Node.js + Express + Express-handlebars + Bootstrap 4 所打造的登入頁面

## 專案畫面

![專案畫面](/public/images/project_screenshot.png)

## 安裝&使用

#### 下載專案

```
git clone https://github.com/waiting33118/Account-Login-Page.git
```

#### 安裝 Package

```
npm install
```

#### 使用 nodemon 啟動伺服器

```
npm run dev
```

#### 或正常啟動

```
npm start
```

#### 伺服器會啟動在本地端 port 3000

```
The server is running on http://127.0.0.1:3000
```

## 測試用帳號密碼

```
帳號
密碼

tony@stark.com
iamironman

captain@hotmail.com
icandothisallday

peter@parker.com
enajyram

natasha@gamil.com
*parol#@$!

nick@shield.com
password
```

## 環境建置

- Node.js v12.16.3 -執行環境
- Express V4.17.1 -框架
- Express-Handlebars V4.0.4 -模板引擎
- Body-Parser V1.19.0 -解析網址 request 內容

## 產品功能

- 完成登入頁面、帳密檢測、跟路由設定
- 使用者輸入帳密：email & password
- 如果找不到 username，或是 password 錯誤，介面會顯示 "Username/Password 錯誤"
- 如果 username + password 組合正確，使用者就能成功登入，並導向自己的 welcome page，在此頁面上會顯示登入使用者的 firstName。

## Contributor

- [x] TonyChung
