import * as React from 'react';
import {StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useSafeArea} from 'react-native-safe-area-context';
import HomeStackScreen from './HomeStackScreen';
import RefectoryStackScreen from './RefectoryStackScreen';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = ({navigation}) => {
  const windowWidth = useWindowDimensions().width;
  const insets = useSafeArea();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '',
        width: windowWidth,
      }}
      tabBarOptions={{
        style: {
          height: 60 + insets.bottom,
        },
        tabStyle: {
          height: 60,
        },
        height: 60 + insets.bottom,
        showLabel: false,
        activeBackgroundColor: 'rgba(244, 115, 37, 0.81)',
        inactiveBackgroundColor: '#F47325',
      }}>
      <Tab.Screen
        name="Home"
        barStyle={{
          textAlign: 'center',
          alignItems: 'center',
        }}
        component={HomeStackScreen}
        showLabel={false}
        options={{
          tabBarLabel: 'refectory',
          tabBarIcon: () => (
            <Image
              style={{height: 40, width: 40}}
              source={require('../assets/homePageIcon.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="refectory"
        barStyle={{backgroundColor: '#D1E5F8', textAlign: 'center'}}
        component={RefectoryStackScreen}
        options={{
          tabBarLabel: 'refectory',
          tabBarIcon: () => (
            <Image
              style={{height: 40, width: 40}}
              source={require('../assets/refectoryIcon.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="lectures"
        barStyle={{textAlign: 'center'}}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'refectory',
          tabBarIcon: () => (
            <Image
              style={{height: 40, width: 40}}
              source={require('../assets/lecturersIcon.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="advertisement"
        barStyle={{textAlign: 'center'}}
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'refectory',
          tabBarIcon: () => (
            <Image
              style={{height: 40, width: 40}}
              source={require('../assets/advertisingIcon.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabScreen;
