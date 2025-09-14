import {
  Base,
  CompoundVariant,
  Config,
  DefaultVariants,
  DefineConfig,
  Styles,
  Theme,
  Variants,
} from "../types";

function cache<T extends (...args: any[]) => any>(fn: T): T {
  const memo = new Map<string, ReturnType<T>>();
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (memo.has(key)) return memo.get(key)!;
    const result = fn(...args);
    memo.set(key, result);
    return result;
  }) as T;
}

function variant<const S extends string, V extends Variants<S>>(
  slot: S,
  variants: V,
  props: DefaultVariants<S, V>,
): Styles {
  let style: Styles = {};

  for (const key in variants) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      const value = props[key];
      const variantConfig = variants[key];
      const styleForValue = variantConfig?.[value as string]?.[slot];
      if (styleForValue) {
        style = { ...style, ...styleForValue };
      }
    }
  }

  return style;
}

function compound<const S extends string, V extends Variants<S>>(
  slot: S,
  compoundVariants: CompoundVariant<S, V>[],
  props: DefaultVariants<S, V>,
): Styles {
  let style: Styles = {};

  for (const cv of compoundVariants) {
    const { css, ...conds } = cv;
    const isMatch = Object.entries(conds).every(([k, v]) => props[k] === v);

    if (isMatch && css?.[slot]) {
      style = { ...style, ...css[slot] };
    }
  }

  return style;
}

function set<const S extends string, V extends Variants<S>>(
  slot: S,
  base: Base<S>,
  variants: V,
  compoundVariants: CompoundVariant<S, V>[],
  props: DefaultVariants<S, V>,
): Styles {
  return {
    ...base?.[slot],
    ...variant(slot, variants, props),
    ...compound(slot, compoundVariants, props),
  };
}

export function styled<const S extends string, V extends Variants<S>>(
  config: Config<S, V>,
) {
  const {
    slots,
    base = {},
    variants = {},
    defaultVariants = {},
    compoundVariants = [],
  } = config;

  const computeStyles = (props?: DefaultVariants<S, V>): Base<S> => {
    const resolvedProps = { ...defaultVariants };

    // Override only explicitly defined variant props, keeping defaults untouched
    if (props) {
      for (const key in props) {
        const value = props[key];
        if (value !== undefined) {
          //@ts-ignore
          resolvedProps[key] = value;
        }
      }
    }

    const result = {} as Record<S, Styles>;

    for (const slot of slots) {
      result[slot] = set(slot, base, variants, compoundVariants, resolvedProps);
    }

    return result;
  };

  const cachedComputeStyles = cache(computeStyles);

  return cachedComputeStyles;
}

export function createNVA<Tokens extends Theme>({
  theme,
}: { theme?: Tokens } = {}) {
  // Overloads
  function styled<S extends string, V extends Variants<S>>(
    config: Config<S, V>,
  ): (props?: DefaultVariants<S, V>) => Base<S>;

  function styled<const S extends string, V extends Variants<S>>(
    configFactory: (defineConfig: DefineConfig, theme: Tokens) => Config<S, V>,
  ): (props?: DefaultVariants<S, V>) => Base<S>;

  function styled<const S extends string, V extends Variants<S>>(
    configOrFactory:
      | Config<S, V>
      | ((defineConfig: DefineConfig, theme: Tokens) => Config<S, V>),
  ): (props?: DefaultVariants<S, V>) => Base<S> {
    const defineConfig: DefineConfig = (config) => config;

    const config =
      typeof configOrFactory === "function"
        ? configOrFactory(defineConfig, theme!)
        : configOrFactory;

    const {
      slots,
      base = {} as Base<S>,
      variants = {} as V,
      defaultVariants = {},
      compoundVariants = [],
    } = config;

    const computeStyles = (props?: DefaultVariants<S, V>): Base<S> => {
      const resolvedProps = { ...defaultVariants };

      if (props) {
        for (const key in props) {
          if (props[key] !== undefined) {
            // @ts-ignore
            resolvedProps[key] = props[key];
          }
        }
      }

      const result = {} as Base<S>;

      for (const slot of slots) {
        result[slot] = set(
          slot,
          base,
          variants,
          compoundVariants,
          resolvedProps,
        );
      }

      return result;
    };

    return cache(computeStyles);
  }

  return {
    theme: theme!,
    styled,
  };
}
