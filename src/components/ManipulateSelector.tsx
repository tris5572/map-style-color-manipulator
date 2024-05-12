import { MANIPULATES } from "../misc/constants";

/**
 * 調整方法を選択するラジオボタンのコンポーネント
 */
export function ManipulateSelector() {
  return (
    <div>
      <p style={{ fontSize: "small", fontWeight: "bold" }}>調整内容</p>
      {MANIPULATES.map((v) => (
        <label key={v.value} style={{ display: "block" }}>
          <input
            type="radio"
            name={"manipulate"}
            value={v.value}
            defaultChecked={v.value === MANIPULATES[0].value}
          />
          {v.label}
        </label>
      ))}
    </div>
  );
}
