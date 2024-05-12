export function InputArea() {
  return (
    <div style={{ padding: "0.5rem 1rem" }}>
      <label
        htmlFor="input_area"
        style={{ display: "block", fontSize: "small", fontWeight: "bold" }}
      >
        Input (GL Style JSON)
      </label>
      <textarea
        style={{ fontFamily: "monospace" }}
        id="input_area"
        cols={40}
        rows={10}
      />
    </div>
  );
}
