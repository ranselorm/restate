import React, { useState } from "react";
import { Link, router } from "expo-router";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";
import auth from "@react-native-firebase/auth";

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
    <View>
      <Text className="text-4xl text-red-400 uppercase">Home</Text>
      <Link href="/sign-in" className="text-blue-500 underline bg-red-300">
        Login
      </Link>

      <View className="px-6">
        <Text>User Signup</Text>
        <TextInput
          className="border border-gray-300 rounded p-2 mb-4"
          placeholder="email"
          value={email}
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <TextInput
          className="border border-gray-300 rounded p-2 mb-4"
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Submit" onPress={signin} />
      )}
    </View>
  );
};

export default Home;
