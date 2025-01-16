import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View className="bg-primary-100 flex-1">
      <Text>Home screen</Text>
      <Link href="/sign-in" className="text-xl uppercase text-green-700">
        Sign In
      </Link>
      ===
    </View>
  );
};

export default Home;
