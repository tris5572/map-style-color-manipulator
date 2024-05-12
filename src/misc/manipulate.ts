import { ManipulateKind } from "./types";

/**
 * Mapbox GL Style ファイルの型。
 * コンパイラを納得させるために適当に作ったので、明らかに不十分。
 */
type JsonType = {
  [key: string]: object | string | Array<string | number>;
};

export function manipulateColor(
  input: string,
  kind: ManipulateKind,
  repeat: number
): string {
  let jsonObj;
  try {
    jsonObj = JSON.parse(input);
  } catch {
    return "入力文字列を JSON として解釈できませんでした。";
  }

  // オブジェクトの中身を再帰で調べる。
  // 色と思われるキーと値だったら調整する。
  function convertObject(obj: JsonType) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (typeof obj[key] === "object") {
        convertObject(obj[key] as JsonType);
      } else {
        // 実際に調整する
        if (key.endsWith("-color")) {
          // TODO:
          console.log(obj[key]);
        }
      }
    }
  }

  convertObject(jsonObj);
  // JSONの中身でループ
  console.log(kind, repeat);
  return JSON.stringify(jsonObj);
}
