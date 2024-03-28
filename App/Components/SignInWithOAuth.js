import React from "react";
import * as WebBrowser from "expo-web-browser";
// import { Button } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../Hooks/useWarmUpBrowser";
import { TouchableOpacity } from "react-native-web";

 
WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
 
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <TouchableOpacity 
    onPress={onPress}>
        <Text >Login With Google</Text>
    </TouchableOpacity>
  );
}
export default SignInWithOAuth;