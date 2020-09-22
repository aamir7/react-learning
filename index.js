/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/index';
import {displayName as appDisplayName} from './app.json';

AppRegistry.registerComponent(appDisplayName, () => App);
export default App;