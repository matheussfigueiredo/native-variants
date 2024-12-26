import { Component, NativeCSSProperties, Variants } from "./nv-props";

export const nv = <
  S extends string,
  V extends Variants<S>,
  D extends Partial<{ [K in keyof V]: keyof V[K] }> = Partial<{
    [K in keyof V]: keyof V[K];
  }>,
>(
  config: Component<S, V>,
) => {
  const componentFunction = (props?: Partial<D>) => {
    const {
      base,
      variants,
      defaultVariants,
      compoundVariants = [],
      slots,
    } = config;

    const mergedProps = { ...defaultVariants, ...props };

    if (!mergedProps.variant && defaultVariants?.variant) {
      //@ts-ignore
      mergedProps.variant = defaultVariants?.variant;
    }

    const styles: Partial<Record<S, NativeCSSProperties>> = {};

    slots.forEach((slot) => {
      styles[slot] = { ...(base![slot] || {}) };
    });

    Object.keys(variants!).forEach((variantKey) => {
      const key = variantKey as keyof V;
      const selectedVariant = mergedProps[key] as any;

      if (selectedVariant && variants![key]) {
        //@ts-ignore
        const variantStyles = variants[key]?.[selectedVariant];
        if (variantStyles) {
          for (const slot in variantStyles) {
            styles[slot as S] = {
              ...styles[slot as S],
              ...variantStyles[slot as S],
            };
          }
        }
      }
    });

    compoundVariants.forEach((compoundVariant) => {
      const matches = Object.entries(compoundVariant).every(([key, value]) => {
        if (key === "css") return true;
        //@ts-ignore
        return mergedProps[key as keyof D] === value;
      });

      if (matches && compoundVariant.css) {
        for (const slot in compoundVariant.css) {
          styles[slot as S] = {
            ...styles[slot as S],
            ...compoundVariant.css[slot as S],
          };
        }
      }
    });

    return styles as Record<S, NativeCSSProperties>;
  };

  componentFunction.variants = Object.fromEntries(
    Object.entries(config.variants!).map(([key, value]) => [
      key,
      Object.keys(value!),
    ]),
  ) as Record<keyof V, string[]>;

  return componentFunction;
};
