import React, { createContext, useContext, useMemo } from "react";

type GenericContext<T> = {
  props: T;
};

export const createCTX = <T,>() => {
  const Context = createContext<GenericContext<T> | undefined>(undefined);

  const CTXProvider = ({
    children,
    props,
  }: React.PropsWithChildren & {
    props: T;
  }) => {
    const value = useMemo(() => ({ props }), [props]);

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useCTX = (): T | undefined => {
    const context = useContext(Context);

    if (!context) {
      return undefined;
    }

    return context.props as T;
  };

  return {
    CTXProvider,
    useCTX,
  };
};
