import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSignupScreens/WelcomeScreen';
import LoginScreen from './src/screens/LoginSignupScreens/LoginScreen';
import SignupScreen from './src/screens/LoginSignupScreens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcomepage'>
          <Stack.Screen name="Welcomepage" component={WelcomeScreen}
              options={{
                headerShown: false
              }}
          />
          <Stack.Screen name="SignUp" component={SignupScreen}
              options={{
              headerShown: false
          }}/>
          <Stack.Screen name="Login" component={LoginScreen}
              options={{
                headerShown: false
        }} />
      <Stack.Screen name="Home" component={HomeScreen}
        options={{
        headerShown: false
      }}/>

    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
