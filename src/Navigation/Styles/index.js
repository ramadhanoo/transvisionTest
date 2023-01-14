import {Platform} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {scaleWithPixel} from '../../Transforms';

const DefaultOptions = {
  navigationBar: {
    visible: true,
    backgroundColor: Colors.white,
  },
  statusBar: {
    visible: true, // Optional
    backgroundColor: Colors.white, // Optional, Android only
    drawBehind: false, // Optional, Android only
    translucent: false, // Optional, Android only
    animated: true, // Optional, IOs only
    hideWithTopBar: true, // Optional, IOs only
    // blur: true, // Optional, IOs only
  },
  topBar: {
    visible: false, // Optional
    animate: false, // Optional
    title: {
      text: '', // Optional
      fontSize: scaleWithPixel(18), // Optional
      color: Colors.black, // Optional
      fontFamily: Fonts.type.bold, // Optional
      fontWeight: 'bold',
      alignment: 'center', // Optional (center, fill)
      topMargin: 0, // Optional
    }, // Optional
    // subtitle:  {
    //   text: 'Subtitle', // Optional
    //   fontSize: 11, // Optional
    //   color: 'red', // Optional
    //   // fontFamily: , // Optional
    //   alignment: 'center', // Optional (center, fill)
    // }, // Optional
    backButton: {
      // accessibilityLabel: 'back', // Optional
      // id: 'id', // Optional, Android only
      color: Colors.black, // Optional
      // icon: Images.icon, // Optional
      showTitle: 0, // Optional, IOs only
      title: ' ', // Optional, IOs only
      // visible: true, // Optional
    }, // Optional
    background: {
      color: 'red', // Optional
      clipToBounds: false, // Optional, IOs only
      translucent: true, // Optional, IOs only
      // blur: true, // Optional, IOs only
    }, // Optional
    // barStyle: 'black', // Optional (default, black)
    // borderColor: 'red', // Optional, IOs only
    // borderHeight: 1, // Optional, Android only
    // drawBehind: false, // Optional
    // elevation: 1, // Optional, Android only
    // hideOnScroll: true, // Optional
    // hideNavBarOnFocusSearchBar: true, // Optional, IOs 11+ only
    // leftButtons: , // Optional
    leftButtonColor: Colors.black,
    // noBorder: false, // Optional, IOs only
    // rightButtons: [
    //   {
    //     id: 'id',
    //     text: 'Button 1', // Optional
    //     allCaps: false, // Optional, Android only
    //     fontSize: 11, // Optional
    //     icon: Images.icon, // Optional
    //     showAsAction: 'always', // Optional ('always', 'never', 'withText', 'ifRoom')
    //   }
    // ], // Optional
    // rightButtonColor: 'red', // Optional
    // searchBar: true, // Optional, IOs 11+ only
    // searchBarHiddenWhenScrolling: true, // Optional, IOs 11+ only
    // searchBarPlaceholder: 'search', // Optional, IOs 11+ only
  }, // Optional
  bottomTabs: {
    animate: true, // Optional
    visible: true, // Optional
    barStyle: 'black', // Optional (default, black)
    backgroundColor: 'white', // Optional
    translucent: false, // Optional, IOs only
    currentTabIndex: 0, // Optional
    drawBehind: false, // Optional
    elevation: 3, // Optional, Android only
    hideShadow: false, // Optional, IOs only
    hideOnScroll: true, // Optional, Android only
    preferLargeIcons: false, // Optional, Android only
    tabsAttachMode: 'together', // Optional ('together','afterInitialTab','onSwitchToTab')
    selectedIconColor: Colors.mainColor, // Optional
    titleDisplayMode: 'alwaysShow', // Optional ('alwaysShow','showWhenActive','alwaysHide')
  },
  bottomTab: {
    textColor: 'grey',
    selectedTextColor: Colors.mainColor,
    //selectedIconColor: Colors.mainColor,
    //iconColor: '', // Optional
  },
  layout: {
    backgroundColor: 'white',
    componentBackgroundColor: 'white',
    fitSystemWindows: true,
    orientation: 'portrait', // Optional ['portrait', 'landscape']
    topMargin: 0, // Optional, Android only
  },
  animations: {
    push: {
      waitForRender: Platform.OS === 'ios',
    },
    pop: {
      waitForRender: Platform.OS === 'ios',
    },
  },
  // overlay: {}, // Optional,
  modal: {
    swipeToDismiss: true,
  }, // Optional,
  // preview: {}, // Optional,
  // splitView: {}, // Optional,
  // fab: {}, // Optional, Android only
};

export default DefaultOptions;
