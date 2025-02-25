import { StyleProp } from "react-native";
import { Flatten } from "./flatten-props";

export function flatten(...styles: StyleProp<Flatten>[]): Flatten {
  return styles
    .filter((style): style is Flatten => Boolean(style))
    .reduce<Flatten>(
      (merged, style) => ({
        ...merged,
        ...style,
      }),
      {},
    );
}
