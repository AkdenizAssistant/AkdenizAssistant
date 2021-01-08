import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeStackScreen from './HomeStackScreen';

const HomeStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function LogoTitle() {
  return <Text style={styles.title}>Akdeniz Asistan</Text>;
}
export default function MainTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        height: 80,
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#F47325',
      }}>
      <Tab.Screen
        name="Home"
        barStyle={{
          backgroundColor: '#F47325',
          textAlign: 'center',
          alignItems: 'center',
        }}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="refectory"
        barStyle={{backgroundColor: '#D1E5F8', textAlign: 'center'}}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'refectory',
        }}
      />
      <Tab.Screen
        name="lectures"
        barStyle={{height: 80, backgroundColor: '#F47325', textAlign: 'center'}}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="advertisement"
        barStyle={{height: 80, backgroundColor: '#F47325', textAlign: 'center'}}
        component={HomeStackScreen}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Quicksand',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 53,
    letterSpacing: 0,
    textAlign: 'center',
    flex: 1,
  },
});
