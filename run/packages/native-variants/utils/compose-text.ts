import { TextStyle } from "react-native";
import { Styles } from "../types";

const textStyleKeys: (keyof TextStyle)[] = [
  "color",
  "fontSize",
  "fontWeight",
  "fontStyle",
  "textAlign",
  "textAlignVertical",
  "letterSpacing",
  "lineHeight",
  "textDecorationLine",
  "textDecorationColor",
  "textDecorationStyle",
  "fontFamily",
  "includeFontPadding",
  "textTransform",
  "writingDirection",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
];

export function composeText(style?: Styles): Partial<TextStyle> {
  if (!style) return {};

  return Object.fromEntries(
    Object.entries(style).filter(([key]) =>
      textStyleKeys.includes(key as keyof TextStyle),
    ),
  );
}
