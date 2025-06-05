import { StyleProp } from "react-native";
import { AnyStyle } from "./props";

function flattenStyle<T>(style: StyleProp<T>): T[] {
  if (!style) return [];
  if (Array.isArray(style)) return style.flat().filter(Boolean) as T[];
  //@ts-ignore
  return [style];
}

export function cn<T extends AnyStyle>(...styles: StyleProp<T>[]): T {
  return styles
    .flatMap(flattenStyle)
    .filter((s): s is T => !!s)
    .reduce<T>((acc, style) => ({ ...acc, ...style }), {} as T);
}
