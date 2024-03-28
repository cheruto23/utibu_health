import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import SignInWithOAuth from '../Components/SignInWithOAuth'

export default function Login() {
  return (
    <View style = {{padding:20, alignItems:'center'}}>
      <Text>Order your medicine</Text>
      <View>
        <SignInWithOAuth/>
      </View>
    </View>
  )
}