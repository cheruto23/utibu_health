import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
import Login from './App/Screens/Login';
// import SignInWithOAuth from './App/Components/SignInWithOAuth';
// import Home from './App/Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation';

export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_b3JnYW5pYy1ibG93ZmlzaC05OS5jbGVyay5hY2NvdW50cy5kZXYk"}>
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
    <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Login/>
        </SignedOut>
    </SafeAreaView>
  </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
