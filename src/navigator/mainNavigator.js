import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps208841Navigator from '../features/Maps208841/navigator';
import Additem208840Navigator from '../features/Additem208840/navigator';
import Maps208836Navigator from '../features/Maps208836/navigator';
import UserProfile208832Navigator from '../features/UserProfile208832/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps208841: { screen: Maps208841Navigator },
Additem208840: { screen: Additem208840Navigator },
Maps208836: { screen: Maps208836Navigator },
UserProfile208832: { screen: UserProfile208832Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
