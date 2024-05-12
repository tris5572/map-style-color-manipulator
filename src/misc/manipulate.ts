import chroma from "chroma-js";
import { ManipulateKind } from "./types";

/**
 * Mapbox GL Style ファイルをオブジェクトに変換したときの型。
 * コンパイラを納得させるために適当に作ったので、明らかに不十分。
 */
type JsonType = {
  [key: string]: object | string | Array<string | number>;
};

/**
 * 色を調整する。
 * 入力値を JSON として解釈できない場合、エラーとなった旨の文字列を返す。
 */
export function manipulateColor(
  /** 調整対象となる JSON 文字列 */
  input: string,
  /** 調整する操作の種類 */
  kind: ManipulateKind,
  /** 繰り返し適用する回数 */
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
          const value = String(obj[key]);
          if (chroma.valid(value)) {
            // 正しい色表現のときのみ調整を実施する
            const color = chroma(value);
            let newColor;
            switch (kind) {
              case "desaturate":
                newColor = color.desaturate(repeat);
                break;
              case "saturate":
                newColor = color.saturate(repeat);
                break;
              case "darken":
                newColor = color.darken(repeat);
                break;
              case "brighten":
                newColor = color.brighten(repeat);
                break;
              default:
                // ここに来ることはないはずだが、もし来たらそのまま
                newColor = color;
            }

            // 入力形式に合わせて色を出力する
            let colorStr;
            if (value.startsWith("hsl")) {
              colorStr = newColor.css("hsl");
            } else if (value.startsWith("#")) {
              colorStr = newColor.hex();
            } else {
              colorStr = newColor.css();
            }
            obj[key] = colorStr;
          }
        }
      }
    }
  }

  convertObject(jsonObj);

  return JSON.stringify(jsonObj);
}
