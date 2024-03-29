import { View, Text, Button } from "react-native-web";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { SignOutButton } from "@clerk/clerk-react";
import { SearchBar } from "react-native-screens";

export default function Home() {
  const { isLoaded, signOut } = useAuth();
  return (
    <View style={{ padding: 22, marginTop: 25 }}>
        <SearchBar setSearchText = {(value)=>console.log(value)}/>
      <Button title="SignOut" onPress={() => signOut()}></Button>
      <Text>Home</Text>
    </View>
  );
}
