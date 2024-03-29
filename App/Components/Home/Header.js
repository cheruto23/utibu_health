import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || isSignedIn) {
    return null;
  }
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 50, height: 50, borderRadius: 95 }}
        />
        <View>
          <Text>Hello,👋</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {user.fullName}
          </Text>
        </View>
      </View>
      <Ionicons name="notifications-outline" size={24} color="black" />
    </View>
  );
}
