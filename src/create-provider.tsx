import React from "react";

type GenericVariantsContext<T> = {
  variants: T;
};

export const createVariantsProvider = <T,>() => {
  const Context = React.createContext<GenericVariantsContext<T> | undefined>(
    undefined,
  );

  const Provider = ({
    children,
    variants,
  }: {
    variants: T;
    children: React.ReactNode;
  }) => {
    const value = React.useMemo(() => ({ variants }), [variants]);

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useVariants = () => {
    const context = React.useContext(Context);

    if (!context) {
      throw new Error("useVariants must be used within its Provider");
    }

    return context.variants;
  };

  return {
    Provider,
    useVariants,
  };
};
