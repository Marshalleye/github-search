import { Octicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";

const SearchInput = ({ onChangeText, ...props }: TextInputProps) => {
  return (
    <View style={styles.searchContainer}>
      <Octicons
        name="search"
        size={24}
        color={"#000"}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
        {...props}
      />
      {props.value ? (
        <Octicons
          name="x"
          style={styles.clearIcon}
          size={18}
          color={"#A4A4A4"}
          onPress={() => (onChangeText ? onChangeText("") : undefined)}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    height: 48,
  },
  searchIcon: {
    marginRight: 12,
    marginLeft: 12,
  },
  searchInput: {
    flex: 1,
    fontFamily: "sf-regular",
    fontSize: 14,
  },
  clearIcon: {
    marginLeft: 8,
    marginRight: 12,
  },
});

export default React.memo(SearchInput);
