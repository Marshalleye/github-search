import React, { useEffect, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

import Octicons from "@expo/vector-icons/Octicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { getReposByQuery } from "@/api";
import { GradientBackground, RepositoryItem, SearchInput } from "@/components";
import { useDebounce } from "@/hooks";

import { RepositoryData, RootStackParamList } from "@/types";

export const Search = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Search">) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery, debouncedQuery] = useDebounce("", 3);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<RepositoryData[]>([]);
  const [renderData, setRenderData] = useState<(RepositoryData | number)[]>([
    1,
  ]);
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    if (debouncedQuery)
      getReposByQuery(debouncedQuery).then((repos) => setData(repos));
    else setData([]);
  }, [debouncedQuery]);

  useEffect(() => {
    setRenderData([1, ...data]);
  }, [data]);

  const handleReachedEnd = () => {
    if (isLoading) return;
    setIsLoading(true);
    getReposByQuery(debouncedQuery, page + 1).then((repos) => {
      setData([...data, ...repos]);
      setIsLoading(false);
      setPage(page + 1);
    });
  };

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setShowBg(offsetY >= 72);
  };

  return (
    <GradientBackground>
      <SafeAreaView>
        <Animated.FlatList
          scrollEventThrottle={16}
          onScroll={handleScroll}
          data={renderData}
          renderItem={({ item, index }) => {
            return item === 1 ? (
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 16,
                  backgroundColor: showBg ? "#E3DCF0" : "transparent",
                  borderBottomWidth: showBg ? 1 : 0,
                  borderColor: "#D9D2E5",
                }}
              >
                <SearchInput value={query} onChangeText={setQuery} />
              </View>
            ) : (
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingBottom: 16,
                  paddingTop: index === 1 ? 8 : 0,
                }}
              >
                <RepositoryItem
                  item={item as RepositoryData}
                  searchQuery={query}
                  onPress={(repoData) =>
                    navigation.push("Details", { repoData })
                  }
                />
              </View>
            );
          }}
          onEndReached={handleReachedEnd}
          stickyHeaderIndices={[1]}
          contentContainerStyle={{ paddingBottom: 30 }}
          ListHeaderComponentStyle={styles.headerContainer}
          ListHeaderComponent={
            <View style={styles.header}>
              <Octicons name="mark-github" size={40} color="black" />
              <Text style={styles.headerText}>GitHub Repo Search</Text>
            </View>
          }
        />
      </SafeAreaView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  headerContainer: {
    display: "flex",
    paddingTop: 24,
    paddingHorizontal: 30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontFamily: "sf-bold",
  },
});
