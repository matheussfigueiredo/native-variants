import { AnyStyle } from "./props";

export function cn<T extends AnyStyle>(
  ...styles: (T | null | false | undefined)[]
): T {
  return styles
    .filter((s): s is T => Boolean(s))
    .reduce<T>((acc, style) => ({ ...acc, ...style }), {} as T);
}
