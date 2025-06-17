import { View, Text, Pressable } from "react-native";
import React from "react";
import auth from "@react-native-firebase/auth";

const Home = () => {
  return (
    <View className="">
      <Text>Home screen</Text>
      <Pressable
        className="text-xl uppercase text-green-700"
        onPress={() => auth().signOut()}
      >
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default Home;
