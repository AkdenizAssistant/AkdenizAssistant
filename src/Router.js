import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './screens/SignInScreen';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackScreen from './screens/RootStackScreen';
import MainTabScreen from './screens/MainTabScreen';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context/src/SafeAreaContext';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './screens/DrawerContent';
import {AuthContext} from './components/Context';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Router() {
  function LogoTitle() {
    return <Text style={styles.title}>Akdeniz Asistan</Text>;
  }
  const initialState = {
    isLogin: false,
  };
  // const [isLogin, setIsLogin] = React.useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLogin: true,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLogin: false,
        };
      default:
        return state;
    }
  };

  const value = React.useContext(AuthContext);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      <SafeAreaProvider>
        <NavigationContainer>
          {state.isLogin ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}>
              <Drawer.Screen name="Main" component={MainTabScreen} />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
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
