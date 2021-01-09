import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
const Stack = createStackNavigator();

function Router() {
  function LogoTitle() {
    return <Text style={styles.title}>Akdeniz Asistan</Text>;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/*<RootStackScreen />*/}
        <MainTabScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Quicksand',
    fontSize: 42,
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 53,
    letterSpacing: 0,
    textAlign: 'center',
    flex: 1,
  },
});
export default Router;
