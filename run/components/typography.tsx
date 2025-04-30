import { merge } from "@/utils/merge";
import { nv } from "@/utils/nv";
import { VariantProps } from "@/utils/props";
import { Text } from "react-native";

const typographyVariants = nv({
  slots: ["root"],
  base: {
    root: {
      color: "#efefef",
    },
  },
  variants: {
    as: {
      display: {
        root: {
          fontSize: 30,
          fontWeight: "700",
        },
      },
      headline: {
        root: {
          fontSize: 28,
          width: "100%",
          fontWeight: "600",
          borderBottomWidth: 0.4,
          borderBottomColor: "#dedede50",
          paddingVertical: 10,
          marginBottom: 8,
        },
      },
      title: {
        root: {
          fontSize: 20,
          fontWeight: "700",
        },
      },
      subtitle: {
        root: {
          fontSize: 18,
          fontWeight: "400",
          color: "#dfdfdf",
        },
      },
      body: {
        root: {
          fontSize: 16,
          fontWeight: "300",
          color: "#808080",
        },
      },
      small: {
        root: {
          fontSize: 14,
          fontWeight: "400",
        },
      },
    },
  },
  defaultVariants: {
    as: "body",
  },
});

function Typography({
  as,
  style,
  ...props
}: React.ComponentProps<typeof Text> &
  VariantProps<typeof typographyVariants>) {
  const { root } = typographyVariants({ as });

  return <Text style={merge(root, style)} {...props} />;
}

export { Typography, typographyVariants };
