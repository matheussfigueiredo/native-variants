import {
  FlexStyle,
  ImageStyle,
  TextStyle,
  TransformsStyle,
  ViewStyle,
} from "react-native";

export type NativeCSSProperties = Partial<
  ViewStyle & TextStyle & ImageStyle & FlexStyle & TransformsStyle
>;

export type Variants<S extends string> = {
  [K in string]?: Record<string, Partial<Record<S, NativeCSSProperties>>>;
};

export type CompoundVariant<S extends string, V extends Variants<S>> = {
  css?: Partial<Record<S, NativeCSSProperties>>;
} & {
  [K in keyof V]?: keyof V[K];
};

export type Component<S extends string, V extends Variants<S>> = {
  slots: S[];
  base?: Partial<Record<S, NativeCSSProperties>>;
  variants?: V;
  defaultVariants?: {
    [K in keyof V]?: keyof V[K];
  };
  compoundVariants?: CompoundVariant<S, V>[];
};

export type VariantProps<T extends (...args: any) => any> = T extends (
  props: infer P,
) => any
  ? Partial<P>
  : never;
