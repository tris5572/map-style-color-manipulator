import { MANIPULATES } from "../misc/constants";
import { MANIPULATE_KIND } from "../misc/types";

type Props = {
  value: MANIPULATE_KIND;
  valueChanged: (v: MANIPULATE_KIND) => void;
};

/**
 * 調整方法を選択するラジオボタンのコンポーネント
 */
export function ManipulateSelector(props: Props) {
  /** 調整内容のラジオボタンが変更されたときに呼び出される */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.valueChanged(e.target.value as MANIPULATE_KIND);
  }

  return (
    <div>
      <p style={{ fontSize: "small", fontWeight: "bold" }}>調整内容</p>
      {MANIPULATES.map((v) => (
        <label key={v.value} style={{ display: "block" }}>
          <input
            type="radio"
            value={v.value}
            checked={v.value === props.value}
            onChange={handleChange}
          />
          {v.label}
        </label>
      ))}
    </div>
  );
}
