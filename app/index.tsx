import React, { useState } from "react";
import { Link, router } from "expo-router";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    setLoading(true);
    try {
      const data = await auth().createUserWithEmailAndPassword(email, password);
      console.log("User account created & signed in!", data);
    } catch (error) {
      console.error("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  const signin = async () => {
    setLoading(true);
    try {
      const data = await auth().signInWithEmailAndPassword(email, password);
      console.log("User signed in!", data);
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={require("../assets/images/onboarding.png")}
          style={{ width: "100%", height: "66%" }}
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="font-rubik uppercase text-center text-base text-black-200">
            Welcome to Restate
          </Text>
          <Text className="font-rubik-bold text-center text-3xl text-black-200 mt-2">
            Let's Get You Closer To {"\n"}
            <Text className="text-primary-100">Your Ideal Home</Text>
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="bg-primary-100 shadow-zinc-300 shadow-md py-3 rounded-lg flex-row justify-center items-center w-full gap-x-4 mt-24"
            activeOpacity={1.2}
          >
            <Text className="text-lg font-rubik-medium text-white">
              GET STARTED
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
