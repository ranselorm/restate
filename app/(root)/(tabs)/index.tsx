import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home screen</Text>
      <Link href="/sign-in" className="text-3xl">
        Sign In
      </Link>
    </View>
  );
};

export default Home;
