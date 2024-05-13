import "./App.css";
import { ManipulateSelector } from "./ManipulateSelector";
import { InputArea } from "./InputArea";
import { RepeatCount } from "./RepeatCount";
import { useState } from "react";
import { manipulateColor } from "../misc/manipulate";
import { ManipulateKind } from "../misc/types";

/**
 * アプリのメインコンポーネント
 */
export function App() {
  const [result, setResult] = useState("結果の文字列");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());
    const inputText = values["input_area"];
    const manipulate = values["manipulate"] as ManipulateKind;
    const repeat = Number(values["repeat-count"]);
    setResult(manipulateColor(inputText.toString(), manipulate, repeat));
  }

  async function copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
            <ManipulateSelector />
            <RepeatCount />
            <button
              type="submit"
              style={{ display: "block", padding: "0.2rem 1rem" }}
            >
              変換実行
            </button>
          </div>
        </div>
        <div
          style={{
            margin: "1rem 2rem",
            padding: "0.5rem",
            background: "#FFF7",
            borderRadius: "8px",
          }}
        >
          <button
            style={{ padding: "0.2rem 0.4rem" }}
            onClick={() => copyToClipboard(result)}
          >
            Copy to clipboard
          </button>
          <div style={{ fontSize: "small", marginTop: "0.2rem" }}>{result}</div>
        </div>
      </form>
    </>
  );
}
