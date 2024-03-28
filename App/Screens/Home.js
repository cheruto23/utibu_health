import { View,Text, Button } from "react-native-web";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { SignOutButton } from "@clerk/clerk-react";

export default function Home(){
    const { isLoaded,signOut } = useAuth();
    return (
        <View>
            <Button title='SignOut'
             onPress={()=>signOut()}></Button>
            <Text>Home</Text>
        </View>
    )
}