import { StyleProp } from "react-native";

export function merge<T extends object>(
  ...styles: Array<StyleProp<T> | null | undefined | false>
): StyleProp<T> {
  return styles.filter(Boolean) as StyleProp<T>;
}
