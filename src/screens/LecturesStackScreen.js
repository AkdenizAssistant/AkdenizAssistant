import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderBar from '../components/HeaderBar';
const LecturesStack = createStackNavigator();

const RefectoryStackScreen = ({navigation}) => (
  <LecturesStack.Navigator
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
    <LecturesStack.Screen name="RefectoryScreen" component={} />
  </LecturesStack.Navigator>
);

export default RefectoryStackScreen;
