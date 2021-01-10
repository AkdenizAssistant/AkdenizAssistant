import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBar from '../components/HeaderBar';
import RefectoryScreen from './RefectoryScreen';
const RefectoryStack = createStackNavigator();

const RefectoryStackScreen = ({navigation}) => (
  <RefectoryStack.Navigator
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
    <RefectoryStack.Screen name="RefectoryScreen" component={RefectoryScreen} />
  </RefectoryStack.Navigator>
);

export default RefectoryStackScreen;
