import {Navigation} from 'react-native-navigation';
import {NAVIGATION_NAME} from './NavigationName';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import {Colors} from '../Themes';

async function prepareIcons() {
  const icons = await Promise.all([
    Foundation.getImageSource('home', 20),
    Ionicons.getImageSource('heart-sharp', 20),
    Ionicons.getImageSource('md-person-sharp', 20),
  ]);

  const [home, list, profile] = icons;
  return {home, list, profile};
}

// sample to set Auth.login screen as Root Screen
function setRootSpalsh() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'auth',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.APP,
              // name: NAVIGATION_NAME.AGENT.connected
            },
          },
        ],
      },
    },
  });
}

function setRootWelcome() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'welcome',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.WELCOME.welcome,
              // name: NAVIGATION_NAME.AGENT.connected
            },
          },
        ],
      },
    },
  });
}

function setRootMain() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'HOME',
        children: [
          {
            component: {
              name: NAVIGATION_NAME.HOME.home,
              // name: NAVIGATION_NAME.AGENT.connected
            },
          },
        ],
      },
    },
  });
}

async function setRootHome() {
  const icons = await prepareIcons();
  Navigation.setRoot({
    root: {
      stack: {
        id: 'MAIN_STACK_CTM',
        children: [
          {
            bottomTabs: {
              id: 'bottom_tab_main_ota',
              children: [
                {
                  component: {
                    name: NAVIGATION_NAME.HOME.home,
                    options: {
                      bottomTab: {
                        text: 'Home',
                        textColor: '#9e9e9e',
                        fontSize: 10,
                        selectedFontSize: 10,
                        iconHeight: 28,
                        selectedTextColor: Colors.mainColor,
                        iconColor: '#9e9e9e',
                        selectedIconColor: Colors.mainColor,
                        icon: icons.home,
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

export default {
  setRootSpalsh,
  setRootWelcome,
  setRootHome,
  setRootMain,
};
