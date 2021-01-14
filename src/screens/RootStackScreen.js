import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Text, StyleSheet} from 'react-native';
import SignInScreen from './SignInScreen';
import SignUpScreen from "./SignUpScreen";

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  function LogoTitle() {
    return <Text style={styles.title}>Akdeniz Asistan</Text>;
  }

  return (
    <RootStack.Navigator headerMode="screen" initialRouteName="SignUpScreen">
      <RootStack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          title: 'Akdeniz Asistan',
          headerStyle: {
            backgroundColor: 'rgba(244, 115, 37, 0.81)',
            height: 73,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <RootStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: 'Akdeniz Asistan',
          headerStyle: {
            backgroundColor: 'rgba(244, 115, 37, 0.81)',
            height: 73,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
    </RootStack.Navigator>
  );
};
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
export default RootStackScreen;
