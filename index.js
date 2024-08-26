/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppNavigator from './Navigation/AppNavigator';

AppRegistry.registerComponent(appName, () => AppNavigator);
