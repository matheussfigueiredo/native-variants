import { native-variants, type VariantProps } from "native-variants";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const buttonnative-variants = native-variants({
  slots: ["root", "text"],
  base: {
    root: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    text: {
      color: "white",
      textAlign: "center",
    },
  },
  variants: {
    variant: {
      solid: {
        root: {
          backgroundColor: "#ff0006",
        },
        text: {
          color: "white",
        },
      },
      ghost: {
        root: {
          backgroundColor: "transparent",
        },
        text: {
          color: "#ff0006",
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
  compoundVariants: [
    {
      variant: "ghost",
      css: {
        root: {
          borderWidth: 1,
          borderColor: "#fff006",
        },
      },
    },
  ],
});

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonnative-variants> {}

export const Button = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  ButtonProps
>(({ children, variant, ...props }, ref) => {
  const { root, text } = buttonnative-variants({ variant });

  return (
    <TouchableOpacity {...props} ref={ref} style={root}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
});

Button.displayName = "Button";
