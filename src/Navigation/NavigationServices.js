import {Navigation} from 'react-native-navigation';

/**
 * This services used to help you handle navigation easyly
 * put function that help you navigate here.
 */

let activeNav;

function setActiveNavigation(nav) {
  const {componentName} = nav;
  if (!componentName.includes('component')) {
    activeNav = nav;
  }
}

function getActiveNavigation() {
  return activeNav;
}

// sample to navigate screen
function push(target, passProps = {}, options = {}) {
  Navigation.push(activeNav.componentId, {
    component: {
      name: target, // Push the screen registered with the 'Settings' key
      options,
      passProps,
    },
  });
}

function showModal(target, passProps = {}, options = {}) {
  Navigation.showModal({
    stack: {
      children: [
        {
          component: {
            name: target,
            options,
            passProps,
          },
        },
      ],
    },
  });
}

function dismissModal() {
  Navigation.dismissModal(activeNav.componentId);
}

function showOverlay(target, options = {}) {
  Navigation.showOverlay({
    component: {
      name: target,
      options,
    },
  });
}

function dismissOverlay() {
  Navigation.dismissOverlay(activeNav.componentId);
}

function mergeOptions(params) {
  Navigation.mergeOptions(activeNav.componentId, params);
}

function pop() {
  if (activeNav.componentId) {
    Navigation.pop(activeNav.componentId);
  }
}

function popToScreen(target, passProps = {}, options = {}) {
  if (activeNav.componentId) {
    Navigation.popTo();
  }
}

function popToRoot() {
  Navigation.popToRoot(activeNav.componentId);
}

export default {
  setActiveNavigation,
  getActiveNavigation,
  push,
  showModal,
  dismissModal,
  showOverlay,
  dismissOverlay,
  mergeOptions,
  pop,
  popToRoot,
  popToScreen,
};
