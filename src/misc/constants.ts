import { MANIPULATE_KIND } from "./types";

export const MANIPULATES = [
  { value: "saturate", label: "彩度を上げる" },
  { value: "desaturate", label: "彩度を下げる" },
] satisfies { value: MANIPULATE_KIND; label: string }[];
