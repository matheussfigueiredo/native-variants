import { nv } from "@/native-variants/functions/nv";
import { VariantProps } from "@/native-variants/types/nv-props";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const buttonVariants = nv({
  slots: ["root", "text"],
  base: {
    root: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      width: "100%",
    },
    text: {
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "600",
    },
  },
  variants: {
    variant: {
      destructive: {
        root: {
          backgroundColor: "#ff0006",
        },
      },
      ghost: {
        root: {
          backgroundColor: "#39bd79",
        },
      },
    },
    isDisabled: {
      true: {
        root: {
          opacity: 50,
        },
      },
      false: {
        root: {
          opacity: 100,
        },
      },
    },
  },
  defaultVariants: {
    variant: "destructive",
    isDisabled: true,
  },
});

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  ButtonProps
>(({ children, disabled, variant, ...props }, ref) => {
  const { root, text } = buttonVariants({
    variant,
    isDisabled: disabled,
  });

  return (
    <TouchableOpacity {...props} ref={ref} style={[root]}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
});

Button.displayName = "Button";
