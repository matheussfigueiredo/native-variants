import {
  FlexStyle,
  ImageStyle,
  StyleProp,
  TextStyle,
  TransformsStyle,
  ViewStyle,
} from "react-native";
import { Styles } from "./props";

type CnStyleProp = Partial<
  | StyleProp<ViewStyle>
  | StyleProp<TextStyle>
  | StyleProp<ImageStyle>
  | StyleProp<FlexStyle>
  | StyleProp<TransformsStyle>
>;

export function cn(...styles: CnStyleProp[]): Styles {
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
