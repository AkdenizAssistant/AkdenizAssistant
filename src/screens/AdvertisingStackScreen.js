import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBar from '../components/HeaderBar';
const AdvertisingStack = createStackNavigator();

const AdvertisingStackScreen = ({navigation}) => (
  <AdvertisingStack.Navigator
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
    <AdvertisingStack.Screen name="" component={} />
  </AdvertisingStack.Navigator>
);

export default AdvertisingStackScreen;
