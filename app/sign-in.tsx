import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { router } from "expo-router";

const SignIn = () => {
  const handleLogin = async () => {
    console.log("Login with Google");
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        {/* <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        /> */}
        {/* <View className="px-10">
          <Text className="font-rubik uppercase text-center text-base text-black-200">
            Welcome to Restate
          </Text>
          <Text className="font-rubik-bold text-center text-3xl text-black-200 mt-2">
            Let's Get You Closer To {"\n"}
            <Text className="text-primary-100">Your Ideal Home</Text>
          </Text>
          <Text className="text-center mt-10 font-rubik text-black-200 text-lg ">
            Login to Restate
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-zinc-300 shadow-md py-2 rounded-full flex-row justify-center items-center w-full gap-x-4 mt-5"
          >
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="text-lg font-rubik-medium text-black-200">
              Continue with Google
            </Text>
          </TouchableOpacity>
        </View> */}
        {/* <KeyboardAvoidingView > */}
        <View className="px-10 flex-1 justify-between items-center py-10 pb-20">
          <View className="mt-10">
            <Text>Login</Text>
          </View>
          <View className="w-full">
            <View>
              <Text className="text-base font-rubik text-black-200 font-bold mb-2">
                E-Mail
              </Text>
              <TextInput
                placeholder="email"
                autoCapitalize="none"
                className="border border-gray-300 pl-4 pr-3 py-3 rounded-lg text-base font-rubik"
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </View>
            <View>
              <Text className="text-base font-rubik text-black-200 font-bold my-2">
                Password
              </Text>

              <TextInput
                placeholder="password"
                autoCapitalize="none"
                className="border border-gray-300 pl-4 pr-3 py-3 rounded-md text-base font-rubik"
                placeholderTextColor="#A0A0A0"
                secureTextEntry
                textContentType="password"
              />
            </View>
            {/* <Pressable className="bg-primary-100 shadow-zinc-300 shadow-md py-3 rounded-md flex-row justify-center items-center w-full gap-x-4 mt-10">
              <Text>Login</Text>
            </Pressable> */}
            <TouchableOpacity
              // onPress={() => router.push("/sign-in")}
              className="bg-primary-100 shadow-zinc-300 shadow-md py-3 rounded-md flex-row justify-center items-center w-full gap-x-4 mt-8"
              activeOpacity={1.2}
            >
              <Text className="text-base font-rubik-medium text-white">
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
