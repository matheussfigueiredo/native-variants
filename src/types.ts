import {
  FlexStyle,
  ImageStyle,
  TextStyle,
  TransformsStyle,
  ViewStyle,
} from "react-native";

export type Styles = Partial<
  ViewStyle & TextStyle & ImageStyle & FlexStyle & TransformsStyle
>;

export type Base<S extends string> = Partial<Record<S, Styles>>;

export type DefaultVariants<S extends string, V extends Variants<S>> = {
  [K in keyof V]?: keyof V[K] | boolean;
};

export type CompoundVariant<S extends string, V extends Variants<S>> = {
  css?: Partial<Record<S, Styles>>;
} & {
  [K in keyof V]?: keyof V[K];
};

export type Variants<S extends string> = {
  [K in string]?: { [K in string]: { [key in S]?: Styles } };
};

export type MappedVariants<V> = Partial<{
  [K in keyof V]: keyof V[K];
}>;

export type DefineConfig = <S extends string, V extends Variants<S>>(
  config: Config<S, V>,
) => Config<S, V>;

export type Config<S extends string, V extends Variants<S>> = {
  slots: S[];
  base?: Base<S>;
  variants?: V;
  defaultVariants?: DefaultVariants<S, V>;
  compoundVariants?: CompoundVariant<S, V>[];
};

export type VariantProps<T extends (...args: any[]) => any> = T extends (
  props?: infer P,
) => any
  ? Partial<P>
  : never;

export type Theme<
  C = any,
  S = any,
  F = any,
  R = any,
  T = any,
  Z = any,
  O = any,
  L = any,
> = {
  colors?: C;
  spacing?: S;
  fontSizes?: F;
  radii?: R;
  shadows?: T;
  zIndex?: Z;
  opacity?: O;
  lineHeights?: L;
};
