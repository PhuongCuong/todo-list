import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Login from './src/component/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/component/Home';
import Create from './src/component/Create';
import Update from './src/component/Update';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  const [search, setsearch] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{
          headerShown: false
        }} />
        <Stack.Screen name='create' component={Create} />
        <Stack.Screen name='update' component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
