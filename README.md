# Rest-seaerch
# このリポジトリについて

このプロジェクトは2020年9月に課題として制作したものです。
当時の仕様に従って作成されていますので、利用・参考にする際は自己責任でお願いします。

# 簡易仕様書

作者     ：Taketo Maruyama

アプリ名 ：メシサーチ

git      ：https://github.com/Taketo-Maruyama/Rest-search

開発環境 ：Atom 1.38.2

開発言語 ：HTML,CSS,JavaScript

動作環境　:macOS Catalina(10.15.6) / Google Chrome (バージョン: 85.0.4183.83)

## 機能一覧

|機能名|機能説明|
|:--:|:--:|
|レストラン検索|ぐるなびAPIを使用して、現在地周辺の飲食店を検索する。|
|レストラン情報取得|ぐるなびAPIを使用して、飲食店の詳細情報を取得する。|


## 画面一覧

|画面名|画面概要|
|:--:|:--:|
|トップページ|検索ボタンから検索ページに移動できる。|
|検索ページ|検索半径を設定し検索できる。検索結果を一覧表示する。Aboutから各飲食店のぐるなびのページに移動できる。|

##ファイル一覧

|ファイル名|ファイル概要|
|:--:|:--:|
|sample.html|トップページ。検索ボタンから検索ページに移動できる。|
|detail.html|検索ページ。検索結果の飲食店を一覧表示する。Aboutから各飲食店のぐるなびのページに移動できる。|
|samplecode.js|処理を行う部分はここに記述している。|
|sampleback.rb|Rubyで実装したAPI連携の部分。本サービ上では動作に関与しないが叩き台として掲載。|

## 使用しているAPI,SDKなど

- [ぐるなびAPI](http://api.gnavi.co.jp/api/manual/restsearch/)


## コンセプト

- 食べに行きたいお店がすぐ見つかる。


## こだわったポイント

- 一覧表示はできるだけシンプルに表示するようにした。
- ぐるなびサイトへのリンクを貼ることで予約しやすくなるようにした


## アドバイスして欲しいポイント

- JavaScriptで取得した位置情報をバックエンド側(Ruby)に送信する部分の実装
- APIを叩いて返ってきたjsonファイルを店舗ごとに別々のファイルに分ける方法
(一覧で表示する際店舗を横並びに表示することを想定していたが１つのjsonであるため縦に並んでしまう、詳細表示するにも必要と考えている)
- バックエンド(Ruby)の実装(sampleback.rbにAPIを叩く部分は実装している)
-

## その他、申し送り

- 当初はRuby on railsでの実装を予定していましたがうまく実装する方法が浮かばなかったためJavaScriptのみでの実装となっています。
- ページング機能、詳細情報の表示ができていない状態です。
- 1度検索をした状態でページをリロードせずにもう一度検索すると前回の検索結果がそのまま残る不具合があります。
- 動作環境に挙げていないOS、ブラウザについては動作保証外とさせてください。
- アクセスキーはソースコードから削除しています。
