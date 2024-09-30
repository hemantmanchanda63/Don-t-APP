import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import HomePage from './src/pages/HomePage';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabRoutes from './src/routes/TabRoutes';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import 'react-native-gesture-handler';


const App = () => {
  const Tab = createBottomTabNavigator();
  // const Drawer = createDrawerNavigator();
  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        }}
      >
        {TabRoutes.map(item => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>

  //   <NavigationContainer>
  //   <Drawer.Navigator
  //     screenOptions={{
  //       // tabBarActiveTintColor: 'red',
  //       // tabBarInactiveTintColor: 'gray',
  //       headerShown: false
  //     }}
  //   >
  //     {TabRoutes.map(item => (
  //       <Drawer.Screen
  //         key={item.name}
  //         name={item.name}
  //         component={item.component}
  //         // options={item.options}
  //       />
  //     ))}
  //   </Drawer.Navigator>
  // </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});