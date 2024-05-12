import "./App.css";
import { ManipulateSelector } from "./ManipulateSelector";
import { InputArea } from "./InputArea";
import { useState } from "react";
import { RepeatCount } from "./RepeatCount";
import { MANIPULATE_KIND } from "../misc/types";
import { MANIPULATES } from "../misc/constants";

/**
 * アプリのメインコンポーネント
 */
export function App() {
  const resultString = "結果の文字列";
  const [repeatCount, setRepeatCount] = useState("1");
  const [manipulate, setManipulate] = useState(MANIPULATES[0].value);

  function manipulateChanged(v: MANIPULATE_KIND) {
    setManipulate(v);
  }

  return (
    <>
      <div
        style={{
          margin: "1rem 2rem",
          background: "#FFFA",
          borderRadius: "8px",
          display: "flex",
        }}
      >
        <InputArea />
        <div
          style={{
            margin: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <ManipulateSelector
            value={manipulate}
            valueChanged={manipulateChanged}
          />
          <RepeatCount count={repeatCount} setCount={setRepeatCount} />
          <button style={{ display: "block", padding: "0.2rem 1rem" }}>
            変換実行
          </button>
        </div>
      </div>
      <div style={{ margin: "1rem 2rem" }}>{resultString}</div>
    </>
  );
}
