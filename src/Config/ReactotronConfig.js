import Reactotron from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import Config from '.';

if (Config.enableReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  // eslint-disable-next-line react-hooks/rules-of-hooks
  Reactotron
    // .configure({ name: 'VsBoilterPlate' })
    // .configure({ name: 'Ignite App', host: '192.168.100.122' })
    // .configure({ name: 'Ignite App', host: '192.168.1.2' })
    .useReactNative()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
}
