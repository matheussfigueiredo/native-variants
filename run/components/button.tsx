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
      backgroundColor: "red",
    },
    text: {
      color: "#ffffff",
      textAlign: "center",
      fontWeight: "600",
    },
  },
  variants: {
    isDisabled: {
      true: {
        root: {
          opacity: 0.25,
          backgroundColor: "#505050",
        },
        text: {
          color: "#000000",
        },
      },
    },
  },
});

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  ButtonProps
>(({ children, disabled, ...props }, ref) => {
  const { root, text } = buttonVariants({ isDisabled: disabled });

  return (
    <TouchableOpacity {...props} ref={ref} disabled={disabled} style={[root]}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
});

Button.displayName = "Button";
