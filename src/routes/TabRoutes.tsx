// You can create this as a separate file
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomePage from '../pages/HomePage';
import SettingsScreen from '../pages/Settings/SettingsScreen';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

// Define a type for each route's configuration
interface RouteConfig {
  name: string;
  component: React.ComponentType<any>; 
  options: BottomTabNavigationOptions; 
}

const TabRoutes: RouteConfig[] = [
  {
    name: 'Home',
    component: HomePage,
    options: {
      tabBarIcon: ({focused, color}) => (
        <Ionicons
          name={focused ? 'home' : 'home-outline'}
          size={20}
          color={color}
        />
      ),
    },
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    options: {
      tabBarIcon: ({focused, color}) => (
        <Ionicons
          name={focused ? 'settings' : 'settings-outline'}
          size={20}
          color={color}
        />
      ),
    },
  },
];

export default TabRoutes;
