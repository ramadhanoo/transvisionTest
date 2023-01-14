import {Navigation} from 'react-native-navigation';

import App from '../Screens/AppStack/Appstack';
import Home from '../Screens/Home/Home';
import Detail from '../Screens/Detail/Detail';

import ReduxWrapper from './ReduxWrapper';
import {NAVIGATION_NAME} from './NavigationName';

function RegisterComponentWrapper(identity, component) {
  Navigation.registerComponent(
    identity,
    () => ReduxWrapper(component),
    () => component,
  );
}

export default function () {
  RegisterComponentWrapper(NAVIGATION_NAME.APP, App);
  RegisterComponentWrapper(NAVIGATION_NAME.HOME.home, Home);
  RegisterComponentWrapper(NAVIGATION_NAME.HOME.detail, Detail);
}
