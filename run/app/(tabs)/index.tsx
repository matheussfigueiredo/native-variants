import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { List, ListItem } from "@/components/list";
import { Typography } from "@/components/typography";
import { merge } from "@/utils/merge";
import { nv } from "@/utils/nv";
import React from "react";
import { Linking, View } from "react-native";

export default function HomeScreen() {
  const styles = screenRecipe();

  const handleTakeToDocumentation = () => {
    Linking.openURL(
      "https://native-variants.vercel.app/docs/getting-started/introduction",
    );
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <Badge variant="blank">v0.1.24</Badge>
        <Typography as="headline">Native Variants</Typography>
        <Typography as="small">
          Simplifying and Streamlining Style Variations with StyleSheet in React
          Native.
        </Typography>
        <List style={styles.list}>
          <ListItem>
            <Typography style={merge(styles.opaque_text, styles.list_text)}>
              Multi-Slot Styling: Define styles for multiple slots (e.g., root,
              text).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography style={merge(styles.opaque_text, styles.list_text)}>
              Variant Management: Easily handle variations like solid or ghost.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography style={merge(styles.opaque_text, styles.list_text)}>
              Default Variants: Define fallback styles for missing
              configurations.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography style={merge(styles.opaque_text, styles.list_text)}>
              Compound Variants: Apply conditional styles based on combined
              properties.
            </Typography>
          </ListItem>
        </List>

        <Button
          style={styles.action}
          size="sm"
          variant="link"
          onPress={handleTakeToDocumentation}
        >
          Docs
        </Button>
      </View>

      <Typography as="small" style={styles.copyright}>
        Created by{" "}
        <Typography style={merge(styles.opaque_text, styles.copyright)}>
          matheussatoshi
        </Typography>{" "}
        💚
      </Typography>
    </View>
  );
}

const screenRecipe = nv({
  slots: [
    "root",
    "list",
    "list_text",
    "action",
    "content",
    "copyright",
    "opaque_text",
  ],
  base: {
    root: {
      flex: 1,
      paddingHorizontal: 12,
      paddingVertical: 24,
      backgroundColor: "#111111",
    },
    action: {
      alignSelf: "center",
      marginTop: 14,
    },
    content: {
      display: "flex",
      flex: 1,
      gap: 4,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    list: {
      paddingLeft: 10,
      paddingRight: 26,
      marginTop: 14,
    },
    list_text: {
      fontSize: 14,
    },
    opaque_text: {
      color: "#909090",
    },
    copyright: {
      textAlign: "center",
      width: "100%",
      fontSize: 12,
    },
  },
});
