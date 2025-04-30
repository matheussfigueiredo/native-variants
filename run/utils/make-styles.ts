import { nv } from "./nv";
import type { Component, MappedVariants, Styles, Variants } from "./props";

export type Theme = {
  primary: string;
  secondary: string;
};

type ThemeCallback<S extends string, V extends Variants<S>> = (args: {
  theme?: Theme;
}) => Component<S, V>;

export const makeStyles = <S extends string, V extends Variants<S>>(
  configCallback: ThemeCallback<S, V>,
) => {
  return (
    props: { theme?: Theme } & Partial<MappedVariants<V>>,
  ): Record<S, Styles> => {
    const { theme, ...variantProps } = props;

    const config = configCallback({ theme });

    const computeStyles = nv(config);

    return computeStyles(variantProps as unknown as Partial<MappedVariants<V>>);
  };
};
