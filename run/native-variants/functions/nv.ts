import { Component, NativeCSSProperties, Variants } from "../types/nv-props";

export const nv = <
  S extends string,
  V extends Variants<S>,
  D extends Partial<{ [K in keyof V]: keyof V[K] | boolean }> = Partial<{
    [K in keyof V]: keyof V[K] | boolean;
  }>,
>(
  config: Component<S, V>,
) => {
  const componentFunction = (props: Partial<D> = {}) => {
    const {
      base,
      variants,
      defaultVariants,
      compoundVariants = [],
      slots,
    } = config;

    // Merge props with defaultVariants
    const mergedProps = { ...defaultVariants, ...props };

    // Normalizar propriedades booleanas para suas versões de string ("true"/"false")
    Object.keys(mergedProps).forEach((key) => {
      const propValue = mergedProps[key];
      if (typeof propValue === "boolean") {
        //@ts-ignore
        mergedProps[key] = propValue ? "true" : "false";
      }
    });

    // Caso não tenha o "variant" na prop, pegamos o valor padrão
    if (!mergedProps.variant && defaultVariants?.variant) {
      //@ts-ignore
      mergedProps.variant = defaultVariants?.variant;
    }

    const styles: Partial<Record<S, NativeCSSProperties>> = {};

    // Aplicar os estilos base para cada slot
    slots.forEach((slot) => {
      styles[slot] = { ...(base![slot] || {}) };
    });

    // Aplicar estilos dos variants
    Object.keys(variants!).forEach((variantKey) => {
      const key = variantKey as keyof V;
      const selectedVariant = mergedProps[key];

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

    // Aplicar estilos das compoundVariants
    compoundVariants.forEach((compoundVariant) => {
      const matches = Object.entries(compoundVariant).every(([key, value]) => {
        if (key === "css") return true;
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

  // Determinar as variantes possíveis para cada propriedade
  componentFunction.variants = Object.fromEntries(
    Object.entries(config.variants!).map(([key, value]) => [
      key,
      Object.keys(value!),
    ]),
  ) as Record<keyof V, string[]>;

  return componentFunction;
};
