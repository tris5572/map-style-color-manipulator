import { useState } from "react";
import { MANIPULATES } from "../misc/constants";

function ManipulateSelector(props: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [selected, setSelected] = useState(MANIPULATES[0].value);
  return (
    <div>
      {MANIPULATES.map((v) => (
        <label key={v.value}>
          <input
            type="radio"
            value={v.label}
            checked={v.value === selected}
            onChange={(e) => {
              setSelected(v.value);
              props.handleChange(e);
            }}
          />
          {v.label}
        </label>
      ))}
    </div>
  );
}

export function App() {
  const [repeatCount, setRepeatCount] = useState("1");
  const resultString = "結果の文字列";

  /** 調整内容のラジオボタンが変更されたときに呼び出される */
  function manipulateChanged(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <>
      <label htmlFor="input_area">GL Style JSON:</label>
      <textarea id="input_area" cols={40} rows={20} />
      {<ManipulateSelector handleChange={manipulateChanged} />}
      <label htmlFor="repeat-count">
        適用回数
        <input
          type="number"
          id="repeat-count"
          value={repeatCount}
          size={4}
          min={1}
          max={9}
          onChange={(e) => setRepeatCount(e.target.value)}
        />
      </label>
      <button>変換実行</button>
      <div>{resultString}</div>
    </>
  );
}
