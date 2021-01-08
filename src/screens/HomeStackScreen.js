import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBar from '../components/HeaderBar';

const HomeStack = createStackNavigator();

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};
const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'rgba(244, 115, 37, 0.81)',
        height: 73,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitle: (props) => <HeaderBar {...props} />,
    }}>
    <HomeStack.Screen name="Home" component={SettingsScreen} />
    <HomeStack.Screen
      name="refectory"
      component={SettingsScreen}
      options={{
        title: 'Ooverview',
      }}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
