[トップページに戻る](README.md)

# [FTKR_DisplayCommandFrame](FTKR_DisplayCommandFrame.js) プラグイン

コマンドに枠を付けるプラグインです。

ダウンロード: [FTKR_DisplayCommandFrame.js](https://raw.githubusercontent.com/futokoro/RPGMaker/master/FTKR_DisplayCommandFrame.js)

## 目次

以下の項目の順でプラグインの使い方を説明します。
1. [概要](#概要)
* [プラグインの更新履歴](#プラグインの更新履歴)
* [ライセンス](#ライセンス)

## 概要

本プラグインを実装することで、メニュー等のコマンド(*1)やリスト(*2)に枠を付けることができます。

枠は、単線や複線、画像などから選ぶことが出来ます。
また、どのタイミングで枠を付けるかも選ぶことが出来ます。

(*1) 本プラグインにおけるコマンドとは、Window_Commandオブジェクトを使って
生成しているウィンドウのコマンドを指します。

MV標準では、以下のウィンドウが相当します。
1. タイトルコマンド
2. メニュー
3. アイテム選択後のアイテムタイプリスト
4. 装備選択後の装備変更、最強装備、等のリスト
5. スキル選択後のスキルタイプリスト
6. オプション
7. ショップメニュー
8. 選択肢コマンド
9. 戦闘コマンド
10. ゲームエンドコマンド

それぞれに対して、プラグインパラメータで個別に機能のON/OFFを設定可能。

(*2) 本プラグインにおけるリストとは、以下のリストが相当します。
1. メニュー画面のスキルリスト
2. バトル画面のスキルリスト

それぞれに対して、プラグインパラメータで個別に機能のON/OFFを設定可能。

## 基本設定

枠のタイプや表示タイミングなどの基本設定は、以下のプラグインパラメータで
変更できます。

### 枠タイプ
```
<Display Frame Type>
```
表示する枠のタイプを設定します
* 0 - 非表示
* 1 - 単線
* 2 - 複線
* 3 - 画像
* 4 - 単線 + 画像
* 5 - 複線 + 画像
* 6 - 単線 + 塗潰し
* 7 - 複線 + 塗潰し

### 表示タイミング
```
<When To Display Frame>
```
枠を表示するタイミングを設定します
* 0 - 常時
* 1 - カーソルと重なる時
* 2 - カーソルと重ならない時

### カーソルとの重なり
```
<Change Frame On Cursor>
```
カーソルと重なった時に枠を変更する機能を設定します
* 0 - 無効
* 1 - 有効

### カーソル非表示化
```
<Hide Cursor>
```
カーソルを非表示にする機能を設定します
* 0 - 無効
* 1 - 有効

## 単線、複線の設定

枠のタイプを単線または複線にした場合の表示設定は、
以下のプラグインパラメータで変更できます。

### 標準で枠線に使用する色番号
```
<Default Line Color>
```

### カーソルと重なった時に使用する色番号
```
<Line Color On Cursor>
```

### 枠線の太さ
```
<Line Thick>
```

### 複線時に使用する枠線の色番号
```
<Sub Line Color>
```
複線専用の線色は、カーソルと重なっても変わりません

### 複線時に使用する枠線の太さ
```
<Sub Line Thick>
```

## 枠内塗潰しの設定

枠のタイプを枠内塗潰し有にした場合の表示設定は、
以下のプラグインパラメータで変更できます。

### 標準で枠内塗潰しに使用する色番号
```
<Default Fill Color>
```

### カーソルと重なった時に使用する色番号
```
<Fill Color On Cursor>
```

### 枠内塗潰し色の透明度
```
<Fill Color Opacity>
```

## 画像の設定

枠のタイプを画像にした場合のや表示設定は、以下のプラグインパラメータで
変更できます。

### 使用する画像名
```
<Image Name>
```
使用する画像名を設定します。
画像は、プロジェクトフォルダ内の/img/system/に保存してください。

複数の枠画像を使用する場合は、画像ファイル内に複数の枠画像を並べてください。横に並べる数は4つまでです。

### 枠画像の幅
```
<Image Width>
```
枠画像の幅を設定します。

### 枠画像の高さ
```
<Image Height>
```
枠画像の高さを設定します。

### 自動サイズ調整機能
```
<Enabled Change Scale>
```
枠画像とカーソルサイズが異なる時の自動サイズ調整機能を設定します。
* 0 - 無効
* 1 - 有効

自動サイズ調整は、枠画像の四隅6×6の部分を固定として、それ以外の部分を拡大縮小します。
そのため、本機能を有効にするためには、枠画像は最低でも13×13のサイズが必要です。

### オフセットX
```
<Image Offset X>
```
カーソル枠に対して枠画像の表示位置をX方向にずらしたい場合に設定します。
単位はpixelで、正の値の場合に画面右側にずれます。

### オフセットY
```
<Image Offset Y>
```
カーソル枠に対して枠画像の表示位置をY方向にずらしたい場合に設定します。
単位はpixelで、正の値の場合に画面下側にずれます。

### オフセットW
```
<Image Offset Width>
```
カーソル枠の幅に対して枠画像の幅を変える場合に設定します。
単位はpixelで、正の値の場合に幅が大きくなります。
自動サイズ調整機能を有効にする必要があります。

### オフセットH
```
<Image Offset Height>
```
カーソル枠の高さに対して枠画像の高さを変える場合に設定します。
単位はpixelで、正の値の場合に高さが大きくなります。
自動サイズ調整機能を有効にする必要があります。

### 画像の番号
```
<Default Image Index>
```
標準で表示する画像の番号を設定します。

画像ファイル内に並べた枠画像の内、左上にある画像が0番になります。
そこから右に1番、2番、...と数えます。

### カーソルと重なった時に表示する画像の番号
```
<Image Index On Cursor>
```
カーソルと重なった時に表示する画像の番号を設定します。


[目次に戻る](#目次)

## プラグインの更新履歴

| バージョン | 公開日 | 更新内容 |
| --- | --- | --- |
| [ver1.2.1](FTKR_DisplayCommandFrame.js) | 2017/11/26 | FTKR_ExBattleCommand.jsとの競合回避 |
| ver1.2.0 | 2017/11/20 | スキルリストに枠を表示する機能を追加 |
| ver1.1.1 | 2017/04/21 | 枠画像ディプロイメント対応 |
| ver1.1.0 | 2017/03/31 | 仕様変更 |
| ver1.0.0 | 2017/03/08 | 初版公開 |

## ライセンス

本プラグインはMITライセンスのもとで公開しています。

[The MIT License (MIT)](https://opensource.org/licenses/mit-license.php)

#
[目次に戻る](#目次)

[トップページに戻る](README.md)