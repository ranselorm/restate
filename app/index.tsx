import React, { useState } from "react";
import { Link } from "expo-router";
import { ActivityIndicator, Button, Text, TextInput, View } from "react-native";
import auth from "@react-native-firebase/auth";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const signup = async () => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log("User account created & signed in!");
    } catch (error) {
      console.error("Error signing up:", error);
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

      <View>
        <Text>User Signup</Text>
        <TextInput
          className=""
          placeholder="email"
          value={email}
          autoCapitalize="none"
          onChangeText={setEmail}
        />
        <TextInput
          className=""
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {loading ? <ActivityIndicator /> : <Button title="Submit" />}
    </View>
  );
};

export default Home;
