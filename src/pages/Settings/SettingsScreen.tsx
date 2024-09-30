import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import HomePage from '../HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from './Settings';
import Settings1 from './Settings1';

const SettingsScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Settings" component={Settings} />
      <HomeStack.Screen name="settings1" component={Settings1} />
    </HomeStack.Navigator>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
