## 絵文字 Info

![screenshot](images/screenshot.webp)

Misskey サーバーの絵文字情報を取得するツールです。
URL と絵文字名を入力して検索すると情報が出てきます。

### ダウンロード

以下の Releases ページでダウンロードできます。<br>
https://github.com/9min-packup/emojiinfo/releases

対応している OS は Windows, MacOS, Linux。32bit OS には対応していません。

Electron を使用しているためアプリのファイルサイズは大きめですがご容赦ください。

### パッケージのインストール

```bash
$  npm install
```

### 実行

```bash
$  npm run start
```

### ビルド

```bash
# for Mac
$ NODE_ENV=production npm run build --mac --x64

# for Windows
$ NODE_ENV=production npm run build --win --x64

# for Linux
$ NODE_ENV=production npm run build --linux --x64
```
