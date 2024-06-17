import { LinearGradient } from "expo-linear-gradient";
import React, { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

export const GradientBackground = ({ children }: PropsWithChildren) => {
  return (
    <LinearGradient
      colors={["rgba(96,31,235,0.1)", "transparent"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 0.7 }}
      locations={[0.3, 1]}
      style={styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
