import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/LoginScreen';
import SignUpScreen from './src/components/SignUpScreen';
import MainMenuScreen from './src/components/MainMenuScreen';
import NewAnimalScreen from './src/components/NewAnimalScreen';
import AnimalDetailScreen from './src/components/AnimalDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} />
        <Stack.Screen name="NewAnimal" component={NewAnimalScreen} />
        <Stack.Screen name="AnimalDetail" component={AnimalDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
