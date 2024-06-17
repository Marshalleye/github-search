import { openBrowserAsync } from "expo-web-browser";
import { Platform, Pressable, StyleSheet, Text } from "react-native";

type Props = { href: string };

export function ExternalLink({ href }: Props): React.ReactElement {
  return (
    <Pressable
      style={styles.repoButton}
      onPress={async (event) => {
        if (Platform.OS !== "web") {
          event.preventDefault();
          await openBrowserAsync(href);
        }
      }}
    >
      <Text style={styles.repoBtnText}>Go to Repo</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  repoButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1F6FEB",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  repoBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "sf-bold",
  },
});
