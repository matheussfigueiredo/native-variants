import { useMemo } from "react";
import type {
  Component,
  MappedVariants,
  NativeCSSProperties,
  Variants,
} from "../types/nv-props";

export const nv = <
  S extends string,
  V extends Variants<S> = {},
  D extends MappedVariants<V> = MappedVariants<V>,
>(
  config: Component<S, V>,
) => {
  const componentFunction = (props: Partial<D> = {}) => {
    const {
      base,
      variants = {},
      defaultVariants,
      compoundVariants = [],
      slots,
    } = config;

    const computeStyles = () => {
      const mergedProps = { ...defaultVariants, ...props };

      Object.keys(mergedProps).forEach((key) => {
        const propValue = mergedProps[key];
        if (typeof propValue === "boolean") {
          //@ts-ignore
          mergedProps[key] = propValue ? "true" : "false";
        }
      });

      if (!mergedProps.variant && defaultVariants?.variant) {
        //@ts-ignore
        mergedProps.variant = defaultVariants?.variant;
      }

      const styles: Partial<Record<S, NativeCSSProperties>> = {};

      const usedStyles: Set<string> = new Set();

      slots.forEach((slot) => {
        styles[slot] = { ...(base![slot] || {}) };
        usedStyles.add(slot);
      });

      Object.keys(variants).forEach((variantKey) => {
        const key = variantKey as keyof V;
        const selectedVariant = mergedProps[key];

        //@ts-ignore
        if (selectedVariant && variants[key]) {
          //@ts-ignore
          const variantStyles = variants[key]?.[selectedVariant];
          if (variantStyles) {
            for (const slot in variantStyles) {
              styles[slot as S] = {
                ...styles[slot as S],
                ...variantStyles[slot as S],
              };
              usedStyles.add(slot as string);
            }
          }
        }
      });

      compoundVariants.forEach((compoundVariant) => {
        const matches = Object.entries(compoundVariant).every(
          ([key, value]) => {
            if (key === "css") return true;
            return mergedProps[key as keyof D] === value;
          },
        );

        if (matches && compoundVariant.css) {
          for (const slot in compoundVariant.css) {
            styles[slot as S] = {
              ...styles[slot as S],
              ...compoundVariant.css[slot as S],
            };
            usedStyles.add(slot as string);
          }
        }
      });

      const unusedSlots = slots.filter((slot) => !usedStyles.has(slot));
      if (unusedSlots.length > 0) {
        console.log("Estilos não utilizados:", unusedSlots);
      }

      return styles as Record<S, NativeCSSProperties>;
    };

    return useMemo(computeStyles, [JSON.stringify(props)]);
  };

  componentFunction.variants = Object.fromEntries(
    Object.entries(config.variants || {}).map(([key, value]) => [
      key,
      Object.keys(value!),
    ]),
  ) as Record<keyof V, string[]>;

  return componentFunction;
};
