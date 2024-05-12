import { ManipulateKind } from "./types";

export const MANIPULATES = [
  { value: "desaturate", label: "彩度を下げる" },
  { value: "saturate", label: "彩度を上げる" },
  { value: "darken", label: "暗くする" },
  { value: "brighten", label: "明るくする" },
] satisfies { value: ManipulateKind; label: string }[];
