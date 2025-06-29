import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import icons from "@/constants/icons";

const SignIn = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleAuth = () => {
    setIsRegister(!isRegister);
  };

  const handleLogin = async () => {
    console.log("Logging in...");
    // Add login logic here
  };

  const handleRegister = async () => {
    console.log("Registering...");
    // Add register logic here
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <TouchableOpacity
        onPress={() => router.back()}
        className="px-10 mt-5"
        activeOpacity={0.8}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>

      <ScrollView contentContainerClassName="h-full">
        <View className="px-10 flex-1 justify-between items-center py-10 pb-20">
          <View className="mt-10">
            <Image
              source={images.icon}
              className="w-32 h-20 justify-center text-center mt-10"
              resizeMode="contain"
            />
            <Text
              className="text-center font-rubik mt-5"
              style={{ fontSize: 20 }}
            >
              {isRegister ? "Create an account" : "Login to continue"}
            </Text>
          </View>

          <View className="w-full">
            <View>
              <Text className="text-base font-rubik text-black-200 font-bold mb-2">
                E-Mail
              </Text>
              <TextInput
                placeholder="Enter your e-mail"
                autoCapitalize="none"
                className="border border-gray-300 pl-4 pr-3 py-3 rounded-lg text-base font-rubik"
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>

            <View>
              <Text className="text-base font-rubik text-black-200 font-bold mb-2 mt-4">
                Password
              </Text>
              <TextInput
                placeholder="Enter your password"
                autoCapitalize="none"
                className="border border-gray-300 pl-4 pr-3 py-3 rounded-lg text-base font-rubik"
                placeholderTextColor="#A0A0A0"
                secureTextEntry
                textContentType="password"
              />
            </View>

            <TouchableOpacity
              onPress={isRegister ? handleRegister : handleLogin}
              className="bg-primary-100 py-3 rounded-lg justify-center items-center w-full mt-8"
              activeOpacity={1.2}
            >
              <Text className="text-base font-rubik-medium text-white">
                {isRegister ? "SIGN UP" : "LOGIN"}
              </Text>
            </TouchableOpacity>

            {!isRegister && (
              <TouchableOpacity>
                <Text className="font-rubik-bold mt-5 justify-end text-right">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            )}

            <View className="justify-center items-center mt-5">
              <Text className="font-rubik text-lg">or</Text>

              <TouchableOpacity className="mt-5 border-primary-100 border py-3 rounded-lg justify-center items-center w-full flex-row gap-x-4">
                <Image source={icons.google} className="w-5 h-5 mr-3" />
                <Text className="uppercase items-center justify-center text-base font-rubik-medium text-black-200 flex-row gap-x-4 space-x-4">
                  Continue with Google
                </Text>
              </TouchableOpacity>

              <View className="flex-row justify-center items-center mt-5 gap-x-2">
                <Text className="font-rubik">
                  {isRegister ? "Already have an account?" : "Not Registered?"}
                </Text>
                <TouchableOpacity onPress={toggleAuth} activeOpacity={0.8}>
                  <Text className="font-rubik-bold text-primary-100">
                    {isRegister ? "Login" : "Signup"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
