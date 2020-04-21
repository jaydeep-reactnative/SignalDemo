import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from '../modules/first/FirstScreen';
import SecondScreen from '../modules/second/SecondScreen';

import {Navigations} from '../constants';

const AppStack = createStackNavigator(
  {
    [Navigations.FirstScreen]: {screen: FirstScreen},
    [Navigations.SecondScreen]: {screen: SecondScreen},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: Navigations.FirstScreen,
    navigationOptions: {
      backgroundColor: 'white',
    },
  },
);

export default createAppContainer(AppStack);
