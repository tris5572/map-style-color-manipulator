export function RepeatCount() {
  return (
    <label
      htmlFor="repeat-count"
      style={{ fontSize: "small", fontWeight: "bold" }}
    >
      適用回数&nbsp;
      <input
        type="number"
        id="repeat-count"
        name="repeat-count"
        size={4}
        min={1}
        max={9}
      />
    </label>
  );
}
