import { StyleProp } from "react-native";
import { Styles } from "./props";

export function merge(...styles: StyleProp<any>[]): StyleProp<Styles> {
  return styles
    .filter((style): style is Styles => Boolean(style))
    .reduce<Styles>(
      (merged, style) => ({
        ...merged,
        ...style,
      }),
      {},
    );
}
