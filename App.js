import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './navigators/AppNavigator';


function App() {
  return (
   // <Text>ㅁㄴㅇㄹ</Text>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;