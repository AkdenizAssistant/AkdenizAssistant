import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackScreen from './screens/RootStackScreen';
const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
export default Router;
