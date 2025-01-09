import { makeStyles } from "@/native-variants/functions/make-styles";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

export type Theme = {
  primary: string;
  secondary: string;
};

const theme: Theme = {
  primary: "#000dff",
  secondary: "#fff000",
};

export type MakeProps<T extends (...args: any[]) => any> = T extends (
  props: infer P,
) => any
  ? Omit<P, "theme">
  : never;

const buttonVariants = makeStyles(({ theme }) => ({
  slots: ["root", "text"],
  base: {
    root: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      width: "100%",
      borderRadius: 6,
      borderWidth: 0.5,
      borderColor: "#00000020",
    },
    text: {
      textAlign: "center",
      fontWeight: "600",
    },
  },
  variants: {
    variant: {
      solid: {
        root: {
          backgroundColor: theme?.primary,
          borderColor: theme?.primary,
        },
        text: {
          color: "#ffffff",
        },
      },
      ghost: {
        root: {
          backgroundColor: "transparent",
          borderColor: theme?.primary,
        },
        text: {
          color: theme?.primary,
        },
      },
    },
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
  defaultVariants: {
    variant: "solid",
  },
}));

export interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
    MakeProps<typeof buttonVariants> {}

export const CustomButton = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  ButtonProps
>(({ children, variant, disabled, ...props }, ref) => {
  const { root, text } = buttonVariants({
    theme,
    isDisabled: disabled,
    variant,
  });

  return (
    <TouchableOpacity {...props} ref={ref} disabled={disabled} style={[root]}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
});

CustomButton.displayName = "CustomButton";
