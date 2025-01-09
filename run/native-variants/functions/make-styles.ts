import { Theme } from "@/components/button copy";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import type { Component, MappedVariants, Variants } from "../types/nv-props";
import { nv } from "./nv";

type ThemeCallback<S extends string, V extends Variants<S>> = (args: {
  theme?: Theme;
}) => Component<S, V>;

type NativeStyle = Partial<ViewStyle & TextStyle & ImageStyle>;

export const makeStyles = <S extends string, V extends Variants<S>>(
  configCallback: ThemeCallback<S, V>,
) => {
  return (
    props: { theme?: Theme } & Partial<MappedVariants<V>>,
  ): Record<S, NativeStyle> => {
    const { theme, ...variantProps } = props;

    const config = configCallback({ theme });

    const computeStyles = nv(config);

    return computeStyles(variantProps as unknown as Partial<MappedVariants<V>>);
  };
};
