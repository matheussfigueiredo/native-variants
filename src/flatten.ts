import { StyleProp } from "react-native";
import { Flatten } from "./flatten-props";
import { NativeCSSProperties } from "./nv-props";

export function flatten(
  ...styles: StyleProp<Flatten>[]
): NativeCSSProperties[] {
  return styles.filter((style): style is NativeCSSProperties => Boolean(style));
}
