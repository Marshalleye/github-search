import { RepositoryData } from "@/types";
import { highlightQueryText } from "@/utils/highlightText";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type RepositoryItemProps = {
  item: RepositoryData;
  onPress: (item: RepositoryData) => void;
  searchQuery: string;
};

export const RepositoryItem = ({
  item,
  onPress,
  searchQuery,
}: RepositoryItemProps): React.ReactElement => {
  return (
    <View style={styles.repoItem}>
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.repoInfo}>
          <Image
            source={{ uri: item.owner.avatar_url }}
            style={styles.repoImage}
          />
          <Text style={styles.repoName} textBreakStrategy="highQuality">
            {highlightQueryText(item.full_name, searchQuery).map(
              (part, index) => (
                <Text
                  key={index}
                  style={part.highlight ? styles.highlight : null}
                >
                  {part.text}
                </Text>
              )
            )}
          </Text>
        </View>

        <View>
          <Text style={styles.repoDescription} textBreakStrategy="balanced">
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  repoItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#FBFBFB",
  },
  repoInfo: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    marginBottom: 10,
  },
  repoImage: {
    width: 24,
    height: 24,
    borderRadius: 6,
    marginRight: 10,
  },
  repoName: {
    fontSize: 14,
    fontFamily: "sf-medium",
  },
  repoDescription: {
    fontSize: 14,
    color: "#242424",
  },
  highlight: {
    fontFamily: "sf-bold",
  },
});
