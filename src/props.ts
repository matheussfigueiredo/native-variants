import type {
  FlexStyle,
  ImageStyle,
  TextStyle,
  TransformsStyle,
  ViewStyle,
} from "react-native";

type Styles = Partial<
  ViewStyle & TextStyle & ImageStyle & FlexStyle & TransformsStyle
>;

type Base<S extends string> = Partial<Record<S, Styles>>;

type Variants<S extends string> = {
  [K in string]?: Record<string, Partial<Record<S, Styles>>>;
};

type MappedVariants<V> = Partial<{
  [K in keyof V]: keyof V[K] | boolean;
}>;

type DefaultVariants<S extends string, V extends Variants<S>> = {
  [K in keyof V]?: keyof V[K] | boolean;
};

type CompoundVariant<S extends string, V extends Variants<S>> = {
  css?: Partial<Record<S, Styles>>;
} & {
  [K in keyof V]?: keyof V[K];
};

type Component<S extends string, V extends Variants<S>> = {
  slots: S[];
  base?: Base<S>;
  variants?: V;
  defaultVariants?: DefaultVariants<S, V>;
  compoundVariants?: CompoundVariant<S, V>[];
};

type VariantProps<T extends (...args: any[]) => any> = T extends (
  props?: infer P,
) => any
  ? Partial<P>
  : never;

type BaseStyle = ViewStyle &
  TextStyle &
  ImageStyle &
  FlexStyle &
  TransformsStyle;

type AnyStyle = Partial<BaseStyle>;

export {
  AnyStyle,
  Base,
  Component,
  CompoundVariant,
  MappedVariants,
  Styles,
  VariantProps,
  Variants,
};
