import {
  FlexStyle,
  ImageStyle,
  TextStyle,
  TransformsStyle,
  ViewStyle,
} from "react-native";

export type Flatten = Partial<
  ViewStyle | TextStyle | ImageStyle | FlexStyle | TransformsStyle
>;
