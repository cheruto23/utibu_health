import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";

export default function Search({setSearchText}) {
    const [searchInput,setSearchInput] = useState();
  return (
    <View style={{ marginTop: 15 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          borderRadius: 0.8,
        }}
      >
        <Ionicons name="search" size={24} color="black" />
        <TextInput placeholder="search" 
            onChangeText ={(value)=>setSearchInput(value)}
            onSubmit ={()=>setSearchText(searchInput)}
            style = {{width:"100%"}}
        />
      </View>
    </View> 
  );
}
