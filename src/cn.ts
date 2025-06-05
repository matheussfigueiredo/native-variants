import { StyleProp } from "react-native";
import { Styles } from "./props";

export function cn(...styles: StyleProp<any>[]): Styles {
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
