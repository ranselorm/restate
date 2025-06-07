import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text className="text-4xl text-red-400 uppercase">Home</Text>
      <Link href="/sign-in" className="text-blue-500 underline bg-red-300">
        Login
      </Link>
    </View>
  );
};

export default Home;
