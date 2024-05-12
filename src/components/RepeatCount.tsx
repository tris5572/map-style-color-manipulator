type Props = {
  count: string;
  setCount: (v: string) => void;
};

export function RepeatCount(props: Props) {
  return (
    <label
      htmlFor="repeat-count"
      style={{ fontSize: "small", fontWeight: "bold" }}
    >
      適用回数&nbsp;
      <input
        type="number"
        id="repeat-count"
        value={props.count}
        size={4}
        min={1}
        max={9}
        onChange={(e) => props.setCount(e.target.value)}
      />
    </label>
  );
}
