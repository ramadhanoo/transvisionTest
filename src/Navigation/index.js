import {Navigation as RNNavigation} from 'react-native-navigation';
import NavigationServices from './NavigationServices';
import RegisterComponent from './RegisterComponent';
import {NAVIGATION_NAME} from './NavigationName';
import DefaultOptions from './Styles';

RegisterComponent();

RNNavigation.events().registerComponentDidAppearListener(nav => {
  NavigationServices.setActiveNavigation(nav);
});

RNNavigation.setDefaultOptions({
  statusBar: DefaultOptions.statusBar,
  topBar: DefaultOptions.topBar,
  bottomTabs: DefaultOptions.bottomTabs,
  bottomTab: DefaultOptions.bottomTab,
  layout: DefaultOptions.layout,
  animations: DefaultOptions.animations,
  navigationBar: DefaultOptions.navigationBar,
});

RNNavigation.events().registerAppLaunchedListener(() => {
  RNNavigation.setRoot({
    root: {
      stack: {
        id: 'root',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.APP,
            },
          },
        ],
      },
    },
  });
});
