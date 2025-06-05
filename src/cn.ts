import { StyleProp } from "react-native";

export function cn<T = any>(
  ...styles: (StyleProp<T> | false | null | undefined)[]
): StyleProp<T>[] {
  return styles.filter(Boolean) as StyleProp<T>[];
}
