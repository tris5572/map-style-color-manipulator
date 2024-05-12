import { useState } from "react";

export function RepeatCount() {
  const [isError, setIsError] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setIsError(false);
    const n = Number(e.target.value);
    if (Number.isNaN(n)) {
      console.log("setIsError");
      setIsError(true);
    }
  }

  return (
    <label
      htmlFor="repeat-count"
      style={{ fontSize: "small", fontWeight: "bold" }}
    >
      適用回数&nbsp;
      <input
        type="text"
        id="repeat-count"
        name="repeat-count"
        size={4}
        defaultValue={"1.0"}
        style={{ background: isError ? "#F99" : undefined }}
        onChange={handleChange}
      />
    </label>
  );
}
