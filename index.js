/**
 * @format
 */
import Router from './src/Router';
import SignInScreen from "./src/screens/SignInScreen";
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
