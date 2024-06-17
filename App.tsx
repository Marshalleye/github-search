import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { Details, Search } from "@/screens";
import { SCREENS } from "@/shared";

import { RootStackParamList } from "@/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded, error] = useFonts({
    "sf-regular": require("@/assets/fonts/SF-Pro-Regular.otf"),
    "sf-medium": require("@/assets/fonts/SF-Pro-Medium.otf"),
    "sf-bold": require("@/assets/fonts/SF-Pro-Bold.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name={SCREENS.SEARCH}
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SCREENS.DETAILS}
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
