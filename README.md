# map-style-color-manipulator

MapLibre Style (Mapbox Style) の Style JSON ファイルに含まれる色をすべて一括で調整する Web アプリです。

https://tris5572.github.io/map-style-color-manipulator/

MapLibre GL JS 等でベクトルタイルを用いた地図を表示する際、スタイルを記述した JSON ファイルを使用することが一般的です。この JSON ファイルには、どのようなデータをどのようなスタイルに設定して描画するかが記されています。このアプリを使えば、 JSON ファイル内の色の彩度または明度を一括して調整できます。

## 使い方

1. 上部のテキストエリアへ、調整元となる JSON ファイルの中身をコピペします。
2. 調整内容を設定します。（「彩度を下げる」「明度を上げる」等）
3. 適用回数を設定します。これは調整内容を何回（どの程度）適用するかの数値で、小数点以下も設定可能です。
4. 変換実行を押下すると、画面下部に調整を行った結果が表示されます。

## モチベーション

MapLibre GL JS で地図を表示する際、配布されている Style JSON ファイルを使用することが一般的です（[例えばこのあたり](https://tile.openstreetmap.jp/)）。このスタイルを変更したいとき、主に [Maputnik](https://maputnik.github.io/) を利用して既存の Style JSON ファイルを調整したり、自分でイチから作成したりといった選択肢がありますが、設定数の膨大さによりいずれも困難な作業になります。

作者(tris)が自作アプリで地図を表示するとき（例えばこの [Gravel Map](https://tris5572.github.io/gravel-map/)）、全体の彩度を下げたいと考えましたが、すべての色設定を1つ1つ変更していくのは大変すぎるので、一括で変更するこのアプリを作成しました。

## 備考

調整対象とする「色」であることの判定はかなり適当なので、調整できないケースがあるかもしれません。

そのような場合は Issue でお知らせいただければ良いかもしれません。
