import "./App.css";
import { ManipulateSelector } from "./ManipulateSelector";
import { InputArea } from "./InputArea";
import { RepeatCount } from "./RepeatCount";

/**
 * アプリのメインコンポーネント
 */
export function App() {
  const resultString = "結果の文字列";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // const inputText = Object.fromEntries(formData.entries())["input_area"];
    // console.log(inputText);
    console.log(Object.fromEntries(formData.entries()));
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
        <div style={{ margin: "1rem 2rem" }}>{resultString}</div>
      </form>
    </>
  );
}
