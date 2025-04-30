import { useMemo } from "react";
import type {
  Base,
  Component,
  CompoundVariant,
  MappedVariants,
  Styles,
  Variants,
} from "./props";

function normalizeProps<D extends object>(defaults: D, props: Partial<D>): D {
  const merged = { ...defaults };

  Object.entries(props).forEach(([key, value]) => {
    if (value !== undefined) {
      // @ts-ignore
      merged[key] = value;
    }
  });

  Object.keys(merged).forEach((key) => {
    const value = merged[key as keyof D];
    if (typeof value === "boolean") {
      // @ts-ignore
      merged[key] = value ? "true" : "false";
    }
  });

  return merged;
}

function initializeBaseStyles<S extends string>(
  slots: S[],
  base?: Base<S>,
): [Partial<Record<S, Styles>>, Set<string>] {
  const styles: Partial<Record<S, Styles>> = {};
  const usedSlots: Set<string> = new Set();

  slots.forEach((slot) => {
    styles[slot] = { ...(base?.[slot] || {}) };
    usedSlots.add(slot);
  });

  return [styles, usedSlots];
}

function applyVariants<S extends string, V extends Variants<S>>(
  variants: V,
  props: Partial<MappedVariants<V>>,
  styles: Partial<Record<S, Styles>>,
  usedSlots: Set<string>,
) {
  Object.keys(variants).forEach((variantKey) => {
    const selectedValue = props[variantKey as keyof MappedVariants<V>];
    const variant = variants[variantKey as keyof V];

    //@ts-ignore
    if (selectedValue && variant?.[selectedValue]) {
      //@ts-ignore
      const variantStyles = variant[selectedValue];

      for (const slot in variantStyles) {
        styles[slot as S] = {
          ...styles[slot as S],
          ...variantStyles[slot as S],
        };
        usedSlots.add(slot);
      }
    }
  });
}

function applyCompoundVariants<
  S extends string,
  V extends Variants<S>,
  D extends MappedVariants<V> = MappedVariants<V>,
>(
  compoundVariants?: CompoundVariant<S, V>[],
  props: Partial<D> = {},
  styles: Partial<Record<S, Styles>> = {},
  usedSlots?: Set<string>,
) {
  compoundVariants?.forEach((compoundVariant) => {
    const matches = Object.entries(compoundVariant).every(
      ([key, value]) => key === "css" || props[key as keyof D] === value,
    );

    if (matches && compoundVariant.cs) {
      for (const slot in compoundVariant.css) {
        styles[slot as S] = {
          ...styles[slot as S],
          ...compoundVariant.css[slot as S],
        };
        usedSlots?.add(slot);
      }
    }
  });
}

function logUnusedSlots<S extends string>(slots: S[], usedSlots: Set<string>) {
  const unused = slots.filter((slot) => !usedSlots.has(slot));
  if (unused.length > 0) {
    console.log("Estilos não utilizados:", unused);
  }
}

function nv<
  S extends string,
  V extends Variants<S>,
  D extends MappedVariants<V> = MappedVariants<V>,
>(config: Component<S, V>) {
  const { slots, variants, base, compoundVariants, defaultVariants } = config;
  const componentFunction = (props: Partial<D> = {}) => {
    const computeStyles = () => {
      const mergedProps = normalizeProps(defaultVariants || {}, props);
      const [styles, usedSlots] = initializeBaseStyles(slots, base);

      if (variants) {
        applyVariants(variants, mergedProps, styles, usedSlots);
      }

      applyCompoundVariants(
        compoundVariants || [],
        mergedProps,
        styles,
        usedSlots,
      );

      logUnusedSlots(slots, usedSlots);

      return styles as Record<S, Styles>;
    };

    return useMemo(computeStyles, [JSON.stringify(props)]);
  };

  componentFunction.variants = Object.fromEntries(
    Object.entries(variants || {}).map(([key, value]) => [
      key,
      Object.keys(value!),
    ]),
  ) as Record<keyof V, string[]>;

  return componentFunction;
}

export { nv };
