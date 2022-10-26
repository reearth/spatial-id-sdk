# 3D 空間 ID 共通ライブラリ

これは 3D 空間 ID の共通ライブラリの JavaScript 版のプロトタイプです。

### 概要

このライブラリは位置情報と空間 ID を相互変換したり操作するための共通ライブラリとして利用されるべき機能を提供します。

コンストラクタである `Space()` に対して、座標及び高度、または空間 ID を引数として渡して実行すると、空間オブジェクトを生成します。

空間オブジェクトは以下のプロパティを持っており、空間を移動するためのいくつかのメソッドも提供します。

* 中心点の緯度及び経度
* 高度
* ズームレベル（分解能）
* ZFXY（3次元タイル番号）
* タイルハッシュ（3次元タイル番号をハッシュ化した値）

メソッドについては以下のリンク先をご参照ください。

https://github.com/spatial-id/spatial-object-model-specification#readme

## インストール方法

```
$ npm install https://github.com/spatial-id/javascript-sdk -S
```

## モジュールのロード

以下の方法でモジュールを読み込んでください。

```
import { Space } from '@spatial-id/javascript-sdk'
```

## コンストラクタ

```
Space( input, zoom? )
```

新しい空間オブジェクトを返します。

### 引数

#### input

座標及び高度または空間 ID を以下のフォーマットで指定することができます。

* LngLatWithAltitude: 緯度経度及び高度を含むオブジェクト。（例: `{ lng: number, lat: number, alt?: number }`）
* ZFXYTile: ZFXY（3次元タイル番号）を示す文字列。（例: `/15/6/2844/17952`）
* TileHash: ZFXY をハッシュ化した値。（例: `100213200122640`）

#### zoom

ズームレベル（分解能）を整数で指定することができます。

この引数は省略も可能で、デフォルトは `25` です。

## 補助コンストラクタ

```
Space.boundingSpaceForGeometry( geometry, minZoom? )
```

`geometry` に渡された GeoJSON の Geometry オブジェクトに対して、最小分解能（ズームレベル）での空間IDを返す。
`minZoom` が指定している場合は、より少ない分解能（ズームレベル）の空間IDが作られるにしても、 `minZoom` での空間IDを返す。

```
Space.spacesForGeometry( geometry, zoom )
```

`geometry` に渡された GeoJSON の Geometry オブジェクトに対して、その Geometry と指定の `zoom` での分解能（ズームレベル）の空間IDの共通集合を配列として返す。

## メソッド

```
up()
```

現在の空間のひとつ上の空間に移動します。整数を引数として渡すとその個数分だけ空間を移動します。

```
down()
```

現在の空間のひとつ下の空間に移動します。整数を引数として渡すとその個数分だけ空間を移動します。

その他のメソッドについては、以下のリンク先をご参照ください。
（まだ未実装のものもあります！）

https://github.com/spatial-id/spatial-object-model-specification#readme
