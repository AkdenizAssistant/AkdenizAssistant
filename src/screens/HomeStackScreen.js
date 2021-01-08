import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <Text style={styles.menu}>menu</Text>
      <Text style={styles.title}>Akdeniz Asistan</Text>
      <Text style={styles.notification}>notification</Text>
      <Text style={styles.profile}>profile</Text>
    </View>
  );
}
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
      headerTitle: (props) => <LogoTitle {...props} />,
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
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Quicksand',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: 53,
    letterSpacing: 0,
    textAlign: 'center',
    flex: 256,
  },
  notification: {
    flex: 42,
  },
  menu: {
    flex: 56,
  },
  profile: {
    flex: 42,
  },
});
